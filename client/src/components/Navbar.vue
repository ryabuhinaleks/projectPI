<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Project</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" v-if="this.flag == false">
            <a class="nav-link" href="/#/username">Profile</a>
          </li>
          <li class="nav-item active" v-if="this.flag == false">
            <a class="nav-link" href="/#/events">Events</a>
          </li>
          <li class="nav-item active" v-if="this.flag == false">
            <a class="nav-link" href="/#/documents">Documents</a>
          </li>
          <li class="nav-item active" v-if="this.status == 'admin'">
            <a class="nav-link" href="/#/admin">Admin</a>
          </li>
          <li class="nav-item active" v-if="this.flag == true">
            <a class="nav-link" href="/#/login">Sign In</a>
          </li>
          <li class="nav-item active" v-if="this.flag == true">
            <a class="nav-link" href="/#/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
  import axios from 'axios'
    export default {
        data() 
        {
          return {
            flag:true,
            status:'',
          }
        },       
        mounted() {
          if(localStorage.getItem('token')!=null)
          {
            this.flag=false
            this.hr="/#/calendar";
            
            axios.get('/user', { headers: { token: localStorage.getItem('token')}})
            .then(res => {
                this.status=res.data.roled
              })
          }
        },
        methods:{
 
        }
    }
</script>