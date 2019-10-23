<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Adopt A Classroom</h1>
    <b-button @click="logout" variant="danger">Logout</b-button><br><br>
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
