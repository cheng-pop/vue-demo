<template>
    <div>         
        <div class="layout">
             <Topnav toggleMenuButtonVisible class="nav" />
             <div class="content">
                <aside v-if="asideVisible">
                    <h2>文档</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/intro">说明</router-link>
                        </li>
                        <li>
                             <router-link to="/doc/install">安装</router-link>
                        </li>
                        <li>
                             <router-link to="/doc/get-use">快速上手</router-link>
                        </li>
                    </ol>
                    <h2>组件列表</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/button">Botton组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/switch">Switch组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/tabs">Tabs组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/dialog">Dialog组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/others">其他</router-link>
                        </li>
                    </ol>
                    <h2>项目</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/others-project">其他</router-link>
                        </li>
                        
                    </ol>
                </aside>
                <main>
                    <router-view />
                </main>
             </div>
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
     return {asideVisible}
    }
}
</script>
<style lang="scss" scoped>
$aside-index : 10;
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
        flex-shrink: 0;
    }
    > .content {
        flex-grow: 1;
        padding-top: 70px;
        padding-left: 200px;
        @media (max-width: 500px) {
            padding-left: 0; 
        }
    }
}
.content {
    display: flex;
    align-content: center;
    justify-content: center;
    > aside {
        flex-shrink: 0;
        box-shadow: 0 0 20px rgb(228, 225, 225);
    }
    > main {
        flex-grow: 1;
        padding: 16px; 
        box-shadow: 0 0 20px rgb(228, 225, 225);
    }
}
::-webkit-scrollbar{
     width: 0; 
}
aside {
    background: white;
    width: 180px;
    padding: 16px 4px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: scroll;
    padding-top: 70px;
    height: 100%;
    z-index: $aside-index;
    >h2 {
        margin-top: 2px;
        margin-bottom: 4px;
        padding: 0 8px;
        font-size: 22px;
    }
    >ol {
        >li {
            >a {
                text-decoration: none;
                display: block;
                padding: 8px 24px;
              
            }
            .router-link-active {
                background: #d4dee4;
            }
        }
        >li:hover{
            color: #ac93d5;
        }
    }
}
main {
  overflow: auto;
}
</style>