<template>

    <div class="mapEmbedding">
        <iframe class='map-iframe'
            :src="iframesrc"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

</template>

<script>
export default {
  props:['iframesrc']
}
</script>

<style>
.mapEmbedding {
    margin-block: 31px;
    margin-inline: 28px;
    display: flex;
}
.map-iframe{
    border-radius: 6px;
    width: 375px;
    height: 369px;
}
</style>