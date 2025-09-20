import { Button } from '@apitable/components';
import {
  useRecords, useActiveViewId, useFields, FieldType, useViewMeta, useViewsMeta
} from '@apitable/widget-sdk';
import React from 'react';
import ExcelJS from 'exceljs';

export const Control: React.FC = () => {
  const viewId = useActiveViewId();
  const allRecords = useRecords(viewId);
  const fields = useFields(viewId);
  const viewMeta = useViewMeta(viewId);
  const viewsMeta = useViewsMeta();
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [downloadProgress, setDownloadProgress] = React.useState('');
  const [downloadSubtitle, setDownloadSubtitle] = React.useState('');

  // 上到下：title row, header row, banner row, content rows
  // 打印分组信息
  React.useEffect(() => {
    const currentView = viewsMeta.find(view => view.id === viewId);
    console.log('=== 分组信息完整返回 ===');
    console.log('groupInfo:', currentView?.groupInfo);
  }, [viewId, viewsMeta]);

  // 配置常量
  const IMAGE_ROW_HEIGHT = 35; // 包含图片的行高度
  const IMAGE_HEIGHT = 30;
  const IMAGE_QUALITY = 0.3; // 图片压缩质量 (0.1-1.0，越高质量越好文件越大)
  const GROUP_BANNER_HEIGHT = 20; // 分组banner行高度

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
    return `《${viewName}》${dateStr}.xlsx`;
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



    // 添加title row
    const titleText = generateFileName().replace('.xlsx', '');
    const titleRow = worksheet.addRow([titleText]);
    worksheet.mergeCells(1, 1, 1, viewFields.length);
    titleRow.height = 50;
    titleRow.getCell(1).alignment = { horizontal: 'center', vertical: 'middle' };
    titleRow.getCell(1).font = { bold: true, size: 16 };
    titleRow.getCell(1).border = {
      right: { style: 'thick', color: { argb: 'FF000000' } }
    };

    // 添加header row
    const headers = viewFields.map(field => field.name);
    const headerRow = worksheet.addRow(headers);

    // 设置header row样式
    headerRow.height = 50;
    headerRow.eachCell((cell, colNumber) => {
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center',
        wrapText: true
      };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF3373C9' }
      };
      cell.font = {
        color: { argb: 'FFFFFFFF' },  // 白色字体
        bold: true                    // 可选：设置为粗体
      };

      const isLastColumn = colNumber === viewFields.length;
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF000000' } },
        left: { style: 'thin', color: { argb: 'FF000000' } },
        bottom: { style: 'thin', color: { argb: 'FF000000' } },
        right: isLastColumn ? { style: 'thick', color: { argb: 'FF000000' } } : { style: 'thin', color: { argb: 'FF000000' } }
      };
    });

    // 根据前20行数据计算列宽
    const calculateTextWidth = (text: string): number => {
      if (!text) return 8;
      let width = 0;
      for (const char of text) {
        width += /[\u4e00-\u9fa5]/.test(char) ? 1.8 : 1.0; // 中文2.2倍，英文1倍
      }
      return Math.max(8, Math.min(width + 2, 25)); // 最小8，最大25，加2个字符padding
    };

    viewFields.forEach((field, index) => {
      let maxWidth = 8; // 最小宽度，不考虑表头
      const sampleSize = Math.min(100, allRecords.length); // 根据前100行数据计算列宽
      for (let i = 0; i < sampleSize; i++) {
        const cellValue = allRecords[i].getCellValueString(field.id) || '';
        maxWidth = Math.max(maxWidth, calculateTextWidth(cellValue));
      }
      worksheet.getColumn(index + 1).width = maxWidth;
    });

      // 收集所有附件任务
      setDownloadProgress('正在处理数据...');
      const attachmentTasks: any[] = [];

      // 获取分组字段ID并统计分组数量
      const currentView = viewsMeta.find(view => view.id === viewId);
      const groupFieldId = currentView?.groupInfo?.[0]?.fieldId;
      const groupCounts = new Map<string, number>();

      // 预先统计每个分组的数量
      if (groupFieldId) {
        allRecords.forEach(record => {
          const groupValue = record.getCellValueString(groupFieldId) || '无分组';
          groupCounts.set(groupValue, (groupCounts.get(groupValue) || 0) + 1);
        });
      } else {
        // 无分组情况，统计总数
        groupCounts.set('无分组', allRecords.length);
      }

      let lastGroupValue = '';

      for (let recordIndex = 0; recordIndex < allRecords.length; recordIndex++) {
        const record = allRecords[recordIndex];

        // 检测分组变化，插入banner row
        const currentGroupValue = groupFieldId ? (record.getCellValueString(groupFieldId) || '无分组') : '无分组';
        if (currentGroupValue !== lastGroupValue) {
          const groupCount = groupCounts.get(currentGroupValue) || 0;
          const bannerTitle = `${currentGroupValue}(${groupCount})`;
          const bannerRow = worksheet.addRow([bannerTitle]);
          worksheet.mergeCells(bannerRow.number, 1, bannerRow.number, viewFields.length);
          bannerRow.height = GROUP_BANNER_HEIGHT;
          bannerRow.getCell(1).alignment = { horizontal: 'center', vertical: 'middle' };
          bannerRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD0D0D0' } };
          bannerRow.getCell(1).font = { bold: true };
          bannerRow.getCell(1).border = {
            right: { style: 'thick', color: { argb: 'FF000000' } }
          };
          lastGroupValue = currentGroupValue;
        }

        // 添加content row
        const contentRowData = viewFields.map(field =>
          field.type === FieldType.Attachment ? '' : record.getCellValueString(field.id)
        );
        const contentRow = worksheet.addRow(contentRowData);

        // 检查content row是否包含附件
        const hasAttachments = viewFields.some(field => {
          const attachments = record.getCellValue(field.id);
          return field.type === FieldType.Attachment && attachments?.[0];
        });

        // 设置content row高度
        if (hasAttachments) {
          contentRow.height = IMAGE_ROW_HEIGHT;
        }

        // 设置content row样式和边框
        for (let colIndex = 1; colIndex <= viewFields.length; colIndex++) {
          const cell = contentRow.getCell(colIndex);
          cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

          const isLastColumn = colIndex === viewFields.length;
          const isLastRow = recordIndex === allRecords.length - 1;

          cell.border = {
            top: { style: 'thin', color: { argb: 'FF000000' } },
            left: { style: 'thin', color: { argb: 'FF000000' } },
            bottom: isLastRow ? { style: 'thick', color: { argb: 'FF000000' } } : { style: 'thin', color: { argb: 'FF000000' } },
            right: isLastColumn ? { style: 'thick', color: { argb: 'FF000000' } } : { style: 'thin', color: { argb: 'FF000000' } }
          };
        }

        // 收集附件任务而不是立即处理
        viewFields.forEach((field, i) => {
          if (field.type === FieldType.Attachment) {
            const attachments = record.getCellValue(field.id);
            if (attachments?.[0]) {
              attachmentTasks.push({ attachment: attachments[0], workbook, worksheet, row: contentRow, colIndex: i });
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
