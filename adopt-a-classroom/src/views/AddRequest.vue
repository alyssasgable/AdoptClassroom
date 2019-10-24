<template>
<div class="Register">
   <div class="request-form">
      <b-form @submit="submitRequest" v-if="show">
         <b-form-group id="input-group-1" label="Title" label-for="input-3" description="Please enter the title of your request.">
            <b-form-input id="input-1" v-model="request.title" label-for="input-1" required placeholder="Request Title"></b-form-input>
         </b-form-group>
         <b-form-group id="input-group-2" label="Request Description" label-for="input-2" description="Please enter the description of your request.">
            <b-form-textarea
                 id="textarea"
                 v-model="request.description"
                 placeholder="Request Description"
                 rows="3"
                 required
                 max-rows="6"
               ></b-form-textarea>
         </b-form-group>
         <b-form-group id="input-group-3" label="Email address:" label-for="input-3" description="Please share the email address you would like volunteers to contact you by.">
            <b-form-input id="input-3" v-model="request.email" label-for="input-3" required placeholder="Enter Email Addresss"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-4" label="Phone Number" label-for="input-4" description="Please enter your best contact phone number.">
            <b-form-input id="input-4" v-model="request.number" label-for="input-4" required placeholder="Phone Number"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-8" label="School Name or Company Name" label-for="input-8" description="Please enter the name of your school or the name of your company.">
            <b-form-input id="input-5" v-model="request.organization" required label-for="input-8" placeholder="School/Company"></b-form-input>
         </b-form-group>

         <b-button type="submit" variant="primary">Submit</b-button><br><br>
         <p>Or go back to <router-link to="/home">home.</router-link></p>
      </b-form>
   </div>
</div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';

export default {
   name: 'addRequest',
   data() {
      return {
         request: {
            title: '',
            email: '',
            description: '',
            number: '',
            organization: ''
         },
         show: true
      }
},
   methods: {
      submitRequest: function() {

         const currentUser = firebase.auth().currentUser
         var today = new Date();

         // const requestData = {
         //    title: this.request.title,
         //    description: this.request.description,
         //    email: this.request.email,
         //    number: this.request.number,
         //    organization: this.request.organization,
         //    author_id: currentUser.uid,
         //    time_posted: today
         // }

         db.collection('requests').add({
            title: this.request.title,
            description: this.request.description,
            email: this.request.email,
            number: this.request.number,
            organization: this.request.organization,
            author_id: currentUser.uid,
            time_posted: today
         })
         .then(
            docRef => {
               alert("Document written with ID: " + docRef.id);
               this.$router.replace('home')

            },
            err => {
               alert("Error adding document: " + err);
            }
         )
   }
}
}
</script>

<style scoped>
.request {
   text-align: center;
}
.request-form {
   width: 80%;
   display: inline-block;
}
</style>
