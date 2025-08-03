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
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [downloadProgress, setDownloadProgress] = React.useState('');
  const [downloadSubtitle, setDownloadSubtitle] = React.useState('');

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

  // 批量处理附件的纯函数
  const processAttachmentBatch = async (tasks: any[], completedImages: number, totalImages: number, startTime: number) => {
    const results = await Promise.allSettled(
      tasks.map(async ({ attachment, workbook, worksheet, row, colIndex }, index) => {
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

        const compressedBuffer = await compressImageToJpg(img, IMAGE_QUALITY);
        URL.revokeObjectURL(imageUrl);

        const imageId = workbook.addImage({
          buffer: compressedBuffer,
          extension: 'jpeg',
        });

        worksheet.addImage(imageId, {
          tl: { col: colIndex, row: row.number - 1 } as any,
          ext: { width: IMAGE_HEIGHT * (img.width / img.height), height: IMAGE_HEIGHT },
          editAs: undefined as any
        });

        // 更新进度和预估时间
        const currentCompleted = completedImages + index + 1;
        const percentage = Math.round((currentCompleted / totalImages) * 100);
        const elapsed = (Date.now() - startTime) / 1000;
        const avgTimePerImage = elapsed / currentCompleted;
        const remainingImages = totalImages - currentCompleted;
        const estimatedSeconds = Math.round(remainingImages * avgTimePerImage);

        setDownloadProgress(`${percentage}% 下载中`);
        setDownloadSubtitle(`初次下载较慢，约剩余${estimatedSeconds}秒`);
      })
    );

    // 处理失败的附件
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const { row, colIndex, attachment } = tasks[index];
        row.getCell(colIndex + 1).value = attachment.name;
      }
    });
  };

  const exportToExcel = async () => {
    setIsDownloading(true);
    setDownloadProgress('正在准备数据...');

    try {
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

      // 收集所有附件任务
      setDownloadProgress('正在处理数据...');
      const attachmentTasks: any[] = [];

      for (let recordIndex = 0; recordIndex < allRecords.length; recordIndex++) {
        const record = allRecords[recordIndex];

        const rowData = viewFields.map(field =>
          field.type === FieldType.Attachment ? '' : record.getCellValueString(field.id)
        );
        const row = worksheet.addRow(rowData);

        const hasAttachments = viewFields.some(field => {
          const attachments = record.getCellValue(field.id);
          return field.type === FieldType.Attachment && attachments?.[0];
        });
        row.height = hasAttachments ? ROW_HEIGHT : 15;

        row.eachCell((cell) => {
          cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: false };
        });

        // 收集附件任务而不是立即处理
        viewFields.forEach((field, i) => {
          if (field.type === FieldType.Attachment) {
            const attachments = record.getCellValue(field.id);
            if (attachments?.[0]) {
              attachmentTasks.push({ attachment: attachments[0], workbook, worksheet, row, colIndex: i });
            }
          }
        });
      }

      // 分批并发处理附件
      const BATCH_SIZE = 30;
      const startTime = Date.now();

      if (attachmentTasks.length === 0) {
        setDownloadProgress('准备生成文件');
        setDownloadSubtitle('');
      } else {
        setDownloadProgress('0% 下载中');
        setDownloadSubtitle('初次下载较慢，正在计算剩余时间...');

        for (let i = 0; i < attachmentTasks.length; i += BATCH_SIZE) {
          const batch = attachmentTasks.slice(i, i + BATCH_SIZE);
          await processAttachmentBatch(batch, i, attachmentTasks.length, startTime);
        }
      }

      // 下载文件
      setDownloadProgress('生成Excel文件');
      setDownloadSubtitle('');
      const buffer = await workbook.xlsx.writeBuffer();

      setDownloadProgress('准备下载');
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = generateFileName();
      a.click();
      window.URL.revokeObjectURL(url);

      setDownloadProgress('下载完成！');
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress('');
        setDownloadSubtitle('');
      }, 1500);
    } catch (error) {
      console.error('导出失败:', error);
      setDownloadProgress('导出失败，请重试');
      setDownloadSubtitle('');
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress('');
        setDownloadSubtitle('');
      }, 3000);
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button
        onClick={exportToExcel}
        disabled={isDownloading}
        size="large"
        style={{
          backgroundColor: isDownloading ? '#d9d9d9' : '#1890ff',
          color: isDownloading ? 'black' : 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '6px',
          cursor: isDownloading ? 'not-allowed' : 'pointer'
        }}
      >
        {isDownloading ? (downloadProgress || '正在下载...') : '下载当前视图为EXCEL'}
      </Button>
      {isDownloading && downloadSubtitle && (
        <div style={{
          marginTop: '8px',
          fontSize: '12px',
          color: '#666',
          textAlign: 'center'
        }}>
          {downloadSubtitle}
        </div>
      )}
    </div>
  );
};
