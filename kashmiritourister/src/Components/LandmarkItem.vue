<template>

    <navbar-header />

    <div class="landmark-container">
        <landmark-card class="card-container" :key="index" :landmark="landmark" :location="location" :type="type"
            :properties="properties" :image="image" />
        <div class="landmarkDetails">
            <map-iframe :iframesrc="iframesrc"/>
        </div>
    </div>

</template>

<script>
export default {
    props: ['landmark', 'location', 'type', 'properties', 'image','iframesrc']
}
</script>

<style>
.landmark-container {
    display: flex;
    flex-direction: row;
}

.landmarkDetails {
    background: #e7e7eb;
    width: 800px;
    height: 700px;
    margin-block: 25px;
    margin-inline: 5px;
    border-radius: 30px;
}
</style>