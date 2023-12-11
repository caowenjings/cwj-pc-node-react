/** 文件导出下载
 *  BOlB处理文件流type 整理表格：http://www.taodudu.cc/news/show-4189695.html?action=onClick
 */
import { message } from 'antd';
import sdk from '@/service/node';

/** 1.下载文件方法
 * 调用： const url = '/sasd/fsd/xxxx/exportMailData2Excel'
 * this.downloadFile(url, 'blob', this.isSearch)  // 调用 方法； post 方式；也可以改为 get
 */

function downloadFile(url: string, resType: string, para: string) {
  sdk
    .getDown(url, para, {
      responseType: resType
      // responseType:'arraybuffer', //可以开启不同传输模式  字节兼容
    })
    .then((res: any) => {
      const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
      const downloadElement = document.createElement('a'); // 创建下载的链接
      const href = window.URL.createObjectURL(blob);
      downloadElement.href = href;
      downloadElement.download = '异地社保卡邮寄.xls'; // 下载后的文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); // 下载
      document.body.removeChild(downloadElement); // 下载完成 移除 a
      window.URL.revokeObjectURL(href); // 释放blob对象
    });
}

// 2.通过h5的下载方法
function downFile(content: any, filename: any) {
  let ele = document.createElement('a'); // 创建下载链接
  ele.download = filename; //设置下载的文件名
  ele.style.display = 'none'; // 隐藏的可下载链接

  let blob = new Blob([content]); // 字符内容转变成blob地址
  ele.href = URL.createObjectURL(blob);
  document.body.appendChild(ele); // 绑定点击时间
  ele.click();
  document.body.removeChild(ele);
}

// ---- 在xs项目中使用的
// GET请求的下载zip
export const downloadJarFile = (baseUrl: string, requestUrl: string, fileName: string, params?: any) => {
  const resourceId = sessionStorage.getItem('resource-id');
  const token = sessionStorage.getItem('token');
  const tokenName = sessionStorage.getItem('tokenName');
  const req = new XMLHttpRequest();
  const url = params ? `${baseUrl + requestUrl}?${qs.stringify(params)}` : baseUrl + requestUrl;
  req.open('GET', url, true);
  req.responseType = 'arraybuffer';
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader('sourceName', '');
  if (resourceId) {
    req.setRequestHeader('resource-id', resourceId);
  }
  if (token && tokenName) {
    req.setRequestHeader(tokenName, token);
  }
  req.setRequestHeader('app-id', JSON.parse(sessionStorage.getItem('baseInfo')!)?.id);
  req.onload = function () {
    const data = req.response;
    const blob = new Blob([data], {
      type: 'application/zip;charset=utf-8'
    });
    if (data instanceof ArrayBuffer) {
      const textCoder = new TextDecoder();
      const u8arr = new Uint8Array(data);
      const temp = textCoder.decode(u8arr);
      if (temp.includes('"code":"500"')) {
        message.error(JSON.parse(temp).msg);
      } else {
        const blobUrl = window.URL.createObjectURL(blob);
        download(blobUrl, fileName);
      }
    }
  };
  req.send();
};

const download = (blobUrl: string, fileName: string) => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  a.download = fileName;
  a.href = blobUrl;
  a.click();
  document.body.removeChild(a);
};
