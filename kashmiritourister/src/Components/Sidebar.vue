<template>
    <div class="sidebar">
        <div class="my-profile">
            <button class="myCollButton" @click="handleMyProfile">My Profile</button>
        </div>
        <div class="my-collection">
            <button class="myCollButton" @click="handleMyCollection">My Collection</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        handleMyCollection(){
            return this.$router.push("/mycollection")
        },
        handleMyProfile(){
            return this.$router.push("/profile")
        }
    }
}
</script>

<style>
.sidebar{
    background: #171e26;
    width: 250px;
    height: 660px;
}
.my-profile{
    /* text-align: center; */
    padding-top: 15px;
    font-size: 22px;
    color:white;
    margin-left: 28px;
}
.my-collection{
    /* text-align: center; */
    font-size: 22px;
    color:white;
    margin-left: 28px;
}
.myCollButton{
    all: unset;
}
</style>