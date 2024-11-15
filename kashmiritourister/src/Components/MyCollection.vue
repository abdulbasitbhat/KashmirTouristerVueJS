<template>
    <div class="myCollHolder">
        <Sidebar />
        <div class="collection-container">
            <CollectedCards class="coll-card-container" v-for="(landmark, index) in collection" :key="index"
                :id="landmark.id" :landmark="landmark.landmark" :location="landmark.location" :type="landmark.type"
                :properties="landmark.properties" :image="landmark.image" :certid="collectionIds[index]" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CollectedCards from './CollectedCards.vue';

export default {
    data() {
        return {
            landmarks: [],
            collectionIds: [],
            collection:[],
            cardId:''
        }
    },
    methods: {
        async getAllCollection() {
            const link = "/proxy/api/loginDetails/id/" + sessionStorage.getItem("useremail");
            await axios.get(link).then((response) => {this.collectionIds = response.data.collection;});

            this.collectionIds.forEach(async (item, index) => {
                const linkCert = "/proxy/api/certificateCollected/id/" + item;
                console.log("linkCert",linkCert)
                await axios.get(linkCert).then((resp) => {this.cardId=resp.data.cardId;console.log("resp",resp)})
                const landmarkLink = "/proxy/api/Landmarks/id/" + this.cardId;
                await axios.get(landmarkLink).then((resp) => {
                    const data = {
                        ...resp.data,
                        "certId":item
                    }
                    this.collection.push(data)})
            })     
        }
    },
    mounted() {
       this.getAllCollection();
    }
}


</script>

<style>
.myCollHolder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.collection-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-inline: 18px;
    margin-block: 14px;
    max-height: 635px;
    overflow: auto;
}

.collection-container::-webkit-scrollbar {
    display: none;
}

.coll-card-container {
    flex: 0 0 20%;
    height: auto;
    margin: 10px
        /* min-width: 200px;  */
}
</style>


// {
// "id": 1,
// "landmark": "Gulmarg",
// "location": "Baramulla",
// "type": "Tourist Attraction",
// "properties": ["Meadows", "Forests", "Landscapes"],
// "image": "https://www.shraddharane.com/wp-content/uploads/2022/08/the-gondola-ride-in-gulmarg.png",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.945235994677!2d74.36274135681509!3d34.0506346205176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1af91308dd977%3A0x7a5cc65c8fb01df7!2sGulmarg%20193403!5e0!3m2!1sen!2sin!4v1730737779132!5m2!1sen!2sin",
// "highlights": [
// "Gondola ride offers breathtaking views, reaching an altitude of 3,979 meters and considered one of the highest cable
cars in the world.",
// "Known as India's skiing paradise, it features international-standard ski slopes and snowboarding options during the
winter.",
// "Gulmarg Golf Course, set amid stunning landscapes, is one of the highest golf courses globally and is a popular
summer attraction."
// ],
// "about": "Gulmarg, often called the 'Meadow of Flowers,' is a premier hill station in Kashmir that transforms into a
winter sports hub, especially for skiing enthusiasts. Its scenic beauty, with lush meadows, alpine forests, and
panoramic views of the Pir Panjal range, make it a year-round favorite among travelers. In summer, its meadows burst
into color, while winter blankets it in snow, creating a picturesque setting perfect for adventure and relaxation
alike.",
// "best_time_to_visit": "December to March for skiing, and April to June for summer activities and golfing."
// },
// {
// "id": 2,
// "landmark": "Pahalgam",
// "location": "Anantnag",
// "type": "Tourist Attraction",
// "properties": ["Valleys", "River", "Hiking trails"],
// "image": "https://suvidhatravel.com/wp-content/uploads/2021/10/pahalgam-3-870x555.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.4331077942!2d75.29502489236299!3d34.01040333302159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1730656520081!5m2!1sen!2sin",
// "highlights": [
// "Lidder River offers opportunities for trout fishing and riverside picnics, enhancing the natural charm of the
valley.",
// "Starting point for the Amarnath Yatra pilgrimage, which brings thousands of devotees every year.",
// "Surrounded by valleys like Betaab Valley and Aru Valley, providing breathtaking views and a serene atmosphere ideal
for nature lovers."
// ],
// "about": "Pahalgam, located in the heart of the Kashmir Valley, is known for its tranquil ambiance and pristine
natural beauty. It’s not only a popular destination for nature walks and trekking but also serves as the base camp for
the annual Amarnath Yatra. With rivers, forests, and panoramic views, Pahalgam is a beloved escape for those seeking
peace, adventure, or spirituality.",
// "best_time_to_visit": "March to June for pleasant weather, and September to November for beautiful autumn scenery."
// },
// {
// "id": 3,
// "landmark": "Sonamarg",
// "location": "Ganderbal",
// "type": "Tourist Attraction",
// "properties": ["Mountains", "Glaciers", "Meadows"],
// "image": "https://travelmykashmir.com/wp-content/uploads/2023/07/749dc192-f172-4e06-8fc5-2de4bd343e1f.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6591.741658430233!2d75.28657174359522!3d34.302835692254305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e234e197d78061%3A0x5ccdc93dd4660335!2sSonamarg!5e0!3m2!1sen!2sin!4v1730737957355!5m2!1sen!2sin",
// "highlights": [
// "Thajiwas Glacier is a major attraction, offering opportunities for trekking, sledding, and camping amid breathtaking
icy landscapes.",
// "The meadows turn golden under sunlight, earning Sonamarg the name 'Meadow of Gold.'",
// "Serves as the gateway to the Ladakh region and is a favored camping and trekking spot in the summer months."
// ],
// "about": "Sonamarg, meaning 'Meadow of Gold,' is a beautiful destination known for its stunning meadows, towering
mountains, and the famous Thajiwas Glacier. It is a perfect base for treks to high-altitude lakes and the Amarnath
pilgrimage. During summer, it’s a green paradise, and in winter, it transforms into a snowy wonderland, attracting
tourists year-round.",
// "best_time_to_visit": "April to October for trekking and camping, and December to February for snow lovers."
// },
// {
// "id": 4,
// "landmark": "Dal Lake",
// "location": "Srinagar",
// "type": "Water Body",
// "properties": ["Houseboats", "Shikaras", "Floating gardens"],
// "image": "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-in-winter.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52852.416864938554!2d74.81354490098762!3d34.113681871975764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c268876847%3A0xbf6def9295995179!2sDal%20Lake!5e0!3m2!1sen!2sin!4v1730737992671!5m2!1sen!2sin",
// "highlights": [
// "Famous for houseboat stays, allowing visitors a unique experience of living on the water with all amenities.",
// "Shikara rides provide a serene way to explore the lake, especially during sunrise and sunset.",
// "Floating gardens and markets offer a glimpse of traditional Kashmiri lifestyle and aquatic farming."
// ],
// "about": "Dal Lake is the heart of Srinagar and a symbol of Kashmir's natural beauty and culture. It is famous for
its shikara rides, houseboats, and the unique ecosystem that supports floating gardens and markets. With mountains in
the backdrop, Dal Lake is a visual treat, especially during early mornings and winter when it partly freezes.",
// "best_time_to_visit": "May to November for boating and scenic views; December to February to witness the frozen
lake."
// },
// {
// "id": 1,
// "landmark": "Gulmarg",
// "location": "Baramulla",
// "type": "Tourist Attraction",
// "properties": ["Meadows", "Forests", "Landscapes"],
// "image": "https://www.shraddharane.com/wp-content/uploads/2022/08/the-gondola-ride-in-gulmarg.png",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.945235994677!2d74.36274135681509!3d34.0506346205176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1af91308dd977%3A0x7a5cc65c8fb01df7!2sGulmarg%20193403!5e0!3m2!1sen!2sin!4v1730737779132!5m2!1sen!2sin",
// "highlights": [
// "Gondola ride offers breathtaking views, reaching an altitude of 3,979 meters and considered one of the highest cable
cars in the world.",
// "Known as India's skiing paradise, it features international-standard ski slopes and snowboarding options during the
winter.",
// "Gulmarg Golf Course, set amid stunning landscapes, is one of the highest golf courses globally and is a popular
summer attraction."
// ],
// "about": "Gulmarg, often called the 'Meadow of Flowers,' is a premier hill station in Kashmir that transforms into a
winter sports hub, especially for skiing enthusiasts. Its scenic beauty, with lush meadows, alpine forests, and
panoramic views of the Pir Panjal range, make it a year-round favorite among travelers. In summer, its meadows burst
into color, while winter blankets it in snow, creating a picturesque setting perfect for adventure and relaxation
alike.",
// "best_time_to_visit": "December to March for skiing, and April to June for summer activities and golfing."
// },
// {
// "id": 2,
// "landmark": "Pahalgam",
// "location": "Anantnag",
// "type": "Tourist Attraction",
// "properties": ["Valleys", "River", "Hiking trails"],
// "image": "https://suvidhatravel.com/wp-content/uploads/2021/10/pahalgam-3-870x555.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.4331077942!2d75.29502489236299!3d34.01040333302159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1730656520081!5m2!1sen!2sin",
// "highlights": [
// "Lidder River offers opportunities for trout fishing and riverside picnics, enhancing the natural charm of the
valley.",
// "Starting point for the Amarnath Yatra pilgrimage, which brings thousands of devotees every year.",
// "Surrounded by valleys like Betaab Valley and Aru Valley, providing breathtaking views and a serene atmosphere ideal
for nature lovers."
// ],
// "about": "Pahalgam, located in the heart of the Kashmir Valley, is known for its tranquil ambiance and pristine
natural beauty. It’s not only a popular destination for nature walks and trekking but also serves as the base camp for
the annual Amarnath Yatra. With rivers, forests, and panoramic views, Pahalgam is a beloved escape for those seeking
peace, adventure, or spirituality.",
// "best_time_to_visit": "March to June for pleasant weather, and September to November for beautiful autumn scenery."
// },
// {
// "id": 3,
// "landmark": "Sonamarg",
// "location": "Ganderbal",
// "type": "Tourist Attraction",
// "properties": ["Mountains", "Glaciers", "Meadows"],
// "image": "https://travelmykashmir.com/wp-content/uploads/2023/07/749dc192-f172-4e06-8fc5-2de4bd343e1f.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6591.741658430233!2d75.28657174359522!3d34.302835692254305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e234e197d78061%3A0x5ccdc93dd4660335!2sSonamarg!5e0!3m2!1sen!2sin!4v1730737957355!5m2!1sen!2sin",
// "highlights": [
// "Thajiwas Glacier is a major attraction, offering opportunities for trekking, sledding, and camping amid breathtaking
icy landscapes.",
// "The meadows turn golden under sunlight, earning Sonamarg the name 'Meadow of Gold.'",
// "Serves as the gateway to the Ladakh region and is a favored camping and trekking spot in the summer months."
// ],
// "about": "Sonamarg, meaning 'Meadow of Gold,' is a beautiful destination known for its stunning meadows, towering
mountains, and the famous Thajiwas Glacier. It is a perfect base for treks to high-altitude lakes and the Amarnath
pilgrimage. During summer, it’s a green paradise, and in winter, it transforms into a snowy wonderland, attracting
tourists year-round.",
// "best_time_to_visit": "April to October for trekking and camping, and December to February for snow lovers."
// },
// {
// "id": 4,
// "landmark": "Dal Lake",
// "location": "Srinagar",
// "type": "Water Body",
// "properties": ["Houseboats", "Shikaras", "Floating gardens"],
// "image": "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-in-winter.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52852.416864938554!2d74.81354490098762!3d34.113681871975764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c268876847%3A0xbf6def9295995179!2sDal%20Lake!5e0!3m2!1sen!2sin!4v1730737992671!5m2!1sen!2sin",
// "highlights": [
// "Famous for houseboat stays, allowing visitors a unique experience of living on the water with all amenities.",
// "Shikara rides provide a serene way to explore the lake, especially during sunrise and sunset.",
// "Floating gardens and markets offer a glimpse of traditional Kashmiri lifestyle and aquatic farming."
// ],
// "about": "Dal Lake is the heart of Srinagar and a symbol of Kashmir's natural beauty and culture. It is famous for
its shikara rides, houseboats, and the unique ecosystem that supports floating gardens and markets. With mountains in
the backdrop, Dal Lake is a visual treat, especially during early mornings and winter when it partly freezes.",
// "best_time_to_visit": "May to November for boating and scenic views; December to February to witness the frozen
lake."
// },{
// "id": 4,
// "landmark": "Dal Lake",
// "location": "Srinagar",
// "type": "Water Body",
// "properties": ["Houseboats", "Shikaras", "Floating gardens"],
// "image": "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-in-winter.jpg",
// "iframesrc":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52852.416864938554!2d74.81354490098762!3d34.113681871975764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c268876847%3A0xbf6def9295995179!2sDal%20Lake!5e0!3m2!1sen!2sin!4v1730737992671!5m2!1sen!2sin",
// "highlights": [
// "Famous for houseboat stays, allowing visitors a unique experience of living on the water with all amenities.",
// "Shikara rides provide a serene way to explore the lake, especially during sunrise and sunset.",
// "Floating gardens and markets offer a glimpse of traditional Kashmiri lifestyle and aquatic farming."
// ],
// "about": "Dal Lake is the heart of Srinagar and a symbol of Kashmir's natural beauty and culture. It is famous for
its shikara rides, houseboats, and the unique ecosystem that supports floating gardens and markets. With mountains in
the backdrop, Dal Lake is a visual treat, especially during early mornings and winter when it partly freezes.",
// "best_time_to_visit": "May to November for boating and scenic views; December to February to witness the frozen
lake."
// }