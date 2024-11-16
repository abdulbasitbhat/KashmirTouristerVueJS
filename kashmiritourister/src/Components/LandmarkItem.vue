<template>

    <div class="landmark-container">
        <landmark-card class="card-container" :key="index" :id="landmark.id" :landmark="landmark.landmark"
            :location="landmark.location" :type="landmark.type" :properties="landmark.properties"
            :image="landmark.image" :best-visit="landmark.best_time_to_visit" />
        <div class="landmarkDetails">
            <div class="map-row">
                <!-- <div class="geography">
                    <map-iframe class="iframe-container" :iframesrc="landmark.iframesrc" />
                    <div class="weather">
                        <WeatherForcast/>
                    </div>
                </div> -->
                <map-iframe class="iframe-container" :iframesrc="landmark.iframesrc" />
                <div class="about-article">
                    <h3 class="h3-heading">About</h3>
                    <p class="about-para">
                        {{ landmark.about }}
                    </p>
                </div>
            </div>
            <div class="about-section">
                <h3>Highlights</h3>
                <ul>
                    <li v-for="(highlight, index) in landmark.highlights" :key="index">{{ highlight }}</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div class="imageGridMain">
        <ImagesGrid />
    </div> -->

</template>

<script>
import axios from 'axios';

export default {
    // props: ['landmark', 'location', 'type', 'properties', 'image', 'iframesrc','highlights','about',"bestVisit"]

    data() {
        return {
            landmark: {
                "id": null,
                "landmark": "",
                "location": "",
                "type": "",
                "properties": [],
                "image": "",
                "iframesrc": "",
                "highlights": [],
                "about": "",
                "best_time_to_visit": ""
            },
            place: null,
            currentWeather: {},
            forcast: {},
        }
    },
    
    props: ['id'],
    mounted() {
        const id = this.$route.params.id;
        console.log("id is", id)
        const link = "/proxy/api/Landmarks/id/" + id;
        axios.get(link).then(response => {
            console.log(response.data);
            this.landmark = response.data;
            axios.get("https://api.weatherapi.com/v1/forecast.json?key=74449658b2de4ee3b8e174328240511&q=" + response.data.landmark + "&days=3&aqi=yes&alerts=yes").then(responsee => {
                console.log(responsee);
                console.log(responsee);
                this.currentWeather = responsee.current;
                this.forcast = responsee.forcast
            })
        });
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

.box-shadows {
    box-shadow: 5px 5px 7px #888888;
}

.geography {
    display: flex;
    flex-direction: column;
}

.weather {
    background: #f1f1f1;
    height: 95px;
    width: 371px;
    margin-inline: 30px;
    border-radius: 7px;
}
</style>