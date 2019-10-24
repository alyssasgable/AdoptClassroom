<template>
<div class="home">
   <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Adopt A Classroom</b-navbar-brand>

      <b-navbar-nav>
         <b-nav-item>
            <router-link to="home">Home</router-link>
         </b-nav-item>
         <b-nav-item>
            <router-link to="schools">Schools</router-link>
         </b-nav-item>
         <b-nav-item>
            <router-link to="profile">My Profile</router-link>
         </b-nav-item>

         <b-button @click="logout" variant="danger">Logout</b-button><br><br>
      </b-navbar-nav>

   </b-navbar>

   <h1>Home</h1>
   <b-button @click="addRequest" variant="outline-primary">+</b-button><br><br>

   <b-card img-src="https://placekitten.com/250/250" img-alt="Card image" img-left class="mb-3">
    <h2>Request Title</h2>
    <h4>Joe Doe</h4>
    <b-link href="#" class="card-link">Carver High School</b-link>

    <b-card-text>
       Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
       content.
    </b-card-text>

    <b-card-text>
       Posted Oct 23, 2019
    </b-card-text>

    <b-button size="sm">Accept Request</b-button>

 </b-card>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
   name: 'home',
   methods: {
      logout: function() {
         firebase.auth().signOut().then(() => {
            this.$router.replace('login');
         });
      },
      addRequest: function() {
         this.$router.replace('add-request');
      }
   }
}
</script>
