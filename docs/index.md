---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Jasper's Java Blog"
  text: "学习和分享Java编程的知识和经验"
  tagline: "深入Java核心，探索编程世界"
  image:
    src: /public/logo.png
    alt: logo
  actions:
    - theme: brand
      text: 开始学习
      link: /outline/java核心基础.md
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/jaspercliff

features:
  - title: Java 基础
    details: 从Java的基础语法到高级特性，全面学习Java编程。
  - title: Java 实战
    details: 通过实际项目和案例，掌握Java在不同场景中的应用。
  - title: 面试指南
    details: 为Java开发者准备的面试题和解答，助你在面试中脱颖而出。
---

<div class="latest-md-files">
  <div class="card">
    <h1>最新发布的文章</h1>
    <ul>
      <!-- <li v-for="file in files" :key="file">
        <a :href="`/${file}`">{{ file }}</a>
      </li> -->
    </ul>
  </div>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
.latest-md-files {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 80%; /* 设置卡片最大宽度 */
  width: 1000px
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
