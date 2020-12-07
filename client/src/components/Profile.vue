<template>
 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9" style="background-color: white; padding: 66px 45px 35px 45px; border: 3px solid #d0cdcd;">      
          <form  @submit.prevent="">

            <div class="form-group" style="display: inline-block;vertical-align: top;">              
              <img :src="require('@/assets/img/'+img)" style="width: 135px;height: 135px;"></br>
              <input type="file" name="image_uploads" style="cursor: pointer;"@change="onAttachmentChange"></br>
              <button class="btn btn-primary" style="margin-top: -37px;">Upload</button></br>
              <button @click="delete_img" class="btn btn-primary">Delete</button>
            </div>

            <div  style="display: inline-block;text-align: right;margin-left: 70px;">
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
                <label  style="float: left;">About</label>
                <textarea  class="form-control" v-model="about"/>
              </div>
              <button @click="save" class="btn btn-primary">Ok</button>
              <button @click="cancel" class="btn btn-primary">Cancel</button></br>
              <span class='success' style="color: green;">{{success}}</span> 
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
      img: 'default.jpg',
      about: '',
      pin: '',
      success: '',
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
        this.img = res.data.img;
        this.about = res.data.about;
        this.pin = res.data.pin;
      })
  },
  methods: {
    cancel(){
          this.$router.push('/username');
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
    save(){
        axios.put(`/updateProfile`,{ fname: this.fname, lname: this.lname ,country:this.country, about:this.about, pin:this.pin, token: localStorage.getItem('token')})               
        .then((res) => {
          this.success='Data updated successfully'
            })
    },
  }
}
</script>

