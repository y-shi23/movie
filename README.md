# 电影影评网站

这是一个简洁、现代、美观的电影影评网站，专注于分享高质量的电影评论和观点。

## 网站功能

- **首页**：轮换的电影海报大图展示，自然流畅的轮换效果
- **电影页面**：以瀑布流形式展示各个电影海报，海报大小不一，增强设计感
- **影评页面**：点击电影海报后进入，包含题头图和详细影评内容
- **关于页面**：关于网站和作者的介绍

## 网站结构

```
dianying/
├── index.html               # 首页
├── movies.html              # 电影列表页
├── review.html              # 影评详情页模板
├── about.html               # 关于页面
├── assets/                  # 资源文件夹
│   ├── css/                 # CSS样式文件
│   │   └── styles.css       # 主样式文件
│   ├── js/                  # JavaScript文件
│   │   └── main.js          # 主脚本文件
│   └── images/              # 图片资源
│       ├── slide1.jpg       # 首页轮播图1
│       ├── slide2.jpg       # 首页轮播图2
│       ├── slide3.jpg       # 首页轮播图3
│       ├── movie1.jpg       # 电影海报1
│       ├── movie2.jpg       # 电影海报2
│       ...
│       ├── review-header-1.jpg  # 影评头部图1
│       ├── review-header-2.jpg  # 影评头部图2
│       ...
│       ├── review-content-1.jpg # 影评内容图1
│       ├── review-content-2.jpg # 影评内容图2
│       ...
│       ├── about-me.jpg     # 关于页面个人图片
│       └── favicon.png      # 网站图标
└── reviews/                 # 影评Markdown文件
    ├── wandering-earth-2.md # 流浪地球2影评
    ├── oppenheimer.md       # 奥本海默影评
    ...
```

## 添加图片说明

为了使网站正常运行，您需要准备以下图片资源并放置在相应位置：

1. **轮播图**：在`assets/images/`中添加`slide1.jpg`、`slide2.jpg`、`slide3.jpg`三张大尺寸图片，建议尺寸为1920×1080像素或更大。

2. **电影海报**：在`assets/images/`中添加`movie1.jpg`到`movie12.jpg`共12张电影海报图片，建议尺寸为600×900像素。

3. **影评头部图**：在`assets/images/`中添加`review-header-1.jpg`、`review-header-2.jpg`、`review-header-3.jpg`等影评页面顶部的大尺寸图片，建议尺寸为1920×1080像素。

4. **影评内容图**：在`assets/images/`中添加`review-content-1.jpg`、`review-content-2.jpg`等影评内容中使用的图片。

5. **关于页面图片**：在`assets/images/`中添加`about-me.jpg`作为关于页面的个人形象照片。

6. **网站图标**：在`assets/images/`中添加`favicon.png`作为网站的图标。

## 添加影评说明

影评以Markdown格式存储在`reviews/`目录下，每篇影评应包含：

1. **标题**：使用一级标题格式`# 电影名：副标题`
2. **图片**：使用Markdown图片语法`![描述](图片路径)`
3. **段落**：正文内容
4. **引用**：使用`>`开头的引用格式
5. **小标题**：使用二级标题格式`## 小标题`

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)
- Markdown (用于影评内容)

## 部署说明

1. 将本项目所有文件上传到您的Web服务器
2. 确保所有图片资源已正确放置
3. 访问网站根目录下的`index.html`即可

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

本项目仅供个人学习和非商业用途。 