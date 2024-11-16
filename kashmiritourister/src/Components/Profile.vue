<template>
    <div class="myProfileHolder">
        <Sidebar :active="'myprofile'"/>
        <div class="profile-container">
            {{email}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ""
        }
    },
    mounted() {
        this.email = sessionStorage.getItem('useremail')
    }
}
</script>

<style>
.myProfileHolder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.profile-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-inline: 18px;
    margin-block: 14px;
    max-height: 646px;
    overflow: auto;
}
</style>