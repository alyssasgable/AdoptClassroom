<template>
<div class="login">
   <div class="login-form">
      <b-img height="150px" width="150px" :src="images.logo" alt="Icon of Logo"></b-img>
      <h1>Login</h1>

      <b-form  v-if="show">
         <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="">
            <b-form-input id="input-1" v-model="form.email" label-for="input-1" placeholder="Enter Email Addresss"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.password" required placeholder="Enter Password"></b-form-input>
         </b-form-group>

         <b-button type="button" @click="login" variant="primary">Submit</b-button><br><br>
         <b-button type="reset" variant="danger">Reset Password</b-button><br><br>
      </b-form>

   </div>
   <b-jumbotron header="Don't have an account?" lead="">
      <h3>Sign up for one <router-link to="/sign-up">here.</router-link></h3>
   </b-jumbotron>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
   // name: 'login'
   return {
      images: {
         logo: require('@/assets/img/logo.png')
      },
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
            alert("Oops. " + err.message);
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
