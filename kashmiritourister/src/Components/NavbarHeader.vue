<template>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <!-- <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> -->
          <h1 class="bi me-2">Kashmir Traveller</h1>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Places</a></li>
          <li><a href="/blogs" class="nav-link px-2 text-white">Blogs</a></li>
          <li><a href="/certify" class="nav-link px-2 text-white">Certify</a></li>
          <li><a href="/createBlog" class="nav-link px-2 text-white">Create Blog</a></li>
          <li><a href="/addLandmark" class="nav-link px-2 text-white">Add Places</a></li> 
          <li><a href="/certifyrequests" class="nav-link px-2 text-white">Certify Requests</a></li>
          <!-- <li><a href="/signIn" class="nav-link px-2 text-white">Sign In</a></li> -->
        </ul>

        <!-- <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form> -->

        <div class="text-end">
          <a href="/profile" class="btn btn-outline-light me-2">Profile</a>
          <!-- <button type="button" class="btn btn-outline-light me-2">Log In / Sign Up</button> -->
           <GoogleSignIn  class="btn me-2"/>
          <!-- <button type="button" class="btn btn-warning">Sign-up</button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import GoogleSignIn from './GoogleSignIn.vue';

export default {
    
}
</script>

<style>
</style>