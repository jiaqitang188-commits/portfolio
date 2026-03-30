# 图片资源使用说明

## 📁 目录结构

```
public/
├── images/
│   ├── works/          # 视频作品、项目展示
│   │   ├── magicbar-demo.svg (占位图)
│   │   └── placeholder-16-9.svg (占位图)
│   └── aigc/           # AIGC 生成作品
│       └── placeholder-9-16.svg (占位图)
```

## 🎨 占位图说明

已创建 3 个彩色占位图：

1. **MagicBar Demo** - `public/images/works/magicbar-demo.svg`
   - 蓝紫渐变背景
   - 显示 "MagicBar Demo Video"

2. **AIGC 作品 (9:16)** - `public/images/aigc/placeholder-9-16.svg`
   - 紫粉渐变背景
   - 竖屏比例，适合 AI 角色作品

3. **视频作品 (16:9)** - `public/images/works/placeholder-16-9.svg`
   - 蓝紫渐变背景
   - 横屏比例，适合视频剪辑

## 📝 如何使用

在 `index.astro` 或 `en.astro` 中，给 VideoCard 添加 `src` 属性：

```astro
<VideoCard
  title="AI 角色一致性作品"
  ratio="9:16"
  workId="ai-character"
  category="aigc"
  src="/images/aigc/placeholder-9-16.svg"
  prompt="Your prompt here..."
/>
```

## 🖼️ 替换为真实图片

将你的图片/视频文件放入对应目录：

- **AIGC 作品**: `public/images/aigc/your-image.jpg`
- **视频作品**: `public/images/works/your-video.mp4`

然后更新 `src` 路径：
```astro
src="/images/aigc/your-image.jpg"
```

## ✨ 新功能说明

1. **MagicBar 展示卡片** - 已添加到首页精选作品首位
2. **Prompt 查看按钮** - AIGC 卡片可点击查看 Prompt
3. **深度报道模板** - `ReportTemplate.astro` 可用于文字展示
