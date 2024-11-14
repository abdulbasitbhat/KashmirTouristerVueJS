<template>

    <div class="card landmarkCard" style="width: 18rem;">
        <img class="card-img-top card-image" :src="image" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">
            <h2>{{ landmark }}</h2>
            {{ location }}<br>
            {{ type }}<br>
            <p class="bestVisit">{{ bestVisit }}</p>
            <div class="card-property-holder">
                <div class="card-property" v-for="(prop, index) in properties">{{ prop }}</div>
            </div>
            </p>
            <div class="buttons">
                <button class="delete-button" @click="handleAddImages">Add Images</button>
                <button class="delete-button" @click="handleDelete">Delete</button>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    props: ['id', 'landmark', 'location', 'type', 'properties', 'image', 'bestVisit'],
    methods: {
        async handleDelete() {
            const url = "/proxy/api/Landmarks/delete/" + this.id;
            axios.delete(url).then(response => { console.log('Deleted successfully'); this.$router.push('/') })
        },
        async handleAddImages() {

        }
    },
}

</script>

<style>
.card {
    width: 300px;
    height: 400px;
    background: #171e26;
    border: 0;
    text-align: center;
}

.landmarkCard {
    width: 640px !important;
    height: 700px !important;
}

.card-image {
    height: 400px;
}

.card-text {
    color: #cdcaca;
}

.card-property-holder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 10px;
    margin: 10px auto;
    justify-content: center;
}

.card-property {
    margin-inline: 5px;
    background: #393939;
    padding-block: 2px;
    border-radius: 20px;
    padding-inline: 12px;
    margin-top: 10px;
    font-size: 14px;
}

h2 {
    font-size: x-large;
}

.bestVisit {
    margin-block: 30px;
}

.delete-button {
    margin-block: 10px;
    height: 32px;
    width: 130px;
    border-radius: 20px;
}
.buttons{
    margin-inline: 166px;
    display: flex;
    flex-direction: row;
}
</style>
