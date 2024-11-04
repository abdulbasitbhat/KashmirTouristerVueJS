import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import CardItem from './Components/CardItem.vue'
import LandmarkCard from './Components/LandmarkCard.vue'
import NavbarHeader from './Components/NavbarHeader.vue'
import LandmarkItem from './Components/LandmarkItem.vue'
import MapIframe from './Components/MapIframe.vue'
import TestLandmarkItem from './Components/TestLandmarkItem.vue'
import RouterParentForApp from './RouterParentForApp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/landmark/:id', component: LandmarkItem},
    ]
});

const app = createApp(RouterParentForApp)

app.component('card-item',CardItem)
app.component('landmark-item',LandmarkItem)
app.component('landmark-card',LandmarkCard)
app.component('navbar-header',NavbarHeader)
app.component('map-iframe',MapIframe)
app.component('TestLandmarkItem',TestLandmarkItem)
app.use(router).mount('#app')