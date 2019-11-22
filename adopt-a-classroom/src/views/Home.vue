<template>
<div class="home">
   <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
         <b-img height="50px" width="50px" :src="images.logo" alt="Icon of Book"></b-img>
         <br>
         <router-link to="welcome">Adopt A Classroom</router-link>
      </b-navbar-brand>

      <b-navbar-nav>
         <b-nav-item>
            <b-img height="50px" width="50px" :src="images.book" alt="Icon of Book"></b-img>
            <br>
            <router-link to="home">Requests</router-link>
         </b-nav-item>

         <b-nav-item>
            <b-img height="50px" width="50px" :src="images.school" alt="Icon of Book"></b-img>
            <br>
            <router-link to="schools">Schools</router-link>
         </b-nav-item>
         <b-nav-item>
            <b-img height="50px" width="50px" :src="images.volunteer" alt="Icon of Book"></b-img>
            <br>
            <router-link to="volunteers">Volunteers</router-link>
         </b-nav-item>
         <b-nav-item>
            <b-img height="50px" width="50px" :src="images.profile" alt="Icon of Book"></b-img>
            <br>
            <router-link to="profile">My Profile</router-link>
         </b-nav-item>

         <b-button @click="logout" class="logout" variant="danger">Logout</b-button><br><br>
      </b-navbar-nav>

   </b-navbar>

   <h1>Home</h1>

<b-button @click="addRequest" variant="outline-primary">+</b-button><br><br>
   <div class="requests">
      <b-card v-for="(request, idx) in requests" :key="idx" img-src="https://placekitten.com/250/250" img-alt="Card image" img-left class="mb-3">
          <h2>{{ request.title }}</h2>
          <h4>{{ request.author_name }}</h4>
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
</div>
</template>

<script>
import firebase from 'firebase'
import firestore from 'firestore'
import { db } from '../main';

export default {
   name: 'home',
   data() {
      return {
      requests: [],
      images: {
         book: require('@/assets/img/book.png'),
         lightBulb: require('@/assets/img/lightBulb.png'),
         profile: require('@/assets/img/profile.png'),
         school: require('@/assets/img/school.png'),
         volunteer: require('@/assets/img/volunteer.png'),
         logo: require('@/assets/img/logo.png')
      }
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

<style scoped>
.home {
   text-align: center;
}
.requests {
   width: 80%;
   display: inline-block;
}

.logout {
   height: 50%;
   margin: 5% auto;
   float: right;
}
</style>
