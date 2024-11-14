<template>
    <router-link class="routerLink" :to="`/landmark/${id}`">
        <div class="ccard" style="width: 18rem;">
            <img class="card-img-top" :src="image" alt="Card image cap">
            <div class="ccard-body">
                <p class="ccard-text">
                <h2>{{ landmark }}</h2>
                {{ location }}<br>
                id <br>
                <div class="ccard-property-holder">
                    <div class="ccard-property" v-for="(prop, index) in properties">{{ prop }}</div>
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
.ccard {
    width: 300px;
    height: 400px;
    background: #171e26;
    border: 0;
    text-align: center;
    border-radius:6px;
}

.ccard img{
    border-radius: 6px 6px 0px 0px;
}

.ccard-text {
    color: #cdcaca;
    margin-block: 10px;
    margin-inline: 9px;
}

.ccard-property-holder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 10px;
    margin: 10px auto;
    justify-content: center;
}

.ccard-property {
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
