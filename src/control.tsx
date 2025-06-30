import { Button } from '@apitable/components';
import {
  useRecords, useActiveViewId, useFields, FieldType, useViewMeta
} from '@apitable/widget-sdk';
import React from 'react';
import ExcelJS from 'exceljs';

export const Control: React.FC = () => {
  const viewId = useActiveViewId();
  const allRecords = useRecords(viewId);
  const fields = useFields(viewId);
  const viewMeta = useViewMeta(viewId);

  // 配置常量
  const ROW_HEIGHT = 25;
  const IMAGE_HEIGHT = 30;
  const COLUMN_WIDTH = 10;
  const IMAGE_QUALITY = 0.3; // 图片压缩质量 (0.1-1.0，越高质量越好文件越大)

  // 获取当前视图显示的字段（过滤掉隐藏字段）
  const viewFields = fields.filter(field => {
    if (!viewId) return true; // 如果没有viewId，保留所有字段
    const propertyInView = field.getPropertyInView(viewId);
    return !propertyInView?.hidden; // 只保留未隐藏的字段
  });

  // 生成文件名：视图名称+当前日期
  const generateFileName = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${month}${day}`;
    const viewName = viewMeta?.name || '视图';
    return `${viewName}下载${dateStr}.xlsx`;
  };

  // 压缩图片为JPG格式的函数
  const compressImageToJpg = async (img: HTMLImageElement, quality: number = 0.8): Promise<ArrayBuffer> => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    canvas.width = img.width;
    canvas.height = img.height;

    // 绘制图片到canvas
    ctx.drawImage(img, 0, 0);

    // 转换为JPG格式的blob
    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (blob) {
          const buffer = await blob.arrayBuffer();
          resolve(buffer);
        }
      }, 'image/jpeg', quality);
    });
  };

  // 处理单个附件的函数
  const processAttachment = async (attachment: any, workbook: ExcelJS.Workbook, worksheet: ExcelJS.Worksheet, row: ExcelJS.Row, colIndex: number) => {
    try {
      const response = await fetch(attachment.url);
      const buffer = await response.arrayBuffer();

      const blob = new Blob([buffer]);
      const imageUrl = URL.createObjectURL(blob);
      const img = new Image();

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      const aspectRatio = img.width / img.height;
      const calculatedWidth = IMAGE_HEIGHT * aspectRatio;

      // 压缩图片为JPG格式
      const compressedBuffer = await compressImageToJpg(img, IMAGE_QUALITY);

      URL.revokeObjectURL(imageUrl);

      const imageId = workbook.addImage({
        buffer: compressedBuffer,
        extension: 'jpeg',
      });

      worksheet.addImage(imageId, {
        tl: { col: colIndex, row: row.number - 1 } as any,
        ext: { width: calculatedWidth, height: IMAGE_HEIGHT },
        editAs: undefined as any
      });
    } catch (error) {
      console.error('Failed to process attachment:', error);
      row.getCell(colIndex + 1).value = attachment.name;
    }
  };

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('工作表');



    // 动态生成表头（使用当前视图的所有字段）
    const headers = viewFields.map(field => field.name);
    const headerRow = worksheet.addRow(headers);

    // 设置表头行样式
    headerRow.height = 50;
    headerRow.eachCell((cell) => {
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'left',
        wrapText: true
      };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFC4D79B' }
      };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF000000' } },
        left: { style: 'thin', color: { argb: 'FF000000' } },
        bottom: { style: 'thin', color: { argb: 'FF000000' } },
        right: { style: 'thin', color: { argb: 'FF000000' } }
      };
    });

    // 设置列宽（所有列统一宽度）
    headers.forEach((_, index) => {
      worksheet.getColumn(index + 1).width = COLUMN_WIDTH;
    });

    // 处理每条记录
    for (const record of allRecords) {
      // 为每个记录添加一行，附件字段留空，其他字段使用文本值
      const rowData = viewFields.map(field => {
        if (field.type === FieldType.Attachment) {
          return ''; // 附件字段留空，稍后用图片填充
        }
        return record.getCellValueString(field.id);
      });
      const row = worksheet.addRow(rowData);

      // 判断是否有附件字段来决定行高
      const hasAttachments = viewFields.some(field => {
        const attachments = record.getCellValue(field.id);
        return field.type === FieldType.Attachment && attachments && Array.isArray(attachments) && attachments[0];
      });
      row.height = hasAttachments ? ROW_HEIGHT : 15;

      // 设置数据行单元格样式
      row.eachCell((cell) => {
        cell.alignment = {
          vertical: 'middle',
          horizontal: 'left',
          wrapText: false
        };
      });

      // 处理附件字段
      for (let i = 0; i < viewFields.length; i++) {
        const field = viewFields[i];
        if (field.type === FieldType.Attachment) {
          const attachments = record.getCellValue(field.id);
          if (attachments && Array.isArray(attachments) && attachments[0]) {
            await processAttachment(attachments[0], workbook, worksheet, row, i);
          }
        }
      }
    }

    // 下载文件
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = generateFileName();
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button
        onClick={exportToExcel}
        size="large"
        style={{
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        下载当前视图为EXCEL
      </Button>
    </div>
  );
};
