<template>

</template>

<script>
export default {
    data(){
        return {
            "id":2,
            "landmark": "Pahalgam",
            "location": "Anantnag",
            "type": "Tourist Attraction",
            "properties": ["Valleys", "River", "Hiking trails"],
            "image": "https://suvidhatravel.com/wp-content/uploads/2021/10/pahalgam-3-870x555.jpg",
            "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.4331077942!2d75.29502489236299!3d34.01040333302159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1730656520081!5m2!1sen!2sin",
            "highlights": [
              "Lidder River offers opportunities for trout fishing and riverside picnics, enhancing the natural charm of the valley.",
              "Starting point for the Amarnath Yatra pilgrimage, which brings thousands of devotees every year.",
              "Surrounded by valleys like Betaab Valley and Aru Valley, providing breathtaking views and a serene atmosphere ideal for nature lovers."
            ],
            "about": "Pahalgam, located in the heart of the Kashmir Valley, is known for its tranquil ambiance and pristine natural beauty. It’s not only a popular destination for nature walks and trekking but also serves as the base camp for the annual Amarnath Yatra. With rivers, forests, and panoramic views, Pahalgam is a beloved escape for those seeking peace, adventure, or spirituality.",
            "best_time_to_visit": "March to June for pleasant weather, and September to November for beautiful autumn scenery."
          }
        },
    // props: ['id'],
    mounted(){
        // API hit on id
        console.log("i am here")
    }
}
</script>

<style>
.landmark-container {
    display: flex;
    flex-direction: row;
}

.landmarkDetails {
    background: #e7e7eb;
    width: 800px;
    height: 700px;
    margin-block: 25px;
    margin-inline: 5px;
    border-radius: 30px;
}

.about-section {
    background: #f1f1f1;
    height: 240px;
    width: 740px;
    margin-inline: 29px;
    border-radius: 8px;
    padding: 25px;
    overflow: auto;
}
.about-section::-webkit-scrollbar {
  display: none;
}

.map-row {
    display: flex;
    flex-direction: row;
}

.about-article {
    background: #f1f1f1;
    width: 335px;
    height: 371px;
    margin-block: 30px;
    border-radius: 9px;
    overflow: auto;
}
.about-article::-webkit-scrollbar {
  display: none;
}

.h3-heading {
    font-size: 25px;
    margin-left: 34px;
    margin-top: 24px;
}

.about-para {
    margin: 8px 35px;
}

.iframe-container {
    background: #f1f1f1;
}
.box-shadows{
    box-shadow: 5px 5px 7px #888888;
}
</style>