<template>
    <div class="createBlogContainer">
        <div class="metaTable">
            <h3>Add a new blog</h3>
            Title<br>
            <input class="input1" type='text' v-model="metadata.title" /><br>
            Subtitle<br>
            <input class="input1" type='text' v-model="metadata.subtitle" /><br>
            Properties<br>
            <input class="input1" type='text' v-model="metadata.properties"  /><br>
            Image URL<br>
            <input class="input1" type='text' v-model="metadata.image" /><br>
        </div>

        <div class="editorCont">
            <TextEditor :image="metadata.image" :title="metadata.title" :subtitle="metadata.subtitle" :properties="metadata.properties"/>
        </div>
    </div>
</template>

<script>
export default {
   data () {
    return{
        metadata : {
            'image':'',
            'title':'',
            'subtitle':'',
            'properties':''
        }
    }
   }
}
</script>

<style>
.metaTable {
    display: flex;
    flex-direction: column;
    margin-inline: 400px;
    margin-top: 10px;
}
.editorCont{
    margin-inline: 100px;
}
.uploadButton{
    margin: 20px auto;
    display: block;
    border-radius: 45px;
    height: 42px;
    width: 190px;
}
.input1{
    border-radius: 6px;
    height:40px;
}
</style>