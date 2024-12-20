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
import CertificateCard from "./Components/CertificateCard.vue";
import CertifyRequests from "./Components/CertifyRequests.vue";
import CertificateData from "./Components/CertificateData.vue";
import ImagesGrid from "./Components/ImagesGrid.vue";
import Profile from "./Components/Profile.vue";
import Sidebar from "./Components/Sidebar.vue";
import MyCollection from "./Components/MyCollection.vue";
import CollectedCards from "./Components/CollectedCards.vue";
import vue3GoogleLogin from 'vue3-google-login';
import GoogleSignIn from "./Components/GoogleSignIn.vue";
import CertificatePage from "./Components/CertificatePage.vue";
import EditLandmark from "./Components/EditLandmark.vue";
import EditBlog from "./Components/EditBlog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/landmark/:id", component: LandmarkItem },
    { path: "/blogs", component: Blogs },
    { path: "/blog/:id", component: BlogItem },

    { path: "/createBlog", component: CreateBlog, beforeEnter: isAdmin  },
    { path: "/addLandmark", component: AddLandmarks, beforeEnter: isAdmin  },
    { path: "/certifyrequests", component: CertifyRequests, beforeEnter: isAdmin  },
    { path: "/editlandmark", component: EditLandmark, beforeEnter: isAdmin  },
    { path: "/editblog", component: EditBlog, beforeEnter: isAdmin },

    { path: "/certify", component: CertificateCard, beforeEnter: isLoggedIn  },
    { path: "/profile", component: Profile, beforeEnter: isLoggedIn  },
    { path: "/mycollection", component: MyCollection, beforeEnter: isLoggedIn  },
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
app.component("TextEditor", TextEditor);
app.component("AddLandmarks", AddLandmarks);
app.component("BlogItem", BlogItem);
app.component("CertificateCard", CertificateCard);
app.component("CertifyRequests", CertifyRequests);
app.component("CertificateData", CertificateData);
app.component("ImagesGrid", ImagesGrid);
app.component("Profile", Profile);
app.component("Sidebar", Sidebar);
app.component("MyCollection", MyCollection);
app.component("CollectedCards", CollectedCards);
app.component("GoogleSignIn",GoogleSignIn)
app.component("CertificatePage",CertificatePage);
app.component("EditLandmark",EditLandmark);
app.component("EditBlog",EditBlog);
app.use(vue3GoogleLogin, {
  clientId: '385031397260-jsoc206u19aquf516e8de95ahf22hpk4.apps.googleusercontent.com'
});
app.use(router).mount("#app");

// Route guards
function isLoggedIn(to, from, next) {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    next();
  } else {
    next('/');
  }
}

function isAdmin(to, from, next) {
  const isAdmin = sessionStorage.getItem('admin') === 'true';
  if (isAdmin) {
    next();
  } else {
    next('/');
  }
}
