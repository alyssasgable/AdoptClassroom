<template>
  <div class="card">
     <b-card img-src="https://placekitten.com/250/250" img-alt="Card image" img-left class="mb-3">
    <h2>Request Title</h2>
    <h4>Joe Doe</h4>
    <b-link href="#" class="card-link">Carver High School</b-link>

    <b-card-text>
       Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
       content.
    </b-card-text>

    <b-card-text>
       Posted Oct 23, 2019
    </b-card-text>

    <b-button size="sm">Accept Request</b-button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
methods: {
   logout: function() {
      firebase.auth().signOut().then(() => {
         this.$router.replace('login');
});
}
}
}
</script>

<style scoped>
.card {
   width: 80%;
}
</style>
