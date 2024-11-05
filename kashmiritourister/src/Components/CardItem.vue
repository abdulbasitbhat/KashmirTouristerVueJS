<template>
    <router-link class="routerLink" :to="`/landmark/${id}`">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="image" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">
                <h2>{{ landmark }}</h2>
                {{ location }}<br>
                {{ type }}<br>
                <div class="card-property-holder">
                    <div class="card-property" v-for="(prop, index) in properties">{{ prop }}</div>
                </div>
                </p>
            </div>
        </div>
    </router-link>

</template>

<script>
export default {
    // data() {
    //     return {
    //         landmark: 'Gulmarg',
    //         location: 'Baramulla',
    //         type: 'Tourist Attraction',
    //         properties: ['meadows', 'forests', 'landscapes']
    //     }
    // },
    props: ['id','landmark', 'location', 'type', 'properties', 'image'],
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
.routerLink{
    text-decoration: none;
}

</style>
