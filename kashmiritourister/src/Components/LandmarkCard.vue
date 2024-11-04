<template>
    
    <div class="card landmarkCard" style="width: 18rem;">
        <img class="card-img-top card-image" :src="image" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">
                <h2>{{ landmark }}</h2>
                {{ location }}<br>
                {{ type }}<br>
                <p class="bestVisit">{{bestVisit}}</p>
            <div class="card-property-holder" >  
                <div class="card-property" v-for="(prop,index) in properties">{{ prop }}</div>
            </div>  
            </p>
        </div>
    </div>

</template>

<script>
export default {
    props: ['landmark','location','type','properties','image','bestVisit']
}

</script>

<style>
.card{
    width: 300px;
    height: 400px;
    background: #171e26;
    border:0;
    text-align:center;
}
.landmarkCard{
    width: 640px !important;
    height: 700px !important;
}
.card-image{
    height: 400px;
}
.card-text{
    color: #cdcaca;
}
.card-property-holder{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 10px;
    margin: 10px auto;
    justify-content: center;
}
.card-property{
    margin-inline: 5px;
    background: #393939;
    padding-block: 2px;
    border-radius: 20px;
    padding-inline: 12px;
    margin-top: 10px;
    font-size:14px;
}
h2{
    font-size: x-large;
}
.bestVisit{
    margin-block: 30px;
}
</style>

