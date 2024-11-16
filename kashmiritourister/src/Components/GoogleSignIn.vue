<template>
    <GoogleLogin :callback="handleResponse" />
</template>

<script setup>
import { defineEmits } from 'vue';
import axios from 'axios';
import { decodeCredential } from 'vue3-google-login';

const emit = defineEmits(['login']);
const handleResponse = async (response) => {
    var data = {
    "email" : "",
    "name":"",
    "collection":[]
}
    // console.log("Google Sign-In response:", response);
    if (response.credential) {
        // Decode the credential to get user info
        const userData = decodeCredential(response.credential);
        console.log("User  Data:", userData);
        if (userData.email_verified){
            data.email = userData.email;
            data.name = userData.name;
            console.log("to send",data)
            await axios.post("/proxy/api/login",data).then(response => {
                console.log("Logged in");
                sessionStorage.setItem('useremail', userData.email);
                sessionStorage.setItem('isLoggedIn', true);
                if (userData.email === "basit316316@gmail.com" || userData.email === "kashmirtouristera@gmail.com"){
                    sessionStorage.setItem('admin', true);
                }
            })
            emit('login', { email: userData.email, name: userData.name });
        }
        else{
            console.log("Email not verified with Google")
        }
    }
};

// const sentToBackend(userData){
    
// }
</script>