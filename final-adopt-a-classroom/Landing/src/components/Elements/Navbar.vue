<template>
<!-- STRAT NAVBAR -->
        <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div class="container">
                <!-- LOGO -->
                <a class="navbar-brand logo text-uppercase" href="/">
                   <img src="@/assets/logo2.png" width="65%" height="35%" alt="Adopt A Classroom Logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-center" id="mySidenav">
                        <li class="nav-item active">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav-link">Features</a>
                        </li>
                        <li class="nav-item">
                            <a href="#startProcess" class="nav-link">Process</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                        <li class="nav-item">
                            <!-- <a href="/login" class="nav-link">Login</a> -->
                            <a class="nav-link"><router-link to="/login">Login</router-link></a>

                        </li>
                    </ul>
                    <div class="nav-button ml-auto">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                              <router-link to="/login">
                                <button type="button" @click="navigate()" class="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">
                                       Register
                                </button>
                              </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
         <!-- END NAVBAR -->
</template>

<script>

export default {
  name: 'Navbar',
  props: {
  },
  methods: {
      navigate: function() {
          this.$router.replace('register')
      }
  }
}
</script>
