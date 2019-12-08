<template>
    <div class="profile">
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
                                            <h3 class="font-weight-bold"><a href="/" class="text-dark text-uppercase account-pages-logo">Apple Core</a></h3>
                                            <p class="text-muted">Edit Profile</p>
                                        </div>
                                        <div class="p-3">
                                            <form>
                                                <div class="form-group">
                                                    <label for="firstname">Full Name</label>
                                                    <input type="text" v-model="user.name" class="form-control" id="firstname" :placeholder="user.name">
                                                </div>

                                                <div class="form-group">
                                                   <label for="number">Contact Number</label>
                                                   <input type="number" v-model="user.number" class="form-control" id="number" :placeholder="user.number">
                                                </div>

                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" v-model="user.email" class="form-control" id="email" :placeholder="user.email">
                                                </div>

                                                <div class="teacherForms" v-if="user.isTeacher">
                                                   <div class="form-group">
                                                      <label for="school">School</label>
                                                      <input type="text" v-model="user.school" class="form-control" id="school" :placeholder="user.school">
                                                   </div>

                                                   <div class="form-group">
                                                      <label for="subject">Subject</label>
                                                      <input type="text" v-model="user.subject" class="form-control" id="subject" :placeholder="user.subject">
                                                   </div>
                                                </div>

                                                <div class="volunteerForms" v-else>
                                                   <div class="form-group">
                                                      <label for="company">Company</label>
                                                      <input type="text" v-model="user.company" class="form-control" id="company" :placeholder="user.company">
                                                   </div>

                                                   <div class="form-group">
                                                      <label for="skills">Skills</label>
                                                      <p>Please separate skills by a comma. i.e "HTML, CSS, Javascript, Agile Development"</p>
                                                      <textarea type="skills" v-model="user.skills" class="form-control" id="skills" :placeholder="user.skills"></textarea>
                                                   </div>
                                                </div>

                                                <div class="mt-3">
                                                    <button type="button" @click="updateProfile" class="btn btn-custom btn-block">Update Profile</button>
                                                </div>

                                                <!-- <div class="mt-4 mb-0 text-center">
                                                    <p class="mb-0">Already have an account? <router-link to="login"><a class="text-danger">Sign in</a></router-link></p>
                                                </div> -->
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <div class="row margin-t-30">
                           <h3 class="font-weight-bold"><a href="/" class="text-light text-uppercase account-pages-logo">My Requests</a></h3>
<br>
                               <div v-for="(request, idx) in requests" :key="idx" class="col-lg-4" >
                                  <div class="blog-box margin-t-30 hover-effect">
                                       <!-- <img src="https://placekitten.com/800/533" class="img-fluid" alt=""> -->
                                       <div>

                                          <h5 class="mt-4 text-muted">{{ request.author_name }}</h5>
                                          <h5 class="mt-4 text-muted">{{ request.subject }}</h5>
                                          <h5 class="mt-4 text-muted">{{ request.grade }}</h5>

                                          <h2 class="mt-3"><a href="" class="blog-title"> {{ request.title }}</a></h2>

                                          <h5 class="mt-4">Posted: {{moment(request.time_posted).format('MM-DD-YYYY')}}</h5>
                                          <br/>
                                          <p class="text-muted">{{ request.description }}</p>
                                          <h5 class="mt-4">Requested Date:</h5><p class="text-muted"> {{moment(request.requestedDate).format('MM-DD-YYYY')}}</p>
                                          <h5 class="mt-4">Deadline Date: </h5><p class="text-muted">{{moment(request.deadline).format('MM-DD-YYYY')}}</p>
                                       </div>
                                       <a @click="deleteRequest(request.id)" class="read-btn">Delete Request <i class="mdi mdi-minus-circle"></i>
                                       </a>
                                  </div>
                               </div>
                        </div>
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

export default {
  name: 'Profile',
  components: {
      HomeButton
  },
  data () {
    return {
       isTeacher: true,
       user: {
          email: '',
          password: '',
          name: '',
          number: '',
          isTeacher: true,
          school: '',
          subject: '',
          company: '',
          skills: ''
       },
       requests: []
    }
  },
  async mounted() {
     const userId = firebase.auth().currentUser.uid

     // this.requests = await firebase.db.collection('requests').get();
     // this.user = firebase.db.collection('users').doc(userId).get();

  },
  firestore () {
    const userId = firebase.auth().currentUser.uid
     return {
         user: firebase.firestore().collection('users').doc(userId),
        requests: firebase.firestore().collection("requests")
                 .where("author_id", "==", userId)
     }
  },
  methods: {
     updateProfile: function() {
        const userId = firebase.auth().currentUser.uid

        if (this.user.isTeacher && !this.user.email.endsWith('@mps.k12.al.us') ) {
           alert("Please use your @mps.k12.al.us email address. Please contact us if your school domain is not available.")
        } else {
               firebase.firestore().collection('users').doc(userId).set({
                 email: this.user.email,
                 name: this.user.name,
                 number: this.user.number,
                 isTeacher: this.user.isTeacher,
                 school: this.user.school,
                 subject: this.user.subject,
                 company: this.user.company,
                 skills: this.user.skills
              }).then(function() {
                 alert("Your profile has been updated successfully!");
              })
}
},
   deleteRequest: function(docRef) {
      firebase.firestore().collection('requests').doc(docRef).delete()
      alert('Your request has been deleted!')
   }
}
}

</script>

<style scoped>

.profile {
   margin-top: 10%;
   height: 100vh;
}
</style>
