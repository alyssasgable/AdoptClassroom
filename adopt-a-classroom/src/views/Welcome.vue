<template>
<div class="welcome">
   <b-img height="150px" width="150px" :src="images.logo" alt="Icon of Logo"></b-img>
   <b-jumbotron header="Adopt A Classroom" lead="Connecting schools and companies to support, inspire, and create community and learning oppurtunities.">

   <b-container class="bv-example-row">
         <b-row>
            <b-col>
               <b-card title="View/Post Workshop Requests from Teachers" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                  <b-card-text>
                  </b-card-text>
               </b-card>
            </b-col>
            <b-col>
               <b-card title="View Volunteers from Local Companies" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                  <b-card-text>
                  </b-card-text>

               </b-card>
            </b-col>
            <b-col>
               <b-card title="View/Add Workshop Ideas" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                  <b-card-text>
                  </b-card-text>
               </b-card>
            </b-col>
         </b-row>
      </b-container>
   </b-jumbotron>

   <div class="buttons">
      <b-button block variant="dark">
         <router-link to="/login">Login</router-link>
      </b-button>
      <br><br>
      <b-button block variant="dark">
         <router-link to="/sign-up">Sign Up</router-link>
      </b-button>
   </div>
</div>
</template>


<script>
export default {
   name: 'welcome',
   data() {
      return {
      requests: [],
      images: {
         logo: require('@/assets/img/logo.png')
      }
    }
   },
   methods: {

   }
}
</script>

<style scoped>
@font-face {
  font-family: Quicksand;
  src: url('@/assets/fonts/Quicksand-VariableFont:wght.ttf');
}

/* @font-face {
  font-family: PTSansNarrow;
  src: url('@/assets/fonts/PTSansNarrow-Bold.ttf');
} */
.welcome {
	text-align: center;
}

h1, h2, h3 {
   font-family:
}

a {
   color: #F3EFE0;
}

.btn-dark {
   background-color: #016FB9;
}

.buttons {
   width: 70%;
	display: inline-block;
   margin-bottom: 5%;
}



</style>
