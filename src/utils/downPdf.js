import $ from 'jquery';
import _ from 'underscore';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * html下载为pdf
 * @param {DOM Element} node 需要的dom,这个dom元素是要导出pdf的div容器
 * @param {String} containerId 导出pdf的容器 id
 * @param {String} contentId 内容的容器id ，主要是有滚动条的
 * @param {String} name 导出pdf名字
 * 使用案例 downToPdf($('body',试卷','body','content'))
 */

export async function downToPdf(element, name, containerId, contentId) {
  changeCss(containerId, contentId);
  const w = element.width(); // 获得该容器的宽
  const h = element.height(); // 获得该容器的高
  const offsetTop = element.offset().top; // 获得该容器到文档顶部的距离
  const offsetLeft = element.offset().left; // 获得该容器到文档最左的距离
  let canvas = document.createElement('canvas');
  let abs = 0;
  const winI = $(window).width(); // 获得当前可视窗口的宽度（不包含滚动条）
  const winO = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
  if (winO > winI) {
    abs = (winO - winI) / 2; // 获得滚动条长度的一半
  }
  canvas.width = w * 2; // 将画布宽&&高放大两倍
  canvas.height = h * 2;
  const context = canvas.getContext('2d');
  context.scale(2, 2);
  context.translate(-offsetLeft - abs, -offsetTop);

  // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
  // translate的时候，要把这个差值去掉
  html2canvas(element[0], {
    allowTaint: true,
    height: $(contentId).outerHeight() // 设置pdf高度
  }).then(function (canvas) {
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;

    //一页pdf显示html页面生成的canvas高度;
    const pageHeight = (contentWidth / 592.28) * 841.89;

    //未生成pdf的html页面高度
    let leftHeight = contentHeight;

    //页面偏移
    let position = 0;

    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const imgWidth = 595.28;
    const imgHeight = (592.28 / contentWidth) * contentHeight;

    const pageData = canvas.toDataURL('image/jpeg', 1.0);

    const pdf = new jsPDF('', 'pt', 'a4');

    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      // 分页
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        //避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    pdf.save(name + '.pdf');

    // 还原样式
    $(_contentId).css({ 'overflow-y': 'auto', height: 'calc(100% - 60px)' });
    $(_containerId).css({ height: '100%' });
  });
}

/** 主要用来解决下有滚动体时载内容不全的问题
 *  设置一个高度，去掉滚动条，让内容 自动撑大，显示出全部内容
 */
function changeCss(containerId, contentId) {
  const _containerId = '#' + containerId;
  const _contentId = '#' + contentId;
  $(_contentId).css({ 'overflow-y': 'visible', height: 'auto' });
  $(_containerId).css({ height: '90000px' }); // 设置长度很长，或者auto
}
