import { createApp } from 'vue'
import App from './App.vue'
import CardItem from './Components/CardItem.vue'
import Landmark from './Components/LandmarkItem.vue'
import LandmarkCard from './Components/LandmarkCard.vue'
import NavbarHeader from './Components/NavbarHeader.vue'
import LandmarkItem from './Components/LandmarkItem.vue'
import MapIframe from './Components/MapIframe.vue'

const app = createApp(App)

app.component('card-item',CardItem)
app.component('landmark-item',LandmarkItem)
app.component('landmark-card',LandmarkCard)
app.component('navbar-header',NavbarHeader)
app.component('map-iframe',MapIframe)
app.mount('#app')