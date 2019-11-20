<template>
    <!-- CONTACT FORM START-->
        <section class="section pt-6 scroll-select" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h1 class="section-title text-center">Contact Us</h1>
                        <div class="section-title-border margin-t-20"></div>
                        <p class="section-subtitle text-muted text-center font-secondary padding-t-30">Do you want to request features for the app or give us some feedback?</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="custom-form mt-4 pt-4">
                            <div id="message"></div>
                            <form action="https://formspree.io/moqqyodw" method="POST" name="contact-form" id="contact-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mt-2">
                                            <input name="name" id="name" type="text" class="form-control" placeholder="Your name*" >
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mt-2">
                                            <input name="_replyto" id="email" type="email" class="form-control" placeholder="Your email*" >
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                            <input type="text" class="form-control" id="subject" placeholder="Your Subject.." />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                            <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 text-right">
                                        <input type="submit" id="submit" name="Send" class="submitBnt btn btn-custom" value="Send Message">
                                        <!-- <div id="simple-msg"></div> -->
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CONTACT FORM END-->
</template>

<script>
export default {
  name: 'Contact',
  props: {
  }
}
</script>
