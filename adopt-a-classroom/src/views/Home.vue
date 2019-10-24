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

<b-card v-for="(request, idx) in requests" :key="idx" img-src="https://placekitten.com/250/250" img-alt="Card image" img-left class="mb-3">
    <h2>{{ request.title }}</h2>
    <h4>{{ request.author_id }}</h4>
    <b-link href="#" class="card-link">{{ request.organization }}</b-link>

    <b-card-text>
       {{ request.description }}
    </b-card-text>

    <b-card-text>
       Posted {{ request.time_posted }}
    </b-card-text>

    <b-button size="sm">Accept Request</b-button>

 </b-card>
</div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main';

export default {
   name: 'home',
   data() {
      return {
      requests: []
    }
   },
   firestore () {
      return {
      requests: db.collection('requests')
      }
   },
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
