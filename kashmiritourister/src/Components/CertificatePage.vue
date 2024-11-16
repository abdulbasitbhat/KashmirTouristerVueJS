<template>
    <router-link class="routerLink" :to="`/landmark/${id}`">
        <div class="outer-card">
            <div class="cert-page-container">
                <div class="cccard" style="width: 18rem;">
                    <img class="card-img-top" :src="image" alt="Card image cap">
                    <div class="cccard-body">
                        <p class="cccard-text">
                        <h2>{{ landmark }}</h2>
                        {{ location }}<br>
                        {{ certid }}<br>
                        <div class="cccard-property-holder">
                            <div class="cccard-property" v-for="(prop, index) in properties">{{ prop }}</div>
                        </div>
                        </p>
                    </div>
                </div>
                <div class="selfie-container">
                   <img :src="image"/>
                </div>
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
    // props: ['id','landmark', 'location', 'type', 'properties', 'image','certid'],
    computed: {
        id() {
            return this.$route.query.id;
        },
        landmark() {
            return this.$route.query.landmark;
        },
        location() {
            return this.$route.query.location;
        },
        type() {
            return this.$route.query.type;
        },
        properties() {
            return this.$route.query.properties;
        },
        image() {
            return this.$route.query.image;
        },
        certid() {
            return this.$route.query.certid;
        }

    }
}

</script>

<style>
.cccard {
    width: 300px;
    height: 400px;
    background: #171e26;
    border: 0;
    text-align: center;
    border-radius: 6px;
}

.cccard img {
    border-radius: 6px 6px 0px 0px;
}

.cccard-text {
    color: #cdcaca;
    margin-block: 10px;
    margin-inline: 9px;
}

.cccard-property-holder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 10px;
    margin: 10px auto;
    justify-content: center;
}

.cccard-property {
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

.routerLink {
    text-decoration: none;
}

.cert-page-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* padding-block: 50px;, */
    padding-block: 18px;
}

.selfie-container {
    background: blue;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    margin-left: 10px;
}

.outer-card {
    background: #e3e3e3;
    margin-inline: 410px;
    height: 436px;
    border-radius: 10px;
    /* box-shadow: 10px 10px 15px rgb(255 255 255 / 50%); */
    margin-block: 96px;
}
</style>
