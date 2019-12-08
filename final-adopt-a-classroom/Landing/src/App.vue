<template>
  <div id="app">
     <navbar></navbar>

     <router-view/>
  </div>
</template>

<script>
"use strict";
import Navbar from '@/components/Elements/Navbar2.vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
// export const store = new Vuex.Store()

export default {
   components: {
     Navbar
   }
}
</script>
