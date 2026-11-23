# 成人百科 · 星绮动漫档案馆

动漫主题静态引流页。首屏使用大幅原创成年角色插画，包含分类切换、官网跳转、地址复制、常见问题和手机端固定入口。

## 使用方法

直接打开 `index.html` 可查看页面；正式部署时，将 压缩包内的网页文件与 `img` 文件夹一起上传到网站根目录。

所有主按钮均指向 `https://chengrenbaike.com/`；分类链接按官网对应目录设置。页面不提供播放或下载服务。

## 文件

- `index.html`：页面结构与中文内容。
- `styles.css`：动漫配色、桌面与手机适配。
- `script.js`：分类切换、键盘交互和复制地址。
- `img/hero-character.png`：透明背景角色原图。
- `img/hero-character.webp`：网页优化角色插画。
- `img/favicon.svg`：页面图标。

## 自定义

- 修改跳转域名：在 `index.html` 和 `script.js` 中查找 `https://chengrenbaike.com/`。
- 替换角色：保持 `img` 内文件名，或同步修改 HTML 图片引用。
- 修改主题色：编辑 `styles.css` 的 `:root` 变量。
- 正式部署后，按实际落地页地址补充 canonical 和社交分享图片的绝对 URL。

本页不依赖外部字体、框架或图片 CDN。原创角色为视觉插画，不代表官网的具体作品或真实人物。
