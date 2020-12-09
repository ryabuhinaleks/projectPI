<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-5" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
                <div style="padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>E-mail: </b></label>{{email}}</br>
                    <label style="padding-right: 9px;"><b>Current Password: </b></label><input type="password" class="form-control"  v-model="c_password"></br>
                    <label style="padding-right: 9px;"><b>New Password: </b></label><input type="password" class="form-control"  v-model="n_password"></br>
                    <label style="padding-right: 9px;"><b>Repeat Password: </b></label><input type="password" class="form-control"  v-model="r_password"></br>
                    <div style=" text-align: right;">
                      <button @click="updatePassword" class="btn btn-primary" style="width: 78px;">Ok</button>
                      <button @click="cancel" class="btn btn-primary" style="width: 78px;">Cancel</button></br>
                      <span class='success' style="color: green;">{{success}}</span> 
                      <span class='error' style="color: red;">{{error}}</span> 
                    </div>
                  </div>  
                </div>
          </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'UpdateLoginInformation',
  data() {
    return {
      c_password: '',
      n_password: '',
      r_password: '',
      fname: '',
      lname: '',
      country: '',
      img: '',
      about: '',
      email: '',
      pin: '',
      success: '',
      error: '',
    }
  },
  mounted() {
     axios.get('/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.fname = res.data.fname;
        this.lname = res.data.lname;
        this.country = res.data.country;
        this.email = res.data.email;
        this.img = res.data.img;
        this.about = res.data.about;
        this.pin = res.data.pin;
      })
  },
  methods: {
    cancel(){
          this.$router.push('/username');
    },
    updatePassword(){
        if(this.n_password!=this.r_password)
        {
          this.error="Passwords don't match"
          this.success=''
        }
        else
        {
          axios.put(`/updatePassword`,{ c_password: this.c_password, n_password: this.n_password, token: localStorage.getItem('token')})               
          .then((res) => {
            if(res.data=="Current password doesn't match")
            {
              this.success=''
              this.error=res.data
            }
            else
            {
              this.success='Data updated successfully';
              this.error='';
              this.c_password= '';
              this.n_password= '';
              this.r_password= '';
            }
            }).catch((err) => 
            {
              this.error=err.response.data.title
            })
        }
    },   
  }
}
</script>