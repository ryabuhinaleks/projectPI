<template>
 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9" style="background-color: white; padding: 22px 0px 35px 0px; border: 3px solid #d0cdcd;">
          <div style="font-size: 34px; height: 70px;">New Event</div>      
          <form  @submit.prevent="">

            <div class="form-group" style="display: inline-block;vertical-align: top;">              
              <img :src="require('@/assets/event/'+img)" style="width: 238px;height: 143px;"></br>
              <input type="file" name="image_uploads" style="cursor: pointer;"@change="onAttachmentChange"></br>
              <button class="btn btn-primary" style="margin-top: -37px;">Upload</button></br>
              <button @click="delete_img" class="btn btn-primary">Delete</button>
            </div>

            <div  style="display: inline-block;text-align: right;margin-left: 70px;">
              <div class="form-group">
                <label style="float: left;">Event Title</label>
                <input type="text" class="form-control" v-model="eTitle">
              </div>

              <div class="form-group">
                <label  style="float: left;">Start Date</label>
                <input type="date" class="form-control" v-model="sDate">
              </div>

              <div class="form-group">
                <label  style="float: left;">C1 Date</label>
                <input type="date" class="form-control" v-model="c1Date">
              </div>

              <div class="form-group">
                <label  style="float: left;">C+1 Date</label>
                <input type="date" class="form-control"  v-model="c_1Date">
              </div>

              <div class="form-group">
                <label  style="float: left;">Finish Date</label>
                <input type="date" class="form-control"  v-model="fDate">
              </div>

              <button @click="create" class="btn btn-primary">Ok</button>
              <button @click="cancel" class="btn btn-primary">Cancel</button></br>
              <span class='success' style="color: red;">{{error}}</span> 
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
      eTitle: '',
      sDate: '',
      c_1Date: '',
      img: '1.jpg',
      fDate: '',
      c1Date: '',
      error: '',
    }
  },
  
  mounted() {
    let input = document.querySelector('input');
    input.style.opacity = 0;
  },
  methods: {
    cancel(){
          this.$router.push('/events');
    },

    onAttachmentChange (e) {
        this.img=e.target.files[0].name;
    },

    delete_img(){
        this.img='1.jpg';
    }, 

    create(){
      let newEvent = {
        title: this.eTitle,
        sDate: this.sDate,
        c1Date: this.c1Date,
        c_1Date: this.c_1Date,
        fDate: this.fDate,
        img: this.img,
      }

      axios.post('/createEvent', {event:newEvent, token: localStorage.getItem('token')})
        .then(res => {
          this.error = '';
          this.$router.push('/events');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.title
        })

    }
  }
}
</script>

