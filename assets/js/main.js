// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// 导航栏滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 移动端菜单开关
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // 切换汉堡菜单动画
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => {
      span.classList.toggle('open');
    });
  });
}

// 点击导航项目，关闭移动端菜单
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      
      // 还原汉堡菜单
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(span => {
        span.classList.remove('open');
      });
    }
  });
});

// 首页轮播功能
const initSlider = () => {
  const slides = document.querySelectorAll('.slide');
  const navDots = document.querySelectorAll('.nav-dot');
  let currentSlide = 0;
  let slideInterval;

  // 显示指定幻灯片
  const showSlide = (index) => {
    // 隐藏当前幻灯片
    slides[currentSlide].classList.remove('active');
    navDots[currentSlide].classList.remove('active');
    
    // 显示新幻灯片
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    navDots[currentSlide].classList.add('active');
  };

  // 下一张幻灯片
  const nextSlide = () => showSlide(currentSlide + 1);

  // 开始自动轮播
  const startSlideshow = () => {
    slideInterval = setInterval(nextSlide, 6000);
  };

  // 停止自动轮播
  const stopSlideshow = () => {
    clearInterval(slideInterval);
  };

  // 设置导航点击事件
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  // 初始化显示第一张幻灯片
  showSlide(0);
  startSlideshow();
};

// 当在首页时初始化轮播
if (document.querySelector('.hero-slider')) {
  initSlider();
}

// 瀑布流布局增强
const enhanceMasonry = () => {
  const grid = document.querySelector('.masonry-grid');
  if (!grid) return;
  
  const items = grid.querySelectorAll('.movie-card');
  
  // 随机设置一些卡片为宽或高
  items.forEach((item, index) => {
    // 每五个卡片中选择一个设为宽卡片
    if (index % 5 === 0) {
      item.classList.add('wide');
    }
    
    // 每七个卡片中选择一个设为高卡片
    if (index % 7 === 2) {
      item.classList.add('tall');
    }
  });
};

// 当在电影页面时初始化瀑布流
if (document.querySelector('.masonry-grid')) {
  enhanceMasonry();
}

// Markdown解析器 (用于影评页面)
const parseMarkdown = (markdownText) => {
  // 将Markdown格式转换为HTML
  let html = markdownText
    // 处理图片
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    // 处理标题
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // 处理粗体文本
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 处理斜体文本
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 处理引用
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    // 处理段落
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<)(.+)$/gm, '$1<br>');

  return `<p>${html}</p>`;
};

// 加载影评内容并渲染为HTML
const loadReview = (reviewId) => {
  const reviewContent = document.getElementById('review-content');
  if (!reviewContent) return;
  
  // 使用来自reviews-data.js的数据
  if (reviewsContent && reviewsContent[reviewId]) {
    reviewContent.innerHTML = parseMarkdown(reviewsContent[reviewId]);
  } else {
    reviewContent.innerHTML = '<p>抱歉，未找到该影评内容。</p>';
  }
};

// 如果在影评页面，加载对应的影评内容
const reviewContent = document.getElementById('review-content');
if (reviewContent) {
  const urlParams = new URLSearchParams(window.location.search);
  const reviewId = urlParams.get('id');
  if (reviewId) {
    loadReview(reviewId);
  }
} 