<template>
<div class="Register">
   <div class="register-form">
      <b-img height="150px" width="150px" :src="images.logo" alt="Icon of Logo"></b-img>
      <h1>Sign Up</h1>

      <b-form  v-if="show">
         <b-form-group id="input-group-3" label="Name" label-for="input-3" description="Please enter your full name.">
            <b-form-input id="input-1" v-model="form.name" label-for="input-3" required placeholder="Full Name"></b-form-input>
         </b-form-group>
         <b-form-group id="input-group-4" label="Email address:" label-for="input-4" description="We'll never share your email with anyone else without your permission.">
            <b-form-input id="input-4" v-model="form.email" label-for="input-4" required placeholder="Enter Email Addresss"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-5" label="Phone Number" label-for="input-5" description="Please enter your best contact phone number.">
            <b-form-input id="input-5" v-model="form.number" label-for="input-5" required placeholder="Phone Number"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-6" label="Password" label-for="input-6">
            <b-form-input id="input-6" v-model="form.password" required placeholder="Enter Password"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-7" label="Role">
            <b-form-radio-group v-model="form.role" :options="options" required name="radio-inline"></b-form-radio-group>
         </b-form-group>

         <b-form-group id="input-group-8" label="School Name or Company Name" label-for="input-8" description="Please enter the name of your school or the name of your company.">
            <b-form-input id="input-5" v-model="form.organization" required label-for="input-8" placeholder="School/Company"></b-form-input>
         </b-form-group>

         <b-button type="button" @click="signUp" variant="primary">Submit</b-button><br><br>

      </b-form>
   </div>

      <b-jumbotron header="" lead="">
         <h3>Or go back to <router-link to="/login">login.</router-link></h3>
      </b-jumbotron>
</div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';

export default {
      name: 'signUp',
      data() {
         return {
            images: {
               logo: require('@/assets/img/logo.png')
            },
            form: {
               email: '',
               password: '',
               name: '',
               number: '',
               organization: '',
               role: ''
            },
            show: true,
            role: 'Teacher',
              options: [
                { text: 'School Teacher', value: 'teacher' },
                { text: 'Volunteer', value: 'volunteer' },
              ]
         }
},
methods: {
   signUp: function() {

      // const userData = {
      //    email: this.form.email,
      //    name: this.form.name,
      //    number: this.form.number,
      //    organization: this.form.organization,
      //    role: this.form.role
      // }

      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(
            cred => {
            return db.collection('users').doc(cred.user.uid).set({
               email: this.form.email,
               name: this.form.name,
               number: this.form.number,
               organization: this.form.organization,
               role: this.form.role
            }).then( () => {
               alert("You're account has been created successfully!")
               this.$router.replace('home')
            },
            err => {
               alert('Oops. ' + err.message);
            });
            },
            err => {
               alert('Oops. ' + err.message);
            })
      }
      }
}
</script>

<style scoped>
.register {
   text-align: center;
}
.register-form {
   width: 80%;
   display: inline-block;
}
</style>
