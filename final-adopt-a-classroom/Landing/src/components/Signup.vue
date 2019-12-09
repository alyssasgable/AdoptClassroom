<template>
    <div class="signUp">
        <HomeButton></HomeButton>
        <section class="bg-account-pages">
            <div class="display-table">
                <div class="display-table-cell">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card account-card">
                                    <div class="card-body">
                                        <div class="text-center mt-3">
                                            <h3 class="font-weight-bold"><a href="/" class="text-dark text-uppercase account-pages-logo">AppleCORE</a></h3>
                                            <p class="text-muted">Sign up for a new Account</p>
                                        </div>
                                        <div class="p-3">
                                            <form>
                                                <div class="form-group">
                                                    <label for="firstname">Full Name</label>
                                                    <input type="text" v-model="form.name" class="form-control" id="firstname" placeholder="First Name">
                                                </div>

                                                <div class="form-group">
                                                   <label for="number">Contact Number</label>
                                                   <input type="number" v-model="form.number" class="form-control" id="number" placeholder="Contact Number">
                                                </div>

                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Enter Email">
                                                </div>

                                                <div class="form-group">
                                                    <label for="userpassword">Password</label>
                                                    <input type="password" v-model="form.password" class="form-control" id="userpassword" placeholder="Enter password">
                                                </div>

                                                <div class="form-group">
                                                   <label for="role">Role</label><br>
                                                   <input v-model="isTeacher" :value="true" type="radio" name="Teacher" value="Teacher">  Teacher
                                                   <input v-model="isTeacher" :value="false" type="radio" name="Volunteer" value="Volunteer">  Volunteer
                                                </div>

                                                <div class="teacherForms" v-if="isTeacher">
                                                   <div class="form-group">
                                                      <label for="school">School</label>
                                                      <input type="text" v-model="form.school" class="form-control" id="school" placeholder="School Name">
                                                   </div>

                                                   <div class="form-group">
                                                      <label for="subject">Subject</label>
                                                      <input type="text" v-model="form.subject" class="form-control" id="subject" placeholder="Subjects Taught">
                                                   </div>
                                                </div>

                                                <div class="volunteerForms" v-else>
                                                   <div class="form-group">
                                                      <label for="company">Company</label>
                                                      <input type="text" v-model="form.company" class="form-control" id="company" placeholder="Company Name">
                                                   </div>

                                                   <div class="form-group">
                                                      <label for="skills">Skills</label>
                                                      <p>Please separate skills by a comma. i.e "HTML, CSS, Javascript, Agile Development"</p>
                                                      <textarea type="skills" v-model="form.skills" class="form-control" id="skills" placeholder="Skills"></textarea>
                                                   </div>
                                                </div>

                                                <div class="mt-3">
                                                    <button type="button" @click="signUp" class="btn btn-custom btn-block">Sign Up</button>
                                                </div>

                                                <div class="mt-4 mb-0 text-center">
                                                    <p class="mb-0">Already have an account? <router-link to="login"><a class="text-danger">Sign in</a></router-link></p>
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
import firebase from 'firebase';
import { db } from '../main';

export default {
  name: 'Signup',
  components: {
      HomeButton
  },
  data () {
    return {
       isTeacher: true,
       form: {
          email: '',
          password: '',
          name: '',
          number: '',
          isTeacher: true,
          school: '',
          subject: '',
          company: '',
          skills: ''
       }
    }
  },
  methods: {
     signUp: function() {

        if (this.isTeacher && !this.form.email.endsWith('@mps.k12.al.us') ) {
           alert("Sign up with your @mps.k12.al.us email address. Please contact us if your school domain is not available.")
        } else {
           firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(
              cred => {

              return firebase.firestore().collection('users').doc(cred.user.uid).set({
                 email: this.form.email,
                 name: this.form.name,
                 number: this.form.number,
                 isTeacher: this.isTeacher,
                 school: this.form.school,
                 subject: this.form.subject,
                 company: this.form.company,
                 skills: this.form.skills
              }).then( () => {
                 alert("You're account has been created successfully!")
                 this.$router.replace('requests')
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

}
</script>

<style scoped>

.signUp {
   height: 100vh;
}
</style>
