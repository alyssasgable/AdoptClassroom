<template>
    <div>
        <HomeButton></HomeButton>
        <section class="bg-account-pages height-100vh">
            <div class="display-table">
                <div class="display-table-cell">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card account-card">
                                    <div class="card-body">
                                        <div class="text-center mt-3">
                                            <h3 class="font-weight-bold"><a href="/" class="text-dark text-uppercase account-pages-logo">AppleCORE</a></h3>
                                            <p class="text-muted">Sign in to continue to AppleCORE.</p>
                                        </div>
                                        <div class="p-3">
                                            <form>
                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="text" v-model="form.email" class="form-control" id="email" placeholder="Enter email address">
                                                </div>

                                                <div class="form-group">
                                                    <label for="userpassword">Password</label>
                                                    <input type="password" v-model="form.password" class="form-control" id="userpassword" placeholder="Enter password">
                                                </div>

                                                <div class="mt-3">
                                                    <button type="button" @click="login" class="btn btn-custom btn-block">Login</button>
                                                </div>

                                                <div class="mt-4 mb-0 text-center">
                                                    <router-link to="forgot-password"><a href="/forgot-password" class="text-dark"><i class="mdi mdi-lock"></i> Forgot your password?</a></router-link>
                                                </div>

                                                <div class="mt-4 mb-0 text-center">
                                                   <p class="mb-0">Don't have an account? <router-link to="register"><a class="text-danger">Sign up</a></router-link></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                </div>
            </div>
        </section>
        <!-- end account-pages  -->
    </div>
</template>

<script>
"use strict";
import HomeButton from './Elements/HomeButton'
import firebase from 'firebase'
import router from '../router'
export default {
  name: 'Login',
  components: {
      HomeButton
  },
  data() {
   return {
     form: {
       email: '',
       password: ''
    }
}
},
methods: {
   login: function() {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(
         () => {
            alert("You are signed in!")
            this.$router.replace('requests');
         },
         (err) => {
            alert("Oops. " + err.message);
         }
      )
   }


}
}
</script>
