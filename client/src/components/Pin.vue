<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-5" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">

                <div style="padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Enter Pin: </b></label><input type="text" class="form-control"  v-model="pin"></br>
                    <div style=" text-align: right;">
                      <button @click="save" class="btn btn-primary" style="width: 78px;">Ok</button>
                      <button @click="cancel" class="btn btn-primary" style="width: 78px;">Cancel</button></br>
                      <span class='success' style="color: green;">{{success}}</span> 
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
      fname: '',
      lname: '',
      country: '',
      img: '',
      about: '',
      pin: '',
      success: '',
    }
  },
  
  mounted() {
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
    
    save(){
        axios.put(`/updateProfile`,{ fname: this.fname, lname: this.lname ,country:this.country, about:this.about, pin:this.pin, token: localStorage.getItem('token')})               
        .then((res) => {
          this.success='Data updated successfully'
            })
    },
  }
}
</script>

