# Portfolio Project

本项目使用 **Astro** 框架和 **Tailwind CSS** 构建，支持中英双语切换。

## 技术栈
- Astro 5.x
- Tailwind CSS 3.x
- TypeScript (strict mode)
- Formspree (联系表单服务)

## 视觉风格
- Apple 风格设计
- 暖白背景 (#FAFAFA)
- 毛玻璃导航栏
- 圆角卡片和柔和阴影

## 开发命令
```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产构建
```

## 配置 Formspree

联系表单使用 Formspree 服务，需要配置你的 Formspree ID：

1. 访问 https://formspree.io/ 注册账号
2. 创建一个新表单，获取表单 ID（格式如：`abc123xyz`）
3. 打开 `src/components/ContactForm.astro` 文件
4. 找到第 7 行：`const formspreeId = 'YOUR_FORMSPREE_ID';`
5. 将 `YOUR_FORMSPREE_ID` 替换为你的实际 Formspree ID
6. 保存文件，表单即可正常工作

提交的消息将直接发送到你在 Formspree 注册时使用的邮箱。

