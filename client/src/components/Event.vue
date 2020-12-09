<template>
 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;">      
          <div style="font-size: 34px; height: 70px;"></div>
          <form  @submit.prevent="">
            <div class="form-group" style="display: inline-block;vertical-align: top;">              
              <img :src="require('@/assets/event/'+img)" style="width: 238px;height: 143px;"></br>
              <input type="file" name="image_uploads" style="cursor: pointer;"@change="onAttachmentChange"></br>
              <button class="btn btn-primary" style="margin-top: -37px;">Upload</button></br>
              <button @click="delete_img" class="btn btn-primary">Delete</button>
            </div>
            <div style="display: inline-block;text-align: right;margin-left: 40px;">        
              <div style="border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Event Information</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                    @click="edit_information"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Event Title: </b></label>{{event.title}}</br>
                  </div>  
                </div>
              </div>
              <div style="margin-top: 20px;border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Dates Information</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                   @click="edit_dates"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Start Date: </b></label>{{event.sDate}}</br>
                    <label style="padding-right: 9px;"><b>C1 Date: </b></label>{{event.c1Date}}</br>
                    <label style="padding-right: 9px;"><b>C+1 Date: </b></label>{{event.c_1Date}}</br>
                    <label style="padding-right: 9px;"><b>Finish Date: </b></label>{{event.fDate}}
                  </div>  
                </div>
              </div>
              <div style="margin-top: 20px;border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Participants</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                   @click="edit_part"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Participants: </b></label>{{event.participants}}
                  </div>  
                </div>                
              </div>            
              <div style="margin-top: 20px;border: 1px solid rgb(68, 104, 142);">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Documents</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                   @click="edit_documents"></br>
                </div>             
              </div></br>
              <button @click="cancel" class="btn btn-primary" style="width: 78px;">Cancel</button></br>
            </div>
          </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Event',
  data() {
    return {
      img: '1.jpg',
      event: '',
      error: '',
      id: this.$route.params.id,
    }
  },
  mounted() {
    let input = document.querySelector('input');
    input.style.opacity = 0;

    axios.get('/event/'+this.id, { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.event=res.data;
        this.img=this.event.img;
      })
  },
  methods: {
    edit_information(){
        this.$router.push('/event/'+this.id+'/info');
    },
    edit_dates(){
        this.$router.push('/event/'+this.id+'/dates');
    },
    edit_part(){
        this.$router.push('/event/'+this.id+'/part');
    },
    edit_documents(){
        this.$router.push('/event/'+this.id+'/documents');
    },
    cancel(){
          this.$router.push('/events');
    },
    onAttachmentChange (e) {
        axios.put(`/imgEvent`,{ img: e.target.files[0].name, id: this.id})        
        .then((res) => 
        {
          this.img=e.target.files[0].name;
        })
    },
    delete_img(){
        axios.put(`/imgEvent`,{ img: '1.jpg', id: this.id})        
        .then((res) => 
        {
          this.img='1.jpg';
        })
    },   
  }
}
</script>