import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import introduce from './components/introduce.vue';
import install from './components/install.vue';
import getStarted from './components/get-started.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path:'',component:DocDemo},

                {path:'introduce',component:introduce},
                {path:'install',component:install},
                {path:'getStarted',component:getStarted},

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