<template>

 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9" style="background-color: white;padding: 20px; border: 3px solid #d0cdcd;">      
          <div style="font-size: 34px; height: 70px;">Registration</div>
          <form  @submit.prevent="">

            <div class="form-group" style="display: inline-block;vertical-align: top;">              

              <img :src="require('@/assets/img/'+img)" style="width: 135px;height: 135px;"></br>

              <input type="file" name="image_uploads" style="cursor: pointer;"@change="onAttachmentChange"></br>
              <button class="btn btn-primary" style="margin-top: -37px;">Upload</button></br>


              <button @click="delete_img" class="btn btn-primary">Delete</button>
            </div>

            <div  style="display: inline-block;text-align: right;margin-left: 40px;">
              <div class="form-group">
                <label style="float: left;">First Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  v-model="fname">
              </div>

              <div class="form-group">
                <label  style="float: left;">Last Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model="lname">
              </div>

              <div class="form-group">
                <label  style="float: left;">Country</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  v-model="country">
              </div>

              <div class="form-group">
                <label  style="float: left;">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
              </div>

              <div class="form-group">
                <label  style="float: left;">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  v-model="password">
              </div>
              
              <div class="form-group">
                <label  style="float: left;">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  v-model="rep_password">
              </div>

              <button @click="signup" class="btn btn-primary">Ok</button>
              <button @click="cancel" class="btn btn-primary">Cancel</button></br>
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
  name: 'Signup',
  data() {
    return {
      fname: '',
      lname: '',
      country: '',
      email: '',
      password: '',
      rep_password: '',
      img: "default.jpg",
      error: '',
    }
  },
  
  mounted() {
    let input = document.querySelector('input');
    input.style.opacity = 0;
  },
  methods: {
    onAttachmentChange (e) {
        this.img=e.target.files[0].name;
    },

    delete_img(){
          this.img='default.jpg';
    },
    cancel(){
          this.$router.push('/login');
    },
    signup() {
      let newUser = {
        fname: this.fname,
        lname: this.lname,
        country: this.country,
        email: this.email,
        password: this.password,
        img: this.img,
      }
      if(this.password==this.rep_password)
      {
        axios.post('/signup', newUser)
          .then(res => {
            console.log(res.data)
            this.error = '';
            this.$router.push('/login');
          }, err => {
            console.log(err.response)
            this.error = err.response.data.title
          })
      }
      else
      {
        this.error = "Password does not match"
      }
    }
  }
}
</script>

