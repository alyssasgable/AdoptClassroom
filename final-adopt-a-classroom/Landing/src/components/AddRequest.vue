<template>
    <div class="add-request">
        <section class="bg-account-pages">
            <div class="display-table">
                <div class="display-table-cell">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card account-card">
                                    <div class="card-body">
                                        <div class="text-center mt-3">
                                            <h3 class="font-weight-bold"><a href="/" class="text-dark text-uppercase account-pages-logo">Add A Request</a></h3>
                                            <!-- <p class="text-muted">Add a </p> -->
                                        </div>
                                        <div class="p-3">
                                            <form>
                                                <div class="form-group">
                                                    <label for="title">Request Title</label>
                                                    <input type="text" v-model="form.title" class="form-control" id="title" placeholder="Request Title">
                                                </div>

                                                <div class="form-group">
                                                   <label for="title">Grade Level</label>
                                                   <input type="text" v-model="form.grade" class="form-control" id="title" placeholder="Grade Level">
                                                </div>

                                                <div class="form-group">
                                                   <label for="title">Subject</label>
                                                   <input type="text" v-model="form.subject" class="form-control" id="title" placeholder="Subject">
                                                </div>

                                                <div class="form-group">
                                                   <label for="skills">Request Description</label>
                                                   <p class="text-muted">Please describe what type of workshop you would like to have or what things you want your students to learn.</p>
                                                   <textarea type="skills" v-model="form.description" class="form-control" id="description" placeholder="Request Description"></textarea>
                                                </div>

                                                <div class="form-group">
                                                   <label for="number">Requested Date & Time</label>
                                                   <!-- <input type="number"  class="form-control" id="number" placeholder="Contact Number"> -->

                                                   <input v-model="form.requestedDate" class="form-control" type="datetime-local" id="meeting-time"
                                                          name="request-date" value="2019-21-11T19:30"
                                                          min="2019-01-11T00:00" max="2025-06-12T00:00">
                                               </div>

                                                <div class="form-group">
                                                   <label for="number">Deadline</label>
                                                   <input v-model="form.deadline" class="form-control" type="datetime-local" id="meeting-time"
                                                         name="request-date" value="2019-21-11T19:30"
                                                         min="2019-01-11T00:00" max="2025-06-12T00:00">
                                                </div>

                                                <div class="mt-3">
                                                    <button type="button" @click="addRequest" class="btn btn-custom btn-block">Add Request</button>
                                                </div>

                                                <div class="mt-4 mb-0 text-center">
                                                    <p class="mb-0">Go back <router-link to="home"><a class="text-danger">home</a></router-link></p>
                                                </div>
                                            </form>
                                          </div>
                                        </div>
                                    </div>
                                 </div>
                                </div>
                                <!-- end card -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div>
</section>
</div>

</template>

<script>
"use strict";
import Navbar from './Elements/Navbar2.vue'
const firebase = require('@/firebase.js');

export default {
  name: 'AddRequest',
  components: {
      Navbar
  },
  data () {
    return {
       form: {
          title: '',
          description: '',
          number: '',
          grade: '',
          requestedDate: '',
          deadline: ''
       },
      currentUserData: {}
    }
  },
  async mounted() {
     const currentUserUID = firebase.auth.currentUser.uid

     this.currentUserData = await firebase.db.collection('users').doc(currentUserUID).get().data();
  },
  created() {
     const currentUserUID = firebase.auth.currentUser.uid

      // this unbinds any previously bound reference
      this.$bind('currentUserData', firebase.db.collection('users').doc(currentUserUID)).then(currentUserData => {
      this.currentUserData === currentUserData

      //   // todos are ready to be used
      //   // if it contained any reference to other document or collection, the
      //   // promise will wait for those references to be fetched as well
      //
      //   // you can unbind a property anytime you want
      //   // this will be done automatically when the component is destroyed
      //   // this.$unbind('requests')
      })
    },
  methods: {
     addRequest: function() {
        const currentUserUID = firebase.auth.currentUser.uid

        console.log(this.currentUserData)

            firebase.db.collection('requests').add({
                 author_id: currentUserUID,
                 title: this.form.title,
                 author_name: this.currentUserData.name,
                 contactNumber: this.form.number,
                 description: this.form.description,
                 time_posted: Date(),
                 grade: this.form.grade,
                 subject: this.form.subject,
                 requestedDate: this.form.requestedDate,
                 deadline: this.form.deadline
              }).then( () => {
                 alert("You're request has been addded successfully!")
                 this.$router.replace('home')
              },
              err => {
                 alert('Oops. ' + err.message);
              });
      }
   }

}
</script>

<style scoped>

.signUp {
   height: 100vh;
}
</style>
