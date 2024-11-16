<template>
    <div>
      <div ref="editorContainer" class="editor-container"></div>
    </div>
    <button class="uploadButton" @click="handleUpload">Upload</button>
  </template>
  
  <script>
  import axios from 'axios';
import Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  
  export default {
    name: 'TextEditor',
    props: ["image","title","subtitle","properties"],
    data() {
      return {
        quill: null,
      };
    },
    methods: {
        async handleUpload(){
            var jsonData = {
                "image":this.image,
                "title":this.title,
                "subtitle":this.subtitle,
                "properties":this.properties.split(","),
                "blog":this.quill.root.innerHTML
            }
            console.log("json",jsonData)
            axios.post('/proxy/api/Blogs/addBlog',jsonData).then(response =>{console.log("Successfully Uploaded");this.$router.push("/blogs")}).catch(err => console.log(err))
        }
    },
    mounted() {
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
        console.log("metadata",this.image,this.title,this.subtitle,this.properties)
        console.log("content",content);
      });
    },
  };
  </script>
  
  <style scoped>
  .editor-container {
    height: 300px;
  }
  </style>