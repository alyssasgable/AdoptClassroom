<template>
<div class="login">
   <div class="login-form">
      <b-form @submit="login" v-if="show">
         <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="">
            <b-form-input id="input-1" v-model="form.email" label-for="input-1" placeholder="Enter Email Addresss"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.password" required placeholder="Enter Password"></b-form-input>
         </b-form-group>

         <b-button type="submit" variant="primary">Submit</b-button><br><br>
         <b-button type="reset" variant="danger">Reset Password</b-button><br><br>
         <p>Don't have an account? Sign up for one <router-link to="/sign-up">here.</router-link></p>
      </b-form>
   </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
   // name: 'login'
   return {
      form: {
         email: '',
         password: '',
         // name: '',
         // number: '',
         // role: '',
         // organization: '',
         // selected: ''
      },
      show: true,
      selected: 'Teacher',
        options: [
          { text: 'School Teacher', value: 'teacher' },
          { text: 'Volunteer', value: 'volunteer' },
        ]
   }
},
methods: {
   onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
   },
   login: function() {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(
         () => {
            alert("You are signed in!")
            this.$router.replace('home');
         },
         (err) => {
            alert("Oops. " + err.message)
}
      )
   }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login {
   text-align: center;
}
.login-form {
   width: 80%;
   display: inline-block;
}


</style>
