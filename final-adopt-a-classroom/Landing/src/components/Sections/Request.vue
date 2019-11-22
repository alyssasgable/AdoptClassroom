<template>
    <!-- START BLOG -->
        <section class="section bg-dark" id="requests">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">

                        <h1 class="section-title text-center">Requests</h1>

                        <div class="section-title-border margin-t-20"></div>
                        <br>
                     <div v-if="currentUser.isTeacher">
                        <router-link to="add-request">
                           <button type="button" class="btn btn-custom btn-block">Add Request</button>
                        </router-link>
                     </div>
                    </div>

                </div>

                <div class="row margin-t-30">
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

                                     <div class="mt-3" v-if="!currentUser.isTeacher">
                                          <a class="read-btn">Accept Request <i class="mdi mdi-checkbox-marked-circle-outline"></i>
                                          </a>
                                     </div>

                               </div>
                          </div>
                       </div>
                </div>
            </div>
        </section>
        <!-- END BLOG -->
</template>

<script>
const firebase = require('@/firebase.js');
// import { db } from 'firebase';
// import RequestCard from '../Elements/RequestCard'

export default {
  name: 'Request',
  components: {
   // RequestCard
  },
  props: {
  },
  data() {
   return {
      requests: [],
      currentUser: {}
}
},
async mounted() {
   const currentUserUID = firebase.auth.currentUser.uid

   // this.requests = await firebase.db.collection('requests').get();
   this.currentUser = firebase.db.collection('users').doc(currentUserUID).get();

},
firestore: {
   requests: firebase.db.collection('requests')
},
created() {
  const currentUserUID = firebase.auth.currentUser.uid

    // // this unbinds any previously bound reference
    // this.$bind('requests', firebase.db.collection('requests')).then(requests => {
    //   this.requests === requests
    //   // todos are ready to be used
    //   // if it contained any reference to other document or collection, the
    //   // promise will wait for those references to be fetched as well
    //
    //   // you can unbind a property anytime you want
    //   // this will be done automatically when the component is destroyed
    //   // this.$unbind('requests')
    // })

      this.$bind('currentUser', firebase.db.collection('users').doc(currentUserUID)).then(currentUser => {
         this.currentUser === currentUser
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
   addRequest: function () {
      this.$router.replace('add-request');
   }
}
}

</script>
