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
                            <a class="nav-link"><router-link to="/ideas">Ideas</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><router-link to="/schools">Schools</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><router-link to="/profile">Profile</router-link></a>
                        </li>
                    </ul>
                    <div class="nav-button ml-auto">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" @click="logout()" class="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">
                                       Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
         <!-- END NAVBAR -->
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar2',
  props: {
  },
  methods: {
     logout: function() {
        firebase.auth().signOut().then(() => {
           this.$router.replace('login');
        });
     }
  }
}
</script>
