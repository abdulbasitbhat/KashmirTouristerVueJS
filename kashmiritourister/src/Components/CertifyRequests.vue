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
            <td><input type="file" /></td>
            <td >
                <span v-if="req.issueStatus === true">Issued</span>
                <button v-else class="issueButton" @click="handleIssue">Issue</button></td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            requests: null,
        }
    },
    mounted() {
        axios.get('/proxy/api/certify/CertificateRequest/allRequests').then(response => { this.requests = response.data })
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
.image-sec{
    width: 100%;
    height: 80%;
}
</style>