<script>
import axios from 'axios';
export default {
  data() {
    return {
      blogs: [
        // {
        //   'id': 1,
        //   'image': 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=',
        //   'topic': 'How winters in kashmir is a mystic experience',
        //   'subtitle': 'Kashmir - Paradise at its peak in winters',
        //   'tags': ['Winters', 'Culture', 'Skiing', 'Winter Sports']
        // },
        // {
        //   'id': 2,
        //   'image': 'https://t3.ftcdn.net/jpg/00/85/97/56/360_F_85975647_vA8t40LHYq6G2JKNoXrafYPqaMFT4HSp.jpg',
        //   'topic': 'Shikara - Dolphin Of the Dal Lake',
        //   'subtitle': 'You need to get into one to feel the ambience',
        //   'tags': ['Shikara Ride', 'Ambience', 'Char Chinari']
        // },
        // {
        //   'id': 3,
        //   'image': 'https://as1.ftcdn.net/v2/jpg/01/40/46/04/1000_F_140460454_eL1z7uTVLTtChNKl4lROMgREpFuKOQzs.jpg',
        //   'topic': 'How photogenic is Kashmir',
        //   'subtitle': 'Color Grading done by nature itself',
        //   'tags': ['Photography', 'Cinematography', 'Majestic Locations']
        // },
        // {
        //   'id': 4,
        //   'image': 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=',
        //   'topic': 'How winters in kashmir is a mystic experience',
        //   'subtitle': 'Kashmir - Paradise at its peak in winters',
        //   'tags': ['Winters', 'Culture', 'Skiing', 'Winter Sports']
        // },
        // {
        //   'id': 5,
        //   'image': 'https://t3.ftcdn.net/jpg/00/85/97/56/360_F_85975647_vA8t40LHYq6G2JKNoXrafYPqaMFT4HSp.jpg',
        //   'topic': 'Shikara - Dolphin Of the Dal Lake',
        //   'subtitle': 'You need to get into one to feel the ambience',
        //   'tags': ['Shikara Ride', 'Ambience', 'Char Chinari']
        // },
        // {
        //   'id': 6,
        //   'image': 'https://as1.ftcdn.net/v2/jpg/01/40/46/04/1000_F_140460454_eL1z7uTVLTtChNKl4lROMgREpFuKOQzs.jpg',
        //   'topic': 'How photogenic is Kashmir',
        //   'subtitle': 'Color Grading done by nature itself',
        //   'tags': ['Photography', 'Cinematography', 'Majestic Locations']
        // }
      ]
    }
  },
  mounted() {
    axios.get('/proxy/api/Blogs/allBlogs').then(response => { this.blogs = response.data; console.log(response.data) }).catch(error => console.error(error));;
  }
}
</script>

<template>

  <div class="app-container">
    <BlogsCards class="card-container" v-for="(blog, index) in blogs" :key="index" :id="blog.id" :image="blog.image"
      :topic="blog.title" :subtitle="blog.subtitle" :tags="blog.properties" />
  </div>

</template>

<style>
.app-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 200px;
  margin: 35px;
  align-items: center;
  justify-content: center;
}

.card-container {
  margin: 25px;
}
</style>
