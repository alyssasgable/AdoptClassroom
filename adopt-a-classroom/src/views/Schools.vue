<template>
<div class="schools">
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
            <router-link to="volunteers">Volunteers</router-link>
         </b-nav-item>
         <b-nav-item>
            <router-link to="profile">My Profile</router-link>
         </b-nav-item>

         <b-button @click="logout" variant="danger">Logout</b-button><br><br>
      </b-navbar-nav>

   </b-navbar>

   <h1>Schools</h1>

   <b-button @click="addRequest" variant="outline-primary">+</b-button><br><br>

      <div class="school">
         <b-card v-for="(school, idx) in schools" :key="idx" :img-src="school.photoURL" img-alt="Card image" img-left class="mb-3">
             <h2>{{ school.title }}</h2>
             <h4>{{ school.address}}</h4>
             <b-link href="#" class="card-link">{{ school.phoneNumber }}</b-link>

             <b-card-text>
                {{ school.description }}
             </b-card-text>

             <b-button size="sm">Contact School</b-button>
          </b-card>
      </div>
</div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main';

export default {
   name: 'schools',
   data() {
      return {
      schools: []
    }
   },
   firestore () {
      return {
      schools: db.collection('schools')
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
.schools {
   text-align: center;
}
.school {
   width: 80%;
   display: inline-block;
}
</style>
