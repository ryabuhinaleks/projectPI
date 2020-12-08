<template>

 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;">      
          <div style="font-size: 34px; height: 70px;">Username</div>
          <form  @submit.prevent="">

            <div class="form-group" style="display: inline-block;vertical-align: top;">              
              <img :src="require('@/assets/img/'+img)" style="width: 135px;height: 135px;"></br>
              <input type="file" name="image_uploads" style="cursor: pointer;"@change="onAttachmentChange"></br>
              <button class="btn btn-primary" style="margin-top: -37px;">Upload</button></br>
              <button @click="delete_img" class="btn btn-primary">Delete</button>
            </div>

            <div style="display: inline-block;text-align: right;margin-left: 40px;">
              
              <div style="border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Login Information</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                    @click="edit_login"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>E-mail: </b></label>{{email}}</br>
                    <label style="padding-right: 9px;"><b>Password: </b></label>{{password}}
                  </div>  
                </div>
              </div>

              <div style="margin-top: 20px;border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Profile Information</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                   @click="edit_profile"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>First Name: </b></label>{{fname}}</br>
                    <label style="padding-right: 9px;"><b>Last Name: </b></label>{{lname}}</br>
                    <label style="padding-right: 9px;"><b>Country: </b></label>{{country}}</br>
                    <label style="padding-right: 9px;"><b>About: </b></label>{{about}}
                  </div>  
                </div>
              </div>

              <div style="margin-top: 20px;border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Personal Identification Number</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                   @click="edit_pin"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Pin: </b></label>{{pin}}
                  </div>  
                </div>
              </div></br>
              <button @click="logout" class="btn btn-primary" style="width: 78px;">Logout</button></br>
            </div>
          </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Username',
  data() {
    return {
      fname: '',
      lname: '',
      country: '',
      email: '',
      password: '********',
      rep_password: '',
      img: "default.jpg",
      about: '',
      pin: '********',
      error: '',
    }
  },
  
  mounted() {
    let input = document.querySelector('input');
    input.style.opacity = 0;

     axios.get('/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.fname = res.data.fname;
        this.lname = res.data.lname;
        this.country = res.data.country;
        this.email = res.data.email;
        this.img = res.data.img;
        this.about = res.data.about;
      })
  },
  methods: {
    edit_login(){
        this.$router.push('/username/login');
    },
    edit_profile(){
        this.$router.push('/username/profile');
    },
    edit_pin(){
        this.$router.push('/username/pin');
    },
    logout(){
          localStorage.clear();
          this.$router.push('/login');
          window.location.reload();
    },
    onAttachmentChange (e) {
        axios.put(`/updateImg`,{ img: e.target.files[0].name, token: localStorage.getItem('token')})        
        .then((res) => 
        {
          this.img=e.target.files[0].name;
        })
    },

    delete_img(){
        axios.put(`/updateImg`,{ img: 'default.jpg', token: localStorage.getItem('token')})        
        .then((res) => 
        {
          this.img='default.jpg';
        })
    },   
  }
}
</script>

