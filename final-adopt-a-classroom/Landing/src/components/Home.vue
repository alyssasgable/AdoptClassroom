<template>
    <div id="home1">

        <Request></Request>

    </div>

</template>

<script>
"use strict";

import HeroSection from './Sections/HeroSection.vue'
import Services from './Sections/Services.vue'
import About from './Sections/About.vue'
import WebConfiguration from './Sections/WebConfiguration.vue'
import Pricing from './Sections/Pricing.vue'
import Testimonial2 from './Sections/Testimonial2.vue'
import StartProcess from './Sections/StartProcess.vue'
import Testimonial from './Sections/Testimonial.vue'
import GetStarted from './Sections/GetStarted.vue'
import Blog from './Sections/Blog.vue'
import Request from './Sections/Request.vue'
import Contact from './Sections/Contact.vue'
import Social from './Sections/Social.vue'
import FooterSection from './Elements/FooterSection.vue'
import FooterAlter from './Elements/FooterAlter.vue'
import Switcher from './Elements/Switcher.vue'

// const firebase = require('@/firebase.js');

export default {
  name: 'Home',
  components: {
    HeroSection,
    Services,
    About,
    WebConfiguration,
    Pricing,
    Testimonial2,
    StartProcess,
    Testimonial,
    GetStarted,
    Blog,
    Request,
    Contact,
    Social,
    FooterSection,
    FooterAlter,
    Switcher
  }

}

</script>
