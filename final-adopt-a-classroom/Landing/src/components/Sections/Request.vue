<template>
    <!-- START BLOG -->
        <section class="section bg-dark" id="requests">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h1 class="section-title text-center">Requests</h1>

                        <div class="section-title-border margin-t-20"></div>
                        <br>
                        <router-link to="add-request">
                           <button type="button" class="btn btn-custom btn-block">Add Request</button>
                        </router-link>
                    </div>
                </div>

                <div class="row margin-t-30">
                       <div v-for="(request, idx) in requests" :key="idx" class="col-lg-4" >
                          <div class="blog-box margin-t-30 hover-effect">
                               <!-- <img src="https://placekitten.com/800/533" class="img-fluid" alt=""> -->
                               <div>
                                  <h5 class="mt-4 text-muted">{{ request.author_name }}</h5>
                                  <h2 class="mt-3"><a href="" class="blog-title"> {{ request.title }}</a></h2>
                                  <h5 class="mt-4 text-muted">Date Posted: {{moment(request.time_posted).format('MM-DD-YYYY')}}</h5>
                                  <p class="text-muted">{{ request.description }}</p>

                                     <div class="mt-3">
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
      requests: []
}
},
async mounted() {
   this.requests = await firebase.db.collection('requests').get();
},
// firestore: {
//    requests: db.collection('requests')
// },
created() {
    // this unbinds any previously bound reference
    this.$bind('requests', firebase.db.collection('requests')).then(requests => {
      this.requests === requests
      // todos are ready to be used
      // if it contained any reference to other document or collection, the
      // promise will wait for those references to be fetched as well

      // you can unbind a property anytime you want
      // this will be done automatically when the component is destroyed
      // this.$unbind('requests')
    })
  },
methods: {
   addRequest: function () {
      this.$router.replace('add-request');
   }
}
}

</script>
