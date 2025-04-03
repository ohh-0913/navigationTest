# 导航网站 - GitHub Pages部署指南

这是一个简单的网站导航页面，提供分类浏览和搜索功能，帮助您快速访问常用网站。

## 网站功能

- 响应式设计，适配各种屏幕尺寸
- 分类导航，快速查找网站
- 自定义分类管理，支持拖拽排序
- 数据导入导出功能
- 个性化壁纸设置
- 每日一言自动刷新

## 跨域访问优化

本版本包含了针对GitHub Pages跨域问题的优化，解决部分用户无法访问的问题：

1. 添加了CORS响应头设置
2. 优化了外部资源加载方式
3. 增强了API请求的容错性
4. 提供了备选部署方案

### 访问问题解决方案

如果用户仍然无法访问网站，请建议他们尝试：

1. 修改DNS设置为国内DNS（如：114.114.114.114）
2. 清除浏览器缓存和Cookie
3. 使用其他浏览器尝试访问
4. 尝试通过Netlify部署版本访问（见下方说明）

## 部署到GitHub Pages

### 1. 注册GitHub账号
1. 访问 [GitHub官网](https://github.com/)
2. 点击"Sign up"(注册)按钮
3. 填写用户名、邮箱和密码，完成注册
4. 验证邮箱

### 2. 创建代码仓库
1. 登录GitHub账号
2. 点击右上角"+"图标，选择"New repository"(新仓库)
3. 在"Repository name"(仓库名称)中输入: `navigation`
4. 选择"Public"(公开) - **重要：必须选择公开才能免费使用GitHub Pages**
5. 勾选"Add a README file"(添加README文件)
6. 点击"Create repository"(创建仓库)按钮

### 3. 上传网站文件
1. 在仓库页面点击"Add file"(添加文件)→"Upload files"(上传文件)
2. 将所有网站文件拖拽到上传区域:
   - index.html
   - script.js
   - styles.css
   - background.jpg
3. 在底部"Commit changes"(提交更改)部分，填写简短描述，如"上传导航网站文件"
4. 点击"Commit changes"(提交更改)按钮

### 4. 配置GitHub Pages
1. 在仓库页面点击"Settings"(设置)选项卡
2. 在左侧菜单中找到并点击"Pages"
3. 在"Source"(源)部分，选择"Deploy from a branch"(从分支部署)
4. 在"Branch"(分支)下拉菜单选择"main"，目录选择"/(root)"
5. 点击"Save"(保存)按钮
6. 等待几分钟，页面会显示"Your site is published at https://用户名.github.io/navigation/"

### 5. 验证部署
1. 点击提示中的网址访问您的网站
2. 确认所有功能正常工作

## Netlify部署（备选方案）

如果GitHub Pages访问不稳定，可以考虑使用Netlify部署：

1. 注册[Netlify](https://www.netlify.com/)账号
2. 点击"New site from Git"
3. 选择您的GitHub仓库
4. 保持默认设置，点击"Deploy site"
5. 等待部署完成，Netlify会自动应用netlify.toml中的设置
6. 使用Netlify提供的域名访问您的网站

## 更新网站内容

当您需要更新网站内容时：

1. 回到GitHub仓库页面
2. 点击要修改的文件
3. 点击编辑按钮(铅笔图标)
4. 修改内容后点击"Commit changes"(提交更改)
5. GitHub会自动重新部署您的网站(通常1-2分钟内生效)

## 文件说明

- `index.html` - 网站主页面
- `script.js` - 所有功能的JavaScript代码
- `styles.css` - 样式表文件
- `background.jpg` - 默认背景图片

## 注意事项

1. GitHub Pages完全免费，但仓库必须是公开的
2. 每月有100GB的带宽限制，对个人网站足够使用
3. 支持自定义域名(可选，需自行购买域名)
4. 每次提交更改后，GitHub会自动重新部署网站 