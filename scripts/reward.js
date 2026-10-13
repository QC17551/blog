/* 文章末尾自动插入打赏区
 * 关闭方式：删掉本文件即可
 * 替换收款码：把 source/img/ 下的 wechat-qr.svg、alipay-qr.svg 换成你自己的图片
 *
 * 注意：这里用 after_render:html 而不是 after_post_render，
 * 因为后者在 Hexo 7 里不会触发（实测脚本加载了但回调从未执行）
 */
const REWARD_HTML = [
  '<div style="margin: 2.5rem 0 0.5rem; padding: 1.5rem 1.25rem; border: 1px dashed #c9d1d9; border-radius: 12px; text-align: center;">',
  '  <div style="font-size: 15px; font-weight: 500; margin-bottom: 0.35rem;">如果这篇文章对你有帮助，可以请我喝杯咖啡</div>',
  '  <div style="font-size: 13px; opacity: .75; margin-bottom: 1.1rem;">金额随意，备注一下昵称我会看到</div>',
  '  <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">',
  '    <div>',
  '      <img src="/img/wechat-qr.svg" alt="微信收款码" style="width: 132px; height: 148px; border: 1px solid rgba(128,128,128,.2); border-radius: 8px;">',
  '      <div style="font-size: 13px; opacity: .75; margin-top: 0.4rem;">微信</div>',
  '    </div>',
  '    <div>',
  '      <img src="/img/alipay-qr.svg" alt="支付宝收款码" style="width: 132px; height: 148px; border: 1px solid rgba(128,128,128,.2); border-radius: 8px;">',
  '      <div style="font-size: 13px; opacity: .75; margin-top: 0.4rem;">支付宝</div>',
  '    </div>',
  '  </div>',
  '</div>'
].join('\n');

// 文章正文容器，只有文章页有这个标记
const POST_MARKER = 'post-content';

hexo.extend.filter.register('after_render:html', function (html) {
  const start = html.indexOf(POST_MARKER);
  if (start === -1) return html;

  const closeIdx = html.indexOf('</article>', start);
  if (closeIdx === -1) return html;

  return html.slice(0, closeIdx) + REWARD_HTML + html.slice(closeIdx);
});
