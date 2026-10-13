/* 文章末尾自动插入打赏区
 * 关闭方式：删掉本文件即可
 * 替换收款码：把 source/img/ 下的 wechat-qr.svg、alipay-qr.svg 换成你自己的图片
 */
hexo.extend.filter.register('after_post_render', function (data) {
  if (!data.permalink || data.permalink.indexOf('/posts/') === -1) return data;

  const reward = [
    '<div style="margin: 2.5rem 0 0.5rem; padding: 1.5rem 1.25rem; border: 1px dashed #c9d1d9; border-radius: 12px; text-align: center; background: #fafbfc;">',
    '  <div style="font-size: 15px; font-weight: 500; color: #24292f; margin-bottom: 0.35rem;">如果这篇文章对你有帮助，可以请我喝杯咖啡</div>',
    '  <div style="font-size: 13px; color: #57606a; margin-bottom: 1.1rem;">金额随意，备注一下昵称我会看到</div>',
    '  <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">',
    '    <div>',
    '      <img src="/img/wechat-qr.svg" alt="微信收款码" style="width: 132px; height: 148px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;">',
    '      <div style="font-size: 13px; color: #57606a; margin-top: 0.4rem;">微信</div>',
    '    </div>',
    '    <div>',
    '      <img src="/img/alipay-qr.svg" alt="支付宝收款码" style="width: 132px; height: 148px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;">',
    '      <div style="font-size: 13px; color: #57606a; margin-top: 0.4rem;">支付宝</div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('');

  data.content += reward;
  return data;
});
