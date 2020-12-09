<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-8" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
                <div style="padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <table class="table_col">
                        <colgroup>
                            <col style="background:rgb(0 123 255)">
                        </colgroup>
                        <tr>
                          <th>Event</th>
                          <th>Dates</th>
                          <th>Participants</th>
                          </tr>
                        <tr v-for="event in events">
                          <td><a :href="'/#/event/' + event.id">{{event.title}}</a></td>
                          <td>{{event.sDate}}-{{event.fDate}}</td>
                          <td>{{event.participants}}</td>
                        </tr>
                      </table>
                  </div>  
                    <button @click="newevent" class="btn btn-primary" style="width: 146px;float: right;">Add Event</button>
                </div>
          </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Events',
  data() {
    return {
      events: '',
      success: '',
    }
  },
  mounted() {
    axios.get('/events', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.events=res.data;
      })
  },
  methods: {
    newevent(){
        this.$router.push('/events/newEvent');
    }
  }
}
</script>