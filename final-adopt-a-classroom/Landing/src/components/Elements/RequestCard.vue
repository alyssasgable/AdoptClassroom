<template>
<div class="col-lg-4" >
   <div class="blog-box margin-t-30 hover-effect">
        <img src="https://placekitten.com/800/533" class="img-fluid" alt="">
        <div>
           <h5 class="mt-4 text-muted">{{ request.author }}</h5>
           <h2 class="mt-3"><a href="" class="blog-title"> {{ request.title }}</a></h2>
           <h5 class="mt-4 text-muted">Date Posted: {{ request.date }}</h5>
           <p class="text-muted">{{ request.description }}</p>
           <div class="mt-3">
                <a @click="" class="read-btn">Accept Request <i class="mdi mdi-checkbox-marked-circle-outline"></i></a>
           </div>
        </div>
   </div>
</div>
</template>

<script>

export default {
  name: 'RequestCard',
  props: request,
  data: function () {
    return {
      request: this.request
    }
},
  components: {
  }
}
</script>
