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
            <td>{{ req.requestId }}</td>
            <td>{{ req.image }}</td>
            <td>{{ req.landmark }}</td>
            <td>{{ req.email }}</td>
            <td>{{ req.hallOfTravellers }}</td>
            <td><input type="file" /></td>
            <td><button class="issueButton" @click="handleIssue">Issue</button></td>
        </tr>
    </table>
</template>

<script>
export default {
    data() {
        return {
            requests: [
                {
                    "requestId": "1",
                    "image": "backendLink",
                    "landmark": "djdhsfbsjd",
                    "email": "dflksdkfns@gmail.com",
                    "hallOfTravellers": true,
                },
                {
                    "requestId": "2",
                    "image": "backendLink2",
                    "landmark": "djdhsfbsjd",
                    "email": "dflksdkfns@gmail.com",
                    "hallOfTravellers": true,
                },
                {
                    "requestId": "3",
                    "image": "backendLink3",
                    "landmark": "djdhsfbsjd",
                    "email": "dflksdkfns@gmail.com",
                    "hallOfTravellers": true,
                },
                {
                    "requestId": "4",
                    "image": "backendLink4",
                    "landmark": "djdhsfbsjd",
                    "email": "dflksdkfns@gmail.com",
                    "hallOfTravellers": true,
                },
            ]
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
.issueButton{
    width: 75px;
    height: 25px;
    border-radius: 20px;
    background: #aaaab3;
}
</style>