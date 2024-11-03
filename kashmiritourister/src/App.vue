<script>
export default {
  data() {
    return {
      landmarks: [
        {
          landmark: 'Gulmarg',
          location: 'Baramulla',
          type: 'Tourist Attraction',
          properties: ['Meadows', 'Forests', 'Landscapes'],
          image: 'https://www.shraddharane.com/wp-content/uploads/2022/08/the-gondola-ride-in-gulmarg.png',
          iframesrc: ''
        },
        {
          landmark: 'Pahalgam',
          location: 'Anantnag',
          type: 'Tourist Attraction',
          properties: ['Valleys', 'River', 'Hiking trails'],
          image:'https://suvidhatravel.com/wp-content/uploads/2021/10/pahalgam-3-870x555.jpg',
          iframesrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.4331077942!2d75.29502489236299!3d34.01040333302159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1730656520081!5m2!1sen!2sin'
        },
        {
          landmark: 'Sonamarg',
          location: 'Ganderbal',
          type: 'Tourist Attraction',
          properties: ['Mountains', 'Glaciers', 'Meadows'],
          image:'https://travelmykashmir.com/wp-content/uploads/2023/07/749dc192-f172-4e06-8fc5-2de4bd343e1f.jpg',
          iframesrc:''
        },
        {
          landmark: 'Dal Lake',
          location: 'Srinagar',
          type: 'Water Body',
          properties: ['Houseboats', 'Shikaras', 'Floating gardens'],
          image:'https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-in-winter.jpg',
          iframesrc:''
        },
        {
          landmark: 'Mughal Gardens',
          location: 'Srinagar',
          type: 'Garden',
          properties: ['Terraced gardens', 'Fountains', 'Flowers'],
          image:'https://www.ekashmirtourism.com/wp-content/uploads/2022/08/fountain-mughal-gardan.jpg',
          iframesrc:''
        },
        {
          landmark: 'Betaab Valley',
          location: 'Pahalgam',
          type: 'Valley',
          properties: ['Picturesque landscapes', 'Forests', 'Rivers'],
          image:'https://i0.wp.com/www.vibrantfootsteps.com/wp-content/uploads/2023/06/20230602_072849-PS-scaled.jpg?fit=2560%2C1920&ssl=1',
          iframesrc:''
        },
        {
          landmark: 'Wular Lake',
          location: 'Bandipora',
          type: 'Lake',
          properties: ['Largest freshwater lake', 'Bird watching'],
          image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/13/61/e0/wular-lake.jpg?w=1200&h=1200&s=1',
          iframesrc:''
        },
        {
          landmark: 'Aru Valley',
          location: 'Pahalgam',
          type: 'Valley',
          properties: ['Camping', 'Trekking', 'Meadows'],
          image:'https://www.ekashmirtourism.com/wp-content/uploads/2023/11/photography-pahalgam.jpg',
          iframesrc:''
        },
        {
          landmark: 'Dachigam Park',
          location: 'Srinagar',
          type: 'Wildlife Sanctuary',
          properties: ['Wildlife', 'Kashmir stag', 'Natural habitat'],
          image:'https://www.indiasinvitation.com/wp-content/uploads/2016/07/Dachigam-National-Park.jpg',
          iframesrc:''
        }
      ]
    }
  }
}
</script>

<template>

  <navbar-header/>

  <div class="app-container">
    <card-item class="card-container" v-for="(landmark, index) in landmarks" :key="index" :landmark="landmark.landmark"
      :location="landmark.location" :type="landmark.type" :properties="landmark.properties" :image="landmark.image" />
  </div>
  
  <landmark-item :landmark="landmarks[1].landmark" :location="landmarks[1].location" :type="landmarks[1].type" :properties="landmarks[1].properties" :image="landmarks[1].image" :iframesrc="landmarks[1].iframesrc"/>

  
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
