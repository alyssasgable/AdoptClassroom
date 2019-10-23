<template>
  <div class="home">
     <b-navbar toggleable="sm" type="light" variant="light">
     <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

     <b-navbar-brand>Adopt A Classroom</b-navbar-brand>

     <b-collapse id="nav-text-collapse" is-nav>
       <b-navbar-nav>
          <b-nav-item><router-link to="home">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="schools">Schools</router-link></b-nav-item>
          <b-nav-item><router-link to="profile">My Profile</router-link></b-nav-item>

          <b-button @click="logout" variant="danger">Logout</b-button><br><br>
       </b-navbar-nav>
     </b-collapse>
   </b-navbar>

    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Adopt A Classroom</h1>
    <div id="nav">
    </div>
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
}
}
}
</script>
