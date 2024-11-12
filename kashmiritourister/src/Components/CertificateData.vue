<template>
    Email: {{email}}<br>
   Certificate ID: {{ id }}<br>
   Certificate Link: {{ link }}<br>
</template>

<script>
export default {
    computed : {
        id(){
            return this.$route.query.uid;
        },
        link(){
            return this.$route.query.link;
        },
        email(){
            return this.$route.query.email;
        }
    }
}
</script>

<style></style>