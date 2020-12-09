<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-5" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
            <div style="text-align: right;display: inline-block;">
              <div class="form-group">
                <label style="float: left;">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
              </div>
              <div class="form-group">
                <label style="float: left;">Pasword</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
              </div>
              <button @click="login" class="btn btn-primary" style="width: 85px;">Sign In</button></br>
              <button @click="signup" class="btn btn-primary"style="width: 85px;margin-top: 9px;">Sign Up</button></br>
              <span class='error' style="color: red;">{{error}}</span>
            </div>
          </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    signup(){
          this.$router.push('/signup');
    },
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('/login', user)
        .then(res => {
            if (res.status === 200) {
              localStorage.setItem('token', res.data.token);      
              this.$router.push('/username');
              window.location.reload();
            }
          }
        , err => {
          console.log(err.response);
          this.error = err.response.data.title
        })
    }
  }
}
</script>