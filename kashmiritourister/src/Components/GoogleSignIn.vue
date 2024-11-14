<template>
    <GoogleLogin :callback="handleResponse" />
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login';
const handleResponse = (response) => {
    // console.log("Google Sign-In response:", response);
    if (response.credential) {
        // Decode the credential to get user info
        const userData = decodeCredential(response.credential);
        console.log("User  Data:", userData);
    }
};

// const sentToBackend(userData){
    
// }
</script>