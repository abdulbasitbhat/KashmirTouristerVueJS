import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import CardItem from "./Components/CardItem.vue";
import LandmarkCard from "./Components/LandmarkCard.vue";
import NavbarHeader from "./Components/NavbarHeader.vue";
import LandmarkItem from "./Components/LandmarkItem.vue";
import MapIframe from "./Components/MapIframe.vue";
import TestLandmarkItem from "./Components/TestLandmarkItem.vue";
import RouterParentForApp from "./RouterParentForApp.vue";
import WeatherForcast from "./Components/WeatherForcast.vue";
import PlanTrip from "./Components/PlanTrip.vue";
import ContactCard from "./Components/ContactCard.vue";
import Blogs from "./Components/Blogs.vue";
import BlogsCards from "./Components/BlogsCards.vue";
import CreateBlog from "./Components/CreateBlog.vue";
import TextEditor from "./Components/TextEditor.vue";
import AddLandmarks from "./Components/AddLandmarks.vue";
import BlogItem from "./Components/BlogItem.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/landmark/:id", component: LandmarkItem },
    { path: "/plantrip", component: PlanTrip },
    { path: "/blogs", component: Blogs },
    { path: "/createBlog", component: CreateBlog },
    { path: "/addLandmark", component: AddLandmarks },
    { path: "/blog/:id", component: BlogItem },
  ],
});

const app = createApp(RouterParentForApp);

app.component("card-item", CardItem);
app.component("landmark-item", LandmarkItem);
app.component("landmark-card", LandmarkCard);
app.component("navbar-header", NavbarHeader);
app.component("map-iframe", MapIframe);
app.component("TestLandmarkItem", TestLandmarkItem);
app.component("WeatherForcast", WeatherForcast);
app.component("PlanTrip", PlanTrip);
app.component("ContactCard", ContactCard);
app.component("Blogs", Blogs);
app.component("BlogsCards", BlogsCards);
app.component("CreateBlog", CreateBlog);
app.component("TextEditor",TextEditor)
app.component("AddLandmarks",AddLandmarks)
app.component("BlogItem",BlogItem)
app.use(router).mount("#app");
