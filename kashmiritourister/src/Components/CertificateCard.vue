<template>
    <div class="input-container">
        <h2>Collect a Digital Card</h2>
        <br>
        <div class="input-item">
            Email<br>
            <input class="input-certify" type="text" v-model="uploadData.email" />
        </div>
        <div class="input-item">
            Place Of Visit<br>
            <input class="input-certify" type="text" v-model="uploadData.landmark" />
        </div>
        <div class="file-input">
            <div class="upload-label">
                Upload Selfie
            </div>
            <input type="file" name="Upload Selfie" class="upload-file" @change="handleFileUpload" accept="image/*" />
        </div>
        <div class="input-item">
            <input type="checkbox" v-model="uploadData.hallOfTravellers" />
            Would you like this image to be in our hall of travellers
        </div>
        <button type="button" class="btn btn-success" @click="handleSubmit">Upload</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            uploadData: {
                image: null,
                landmark: null,
                hallOfTravellers: false,
                email: "",
                issueStatus:false
            }
        }
    },
    methods: {
        async handleSubmit() {
            console.log("uploadData", this.uploadData)
            axios.post("/proxy/api/certify/CertificateRequest/addRequest",this.uploadData).then(response => {console.log("saved successfully")})
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                // Logic for conversion of image to base64 string for storage at backend
                //reader onload only works after readAsDataUrl and e is passed to reader.onload. Its async
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.uploadData.image = e.target.result;
                }
                reader.readAsDataURL(file);
            }
            else {
                this.uploadData.uploadedImage = null;
            }
        }
    }
}
</script>

<style>
.input-container {
    width: 30%;
    margin: 0 auto;
    margin-block: 25px;
}

.input-item {
    margin-block: 10px;
}

.file-input {
    margin-block: 20px;
}

.input-certify {
    border-radius: 6px;
    height: 32px;
    width: 405px;
}

.upload-label {
    margin-right: 110px;
}

.upload-file {
    width: 202px;
}

.file-input {
    display: flex;
}
</style>