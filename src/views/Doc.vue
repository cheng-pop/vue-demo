<template>
    <div>
         <Topnav />
        <div class="banner">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Botton组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
    components: {
        Topnav
    },
    setup(){
     const asideVisible = inject<Ref<boolean>>('asideVisible')
     console.log(asideVisible.value)
     return {asideVisible}
    }
}
</script>
<style lang="scss" scoped>
    $aside-index : 10;
    aside {
        background: lightblue;
        width: 150px;
        padding: 16px 0;
        height: 100%;
        z-index: $aside-index;
        >h2 {
          margin-bottom: 4px;
          padding: 0 16px;
        }
        >ol {
          >li {
            >a {
              display: block;
              padding: 4px 16px;
              text-decoration: none;
            }
            .router-link-active {
              background: white;
            }
          }
        }
        @media (max-width:500px) {
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 70px;
        }
    }
</style>