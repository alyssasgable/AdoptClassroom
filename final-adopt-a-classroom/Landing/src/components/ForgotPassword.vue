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
                                            <h3 class="font-weight-bold"><a href="/" class="text-dark text-uppercase account-pages-logo">Adopt A Classroom</a></h3>
                                            <p class="text-muted">Reset Password</p>
                                        </div>
                                        <div class="p-3">
                                            <div class="alert alert-warning  text-center" role="alert">
                                                Enter your email address and we'll send you an email with instructions to reset your password.
                                            </div>
                                            <form>
                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Enter Email">
                                                </div>

                                                <div class="mt-3">
                                                    <button type="submit" @click="forgot" class="btn btn-custom btn-block">Reset your Password</button>
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

export default {
  name: 'ForgotPassword',
  components: {
      HomeButton
  },
  data() {
   return {
     form: {
       email: ''
    }
  }
  },
  methods: {
   forgot: function() {
      firebase.auth().sendPasswordResetEmail(this.form.email).then(
         () => {
            alert("An email has been sent to your inbox to reset your password.")
            this.$router.replace('login');
         }).catch((error) => {
            alert(error)
    })
   }
  }
}
</script>
