<template>
<!-- STRAT NAVBAR -->
        <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div class="container">
                <!-- LOGO -->
                <a class="navbar-brand logo text-uppercase" href="/">
                   <!-- <img src="@/assets/logo.png" width="65%" height="35%" alt="Adopt A Classroom Logo"> -->
                  <h1>Apple Core</h1>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
                <div  class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-center" id="mySidenav">
                       <router-link to="welcome">
                        <li class="nav-item active">
                            <a class="nav-link">Home</a>
                        </li>
                        </router-link>
                        <router-link to="requests">
                        <li class="nav-item">
                            <a class="nav-link">Requests</a>
                        </li>
                        </router-link>
                        <router-link to="profile">
                        <li class="nav-item">
                            <a class="nav-link">Profile</a>
                        </li>
                        </router-link>
                        <router-link to="/login">
                        <li class="nav-item">
                        <a class="nav-link">Login</a>
                        </li>
                        </router-link>
                    </ul>
                    <div class="nav-button ml-auto">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                              <router-link to="/login">
<a class="nav-link">                                       Register</a>
                                </button>
                              </router-link>
                            </li>
                            <li>
                               <button type="button" @click="logout()" class="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">
                                       Logout
                               </button>
                            </li>
                        </ul>
                    </div>
               </div>
                <div class="collapse navbar-collapse" id="navbarCollapse">


                </div>
            </div>
        </nav>
         <!-- END NAVBAR -->
</template>

<script>
import firebase from 'firebase'
import router from '@/router'

export default {
  name: 'Navbar2',
  props: {
  },
  methods: {
     logout: function() {
        firebase.auth().signOut().then(() => {
           alert("You have successfully logged out.")
           this.$router.replace('login');
        });
     }
  }
}
</script>
