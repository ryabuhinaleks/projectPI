<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-5" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
                <div style="padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Event Title: </b></label><input type="text" class="form-control"  v-model="event.title"></br>
                    <div style=" text-align: right;">
                      <button @click="update" class="btn btn-primary" style="width: 78px;">Ok</button>
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
  name: 'EventInformation',
  data() {
    return {
      event: '',
      success: '',
      id: this.$route.params.id,

    }
  },
  mounted() {
      axios.get('/event/'+this.id, { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.event=res.data;
      })
  },
  methods: {
    cancel(){
          this.$router.push('/event/'+this.id);
    },
    update(){
        axios.put(`/updateEvent`,{ event: this.event})        
        .then((res) => 
        {
          this.success='Data updated successfully'
        })
    },
  }
}
</script>