<template>
  <div >
    <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
        <h1>UI界面</h1>
        <h2>框架</h2>
        <p class="actions">
            <a href="https://github.com">github</a>
            <router-link to="/doc">start</router-link>
        </p>
    </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon" >
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon" >
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写 </p>
        </li>
        <li>
          <svg class="icon" >
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都比较简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>
<style lang="scss" scoped>
$green: #ac93d5;
$border-radius: 4px;
$color: #b296d6;
.topnavAndBanner{
  clip-path: ellipse(80% 60% at 50% 40%);
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
.features{
  margin: 64px auto;
  width: 100%;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      align-content: space-between;
      justify-content: start; 
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      grid-template-areas:
        "icon title"
        "icon text";
      >svg {
        width: 64px;
        height: 64px;
        grid-area: icon;
      }
      >h3 {
        font-size: 28px;
        grid-area: title;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.banner {
  color: $color;
  padding: 130px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>