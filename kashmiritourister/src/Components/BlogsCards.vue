<template>
    <router-link class="routerLink" :to="`/blog/${id}`">
        <div class="card landmarkCard" style="width: 18rem;">
            <img class="card-img-top card-image" :src="image" alt="Card image cap">
            <div class="card-body">
                <p class="card-text blog-card-text">
                <h2>{{ topic }}</h2>
                {{ subtitle }}<br>
                <div class="card-property-holder">
                    <div class="card-property" v-for="(tag, index) in tags">{{ tag }}</div>
                </div>
                </p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['id', 'image', 'topic', 'subtitle', 'tags'],
    
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

.blog-card-text{
    margin-block: 80px;
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
.routerLink{
    text-decoration: none;
}
</style>