<template>
<div class="volunteers">
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

   <h1>Volunteers</h1>

   <b-button @click="addRequest" variant="outline-primary">+</b-button><br><br>

      <div class="volunteer">
         <b-card v-for="(volunteer, idx) in volunteers" :key="idx" :img-src="volunteer.photoURL" img-alt="Card image" img-left class="mb-3">
             <h2>{{ volunteer.name }}</h2>
             <h4>{{ volunteer.organization}}</h4>
             <b-link href="#" class="card-link">{{ volunteer.number }}</b-link>
             <br><br>
             <h2>Skills</h2>

             <b-list-group class="skills" v-for="(skill, idx) in volunteer.skills" :key="idx" >
               <b-list-group-item>{{ skill }}</b-list-group-item>
            </b-list-group>

             <b-button size="sm">Contact School</b-button>
          </b-card>
      </div>
</div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main';

export default {
   name: 'volunteers',
   data() {
      return {
      volunteers: []
    }
   },
   firestore () {
      return {
      volunteers: db.collection('users').where("role", "==", "Volunteer")
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
.volunteers {
   text-align: center;
}
.volunteer {
   width: 80%;
   display: inline-block;
}

.skills {
   width: 50%;
   display: inline-block;
}
</style>
