<template>
    <div class="createBlogContainer">
        <div class="metaTable">
            <h3>Edit Blog</h3>
            Title<br>
            <input class="input1" type='text' v-model="data.title" /><br>
            Subtitle<br>
            <input class="input1" type='text' v-model="data.subtitle" /><br>
            Properties<br>
            <input class="input1" type='text' v-model="data.properties" /><br>
            Image URL<br>
            <input class="input1" type='text' v-model="data.image" /><br>
        </div>

        <div class="editorCont">
            <div ref="editorContainer" class="editor-container"></div>
            <button class="uploadButton" @click="handleUpload">Upload</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
    name: 'BlogEditor',
    data() {
        return {
            id: "",
            data: {
                title: '',
                subtitle: '',
                properties: '',
                image: '',
                blog: ''
            },
            quill: null,
        };
    },
    methods: {
        async getBlog() {
            const link = "/proxy/api/Blogs/id/" + this.id;
            await axios.get(link).then((resp) => {
                this.data = resp.data;
                this.setBlog();
            });
            console.log("this.getBlogdata", this.data);
        },
        async handleUpload() {
            if(typeof this.data.properties !== 'string'){
                this.data.properties = this.data.properties.join(",");
            }
            const jsonData = {
                image: this.data.image,
                title: this.data.title,
                subtitle: this.data.subtitle,
                properties: this.data.properties.split(","),
                blog: this.quill.root.innerHTML 
            };

            console.log("json", jsonData);
            const link = `/proxy/api/Blogs/update/${this.id}`;

            try {
                await axios.put(link, jsonData);
                console.log("Successfully Updated");
                this.$router.push("/blogs");
            } catch (err) {
                console.error(err);
            }
        },
        setBlog() {
            if (this.data.blog && this.quill) {
                this.quill.clipboard.dangerouslyPasteHTML(this.data.blog);
            }
        }
    },
    mounted() {
        this.id = this.$route.query.id;
        this.getBlog(); 

    
        this.quill = new Quill(this.$refs.editorContainer, {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    ['link', 'image'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ 'header': [1, 2, false] }],
                ],
            },
        });

        this.quill.on('text-change', () => {
            const content = this.quill.root.innerHTML;
            console.log("content", content);
        });
    }
}
</script>

<style scoped>
.metaTable {
    display: flex;
    flex-direction: column;
    margin-inline: 400px;
    margin-top: 10px;
}
.editorCont {
    margin-inline: 100px;
}
.uploadButton {
    margin: 20px auto;
    display: block;
    border-radius: 45px;
    height: 42px;
    width: 190px;
}
.input1 {
    border-radius: 6px;
    height: 40px;
}
.editor-container {
    height: 300px; /* Fixed height for the editor */
}
</style>