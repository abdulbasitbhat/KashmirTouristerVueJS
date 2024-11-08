<template>
    <img :src="blogData.image" class="blogImg"></img>
    <div class="blogContainer">
        <h2 class="blogTitle">{{ blogData.title }}</h2>
        <h3 class="blogSubtitle">{{ blogData.subtitle }}</h3>
        <div class="propertiesContainer">
            <p class="BlogProperties" v-for="(property, index) in blogData.properties" :key="index">{{ property }}</p>
        </div>
        <br>
        <div v-html="blogData.blog"></div>
    </div>
    <button class="delete-button" @click="handleDelete">Delete</button>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            'blogData': {
                "image": "https://c4.wallpaperflare.com/wallpaper/670/272/895/happy-snow-fall-kashmir-murree-pakistan-wallpaper-preview.jpg",
                "title": "How Kashmir Lights Up in Winters",
                "subtitle": "Kashmir as an international favourite for Winter Sports",
                "properties": ["Winter Sports", "Skiing", "Tourism"],
                "blog": "<h1><strong>Winter in Kashmir: A Snow-Covered Paradise</strong></h1><p><br></p><p>When winter arrives in Kashmir, it brings a wonderland that is nothing short of magical. The landscape, blanketed in pristine snow, the cozy warmth of kangris (traditional Kashmiri fire pots), and the inviting smell of kahwa tea fill the air, making Kashmir an enchanting place to experience during the cold months.</p><p><br></p><h2>A Scenic Transformation</h2><p>Kashmir undergoes a beautiful transformation as winter sets in. Snow covers the vast meadows, mountains, and forests, creating breathtaking scenery that looks as if it’s straight out of a fairytale. The iconic Dal Lake in Srinagar freezes partially, while shikaras (houseboats) float gently on its surface, adding to the allure. Locals and tourists alike bundle up in their pherans (traditional woolen cloaks) and venture out to marvel at the landscape and enjoy snow-related activities.</p><p><br></p><h2>Winter Activities in Kashmir</h2><p>For adventure seekers, Kashmir is an ideal destination in winter. <strong>Gulmarg</strong>, with its world-renowned ski resorts and powdery slopes, becomes the epicenter for skiing, snowboarding, and heli-skiing. The Gulmarg Gondola, one of the highest cable cars in the world, offers awe-inspiring views of the snow-laden valleys and peaks, making it an unforgettable experience.</p><p>For those looking for a gentler approach to winter sports, <strong>Pahalgam</strong> is an excellent spot for sledding and snowshoeing. Strolling along the snow-covered pathways in Pahalgam, surrounded by silent forests and frozen rivers, feels peaceful and calming.</p><p><br></p><h2>Cultural Warmth Amidst the Cold</h2><p>Kashmiris have time-tested traditions to keep the winter chill at bay. Families gather around kangris, small portable fire pots that keep people warm, and sip on <strong>noon chai</strong> (a salty, pink tea) and <strong>kahwa</strong> (a spiced green tea with saffron and almonds). The cozy ambiance of Kashmiri homes, with their traditional heating systems, wood paneling, and intricate carpets, contrasts beautifully with the winter outside.</p><p>Winter is also when <strong>harissa</strong>, a rich, meaty delicacy, is enjoyed across the valley. Made with slow-cooked lamb and rice, it’s a favorite during the cold season and is best enjoyed with traditional Kashmiri bread, or lavasa.</p><h4><br></h4><h2>The Spirit of Kashmiri Hospitality</h2><p>The warmth of Kashmiri hospitality is a welcome relief from the cold. During winter, families open their homes to visitors, sharing stories, traditional foods, and local insights. The people’s friendliness and generosity make anyone feel at home here.</p><p><br></p><p>Whether you’re visiting Kashmir for the first time or returning to embrace its winter magic, the valley's beauty, culture, and warmth leave a lasting impression. Winter in Kashmir is a celebration of nature’s marvels, cultural richness, and the enduring spirit of its people, offering an experience like nowhere else on Earth.</p>"
            }
        }
    },
    mounted() {
        var link = "/proxy/api/Blogs/id/" + this.$route.params.id;
        axios.get(link).then(response => { this.blogData = response.data;console.log("blog is",response) });
    },
    methods:{
        async handleDelete(){
            const link = "/proxy/api/Blogs/deleteBlog/" + this.$route.params.id;
            axios.delete(link).then(response => {console.log("Successfully Deleted");this.$router.push('/blogs')})
        }
    }
}

</script>

<style>
.blogImg {
    display: block;
    margin: 0 auto;
    height: 80%;
    width: 50%;
    margin-block: 30px;
    margin-bottom: 30px;
}

.blogContainer {
    margin-inline: 286px;
    text-align: justify;
}

.blogTitle {
    font-size: 54px;
    font-weight: 800;
}

.propertiesContainer {
    display: flex;
    flex-direction: row;
}

.BlogProperties {
    margin-right: 18px;
    background: #dbdbdb;
    border-radius: 24px;
    padding-inline: 12px;
    padding-block: 2px;
}
.delete-button{
    margin-block: 10px;
    height: 32px;
    width: 130px;
    border-radius: 20px;
    display: block;
    margin: 0 auto;
}
</style>