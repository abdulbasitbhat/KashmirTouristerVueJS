<template>
    <table class="reqTable">
        <thead class="tableHead">
            <td>Id</td>
            <td>Image</td>
            <td>Landmark</td>
            <td>Email</td>
            <td>Hall Of Travellers</td>
            <td>Upload Certificate</td>
            <td>Issue</td>
        </thead>
        <tr class="tableRow" v-for="(req, index) in requests" :key="index">
            <td>{{ req.id }}</td>
            <td><img class="image-sec" :src="req.image"></td>
            <td>{{ req.landmark }}</td>
            <td>{{ req.email }}</td>
            <td>{{ req.hallOfTravellers }}</td>
            <td><input type="file" @change="handleFileUpload" /></td>
            <td>
                <span v-if="req.issueStatus === true">Issued</span>
                <button v-else class="issueButton" @click="uploadCertificate(req.id,req.email)">Issue</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            certificateData: {
                certificate: null
            },
            requests: null,
            uid: null,
            link: null,
            prevData: {

            }
        }
    },
    mounted() {
        axios.get('/proxy/api/certify/CertificateRequest/allRequests').then(response => { this.requests = response.data })
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.certificateData.certificate = e.target.result;
                }
                reader.readAsDataURL(file)
            }
        },
        async uploadCertificate(reqId,email) {
            axios.post("/proxy/api/Certificate/certificate/upload", this.certificateData).then(
                response => {
                    this.uid = response.data.id;
                    this.link = "https://localhost:7248/api/Certificate/certificate/" + response.data.id;
                    //send an email with the uid and link
                }
            ).then(
                () => {
                    const link = "/proxy/api/certify/CertificateRequest/delete/" + reqId;
                    axios.delete(link).then(() => { console.log("Deleted"); })
                    this.$router.push({
                        path: '/certificateData',
                        query: {
                            uid: this.uid,
                            link: this.link,
                            email:email
                        }
                    })
                }
            )
        }
    }
}
</script>

<style>
.reqTable {
    width: 95%;
    margin: 0 auto;
    margin-block: 30px;
    border-collapse: separate;
    border-spacing: 0 5px;
}

td {
    text-align: center;
}

.tableHead td {
    background-color: grey;
    font-size: 16px;
}

.tableRow td {
    font-size: 14px;
}

.issueButton {
    width: 75px;
    height: 25px;
    border-radius: 20px;
    background: #aaaab3;
}

tr td {
    max-width: 155px;
    overflow: auto;
}

.image-sec {
    width: 100%;
    height: 80%;
}
</style>