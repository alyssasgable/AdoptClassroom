<template>
<div class="profile">
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
   <h1>Profile</h1>

   <div class="profile-form">
      <b-form  v-if="show">
         <b-form-group id="input-group-3" label="Name" label-for="input-3" description="Please enter your full name.">
            <b-form-input id="input-1" v-model="user.name" label-for="input-3" required :placeholder="user.name"></b-form-input>
         </b-form-group>
         <h2>{{ user.role }}</h2>
         <b-form-group id="input-group-4" label="Email address:" label-for="input-4" description="We'll never share your email with anyone else without your permission.">
            <b-form-input id="input-4" v-model="user.email" label-for="input-4" required :placeholder="user.email"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-5" label="Phone Number" label-for="input-5" description="Please enter your best contact phone number.">
            <b-form-input id="input-5" v-model="user.number" label-for="input-5" required :placeholder="user.number"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-8" label="School Name or Company Name" label-for="input-8" description="Please enter the name of your school or the name of your company.">
            <b-form-input id="input-5" v-model="user.organization" required label-for="input-8" :placeholder="user.organization"></b-form-input>
         </b-form-group>

         <b-button type="button" @click="updateUser" variant="primary">Update</b-button><br><br>
      </b-form>
   </div>
   <h1>My Requests</h1>

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

       </b-card>
</div>
</div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';

export default {
      name: 'profile',
      data() {
         return {
            user: {},
            show: true,
            requests: []
         }
},
firestore () {
   const userId = firebase.auth().currentUser.uid
   return {
      user: db.collection('users').doc(userId),
      requests: db.collection("requests")
               .where("author_id", "==", "c7ShvOGgxkUA1Y1JGQrYh59AWuy2")

   }
},
methods: {
   updateUser: function() {
      const userId = firebase.auth().currentUser.uid
      const newUserData = this.user

      db.collection('users').doc(userId).set({
         email: newUserData.email,
         name: newUserData.name,
         number: newUserData.number,
         organization: newUserData.organization,
         role: newUserData.role
      })
      .then(function() {
         alert("Your profile has been updated successfully!");
      })
      }
      }
}
</script>

<style scoped>
.profile {
   text-align: center;
}
.profile-form {
   width: 80%;
   display: inline-block;
}

.requests {
   width: 70%;
   display: inline-block;
}
</style>
