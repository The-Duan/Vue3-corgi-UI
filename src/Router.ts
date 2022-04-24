import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import introduce from './markdown/introduce.vue';
import install from './markdown/install.vue';
import getStarted from './markdown/get-started.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        //首页路由
        {path: '/', component: Home},
        //文档页路由
        {
            path: '/doc', component: Doc,
            children: [
                //默认页面
                {path:'',component:DocDemo},
                //文档页面路由
                {path:'introduce',component:introduce},
                {path:'install',component:install},
                {path:'getStarted',component:getStarted},
                //组件列表路由
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
});
router.afterEach(() => {
    console.log('路由切换了');
});