<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-5" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
              <div style="margin-top: 20px;">
                <div style="text-align: justify;padding-left: 13px;color: white;background-color: rgb(0 123 255);">
                  <b>Document Information</b>
                  <img :src="require('@/assets/edit.png')" style="width: 22px;float: right;margin-right: 4px;cursor: pointer;"
                   @click="edit_dates"></br>
                </div>
                <div style="width: 448px;padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Document Title: </b></label>{{document.title}}</br>
                    <label style="padding-right: 9px;"><b>Day: </b></label>{{document.day}}</br>
                    <label style="padding-right: 9px;"><b>Document Content: </b></label>{{document.content}}</br>
                    <label style="padding-right: 9px;"><b>For: </b>{{document.role}}</label></br>
                  </div>  
                </div>
              </div></br>
              <div style=" text-align: right;">
                <button @click="cancel" class="btn btn-primary" style="width: 78px;">Cancel</button>
                <button @click="deletee" class="btn btn-danger" style="width: 78px;">Delete</button></br>
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
  name: 'DocumentInformation',
  data() {
    return {
      document: '',
      success: '',
      id: this.$route.params.id,
      id_doc: this.$route.params.id_doc,
    }
  },  
  mounted() {
      axios.get('/document/'+this.id_doc)
      .then(res => {
        this.document=res.data;
      })
  },
  methods: {
    edit_dates(){
          this.$router.push('/documents/'+this.id_doc+'/update');
    },
    cancel(){
          this.$router.push('/documents');
    },
    update(){
        axios.put(`/updateEvent`,{ })        
        .then((res) => 
        {
          this.success='Data updated successfully'
        })
    },
    deletee(){
        axios.delete('/document/'+this.id_doc)
        .then((res) => {
          this.$router.push('/documents');
        })
    }
  }
}
</script>