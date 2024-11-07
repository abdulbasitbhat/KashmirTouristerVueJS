<template>
    <div class="addLandmarkContainer">
        <form @submit.prevent="handleSubmit">
            <div class="metaTable">
                <h3>Add a new place</h3>
                Landmark Name<br>
                <input class="input1" id='name' type='text' v-model="formData.landmark" /><br>
                Location<br>
                <input class="input1" id='location' type='text' v-model="formData.location" /><br>
                Type<br>
                <input class="input1" id='type' type='text' v-model="formData.type" /><br>
                Properties<br>
                <input class="input1" id='properties' type='text' v-model="formData.properties" /><br>
                Image Link<br>
                <input class="input1" id='image' type='text' v-model="formData.image" /><br>
                Google Maps Iframe Link<br>
                <input class="input1" id='iframesrc' type='text' v-model="formData.iframesrc" /><br>
                Highlights<br>
                <input class="input1" id='highlights' type='text' v-model="formData.highlights" /><br>
                About<br>
                <input class="input1" id='about' type='text' v-model="formData.about" /><br>
                Best Time To Visit<br>
                <input class="input1" id='best_time_to_visit' type='text' v-model="formData.best_time_to_visit" /><br>
            </div>
            <button class="uploadButton" onclick="">Add Landmark</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                "landmark": "",
                "location": "",
                "type": "",
                "properties": "",
                "image": "",
                "iframesrc": "",
                "highlights": "",
                "about": "",
                "best_time_to_visit": ""
            },
            jsonData: null,
            submitted: false
        }
    },
    methods: {
        async handleSubmit() {
            this.jsonData = {
                "landmark": this.formData.landmark,
                "location": this.formData.location,
                "type": this.formData.type,
                "properties": this.formData.properties.split(","),
                "image": this.formData.image,
                "iframesrc": this.formData.iframesrc,
                "highlights": this.formData.highlights.split(","),
                "about": this.formData.about,
                "best_time_to_visit": this.formData.best_time_to_visit
            }
            axios.post('/proxy/api/Landmarks/addLandmark',this.jsonData).then(response => {console.log("Saved Place Successfully",response);this.$router.push("/")});
        }
    }
}
</script>

<style>
.metaTable {
    display: flex;
    flex-direction: column;
    margin-inline: 400px;
    margin-top: 10px;
}

.editorCont {
    margin-inline: 100px;
}

.uploadButton {
    margin: 20px auto;
    display: block;
    border-radius: 45px;
    height: 42px;
    width: 190px;
}

.input1 {
    border-radius: 6px;
    height: 40px;
}
</style>