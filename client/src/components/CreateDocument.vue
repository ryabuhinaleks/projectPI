<template>
 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6" style="background-color: white; padding: 22px 0px 35px 0px; border: 3px solid #d0cdcd;">
          <div style="font-size: 34px; height: 70px;">New Document</div>      
          <form  @submit.prevent="" style="margin-left: -54px;">
            <div  style="display: inline-block;text-align: right;margin-left: 70px;">
              <div class="form-group">
                <label style="float: left;">Document Title</label>
                <input type="text" class="form-control" v-model="dTitle">
              </div>
              <div class="form-group">
                <label  style="float: left;">Event</label>
                <select v-model="EventSelect" class="form-control">
					        <option disabled value="n1">Selected event</option>
                  <option v-for="event in events" v-bind:value="event.id">{{event.title}}</option>
                </select>
              </div>
              <div class="form-group">
                <label  style="float: left;">Day</label>
                <select v-model="DaytSelect" class="form-control">
                  <option disabled value="n1">Selected day</option>
                  <option value="С-2">C-2</option>
                  <option value="С1">C1</option>
                  <option value="С+1">C+1</option>
                  <option value="С+2">C+2</option>
                </select>
              </div>
              <div class="form-group">
                <label  style="float: left;">Document Content</label>
                <textarea  class="form-control" v-model="dContent"/>
              </div>
              <div class="form-group" style="text-align: left;">
                <label  style="float: left;">For</label></br>
                <div style="margin-left: 40px;">
                  <input v-model="role" type="radio" value="Experts" checked> Experts</br>
                  <input v-model="role" type="radio" value="Competitiors"> Competitiors
                </div>
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
  name: 'CreateDocument',
  data() {
    return {
      dTitle: '',
      EventSelect: 'n1',
      DaytSelect: 'n1',
      dContent: '',
      role: '',
      events: '',
      user: '',
      error: '',
    }
  },
  mounted() {
    axios.get('/events', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.events=res.data;
      })

    axios.get('/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.user = res.data;
      })
  },
  methods: {
    cancel(){
          this.$router.push('/documents');
    },

    create(){
      let newDocument = {
        id_event: this.EventSelect,
        id_user: this.user.id,
        title: this.dTitle,
        day: this.DaytSelect,
        role: this.role,
        content: this.dContent,
        state: 'false'
      }
      axios.post('/createDocument', {document:newDocument})
        .then(res => {
          this.error = '';
          this.$router.push('/documents');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.title
        })
    }
  }
}
</script>

