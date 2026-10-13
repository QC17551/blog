/* 文章页左侧栏个人名片（卡片样式）
 * 实现方式：在最终 HTML 里定位文章页左侧栏容器（side-col），把名片卡片插进去
 * 之所以不用 inject_point：Fluid 的注入点无法识别外部注册的 injector，改 HTML 更可靠
 * 内容读取 _config.fluid.yml 的 about 配置，改那里即可
 * 颜色一律继承主题（不写死），这样深色模式下也能正常显示
 */
const themeCfg = (hexo.theme && hexo.theme.config) || {};
const about = themeCfg.about || {};
const avatar = about.avatar || '/img/avatar.svg';
const name = about.name || hexo.config.title;
const intro = about.intro || '';

const card = [
  '<div class="card profile-card" style="position: sticky; top: 5.5rem; text-align: center; padding: 1.25rem 1rem; border-radius: 12px; margin-top: 1rem;">',
  '  <img src="' + avatar + '" alt="avatar" class="mx-auto" style="width: 76px; height: 76px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(128,128,128,.15);">',
  '  <div style="margin-top: 0.75rem; font-size: 15px; font-weight: 600;">' + name + '</div>',
  '  <div style="margin-top: 0.35rem; font-size: 12px; line-height: 1.7; opacity: .75;">' + intro + '</div>',
  '  <div style="margin-top: 0.9rem; padding-top: 0.8rem; border-top: 1px solid rgba(128,128,128,.2); display: flex; justify-content: center; gap: 0.9rem; font-size: 12px;">',
  '    <a href="/about/" style="text-decoration: none; opacity: .85;">关于我</a>',
  '    <a href="https://github.com/yourname" target="_blank" rel="noopener" style="text-decoration: none; opacity: .85;">GitHub</a>',
  '  </div>',
  '</div>'
].join('\n');

const MARKER = '<div class="side-col d-none d-lg-block col-lg-2">';

hexo.extend.filter.register('after_render:html', function (html) {
  if (html.indexOf(MARKER) === -1) return html;
  return html.replace(MARKER, MARKER + card);
});
