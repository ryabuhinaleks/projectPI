<template>
 <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
                      <table class="table_date">
                        <tr>
                          <th>С-2</th>
                          <th>С1</th>
                          <th>С+1</th>
                          <th>С+2</th>
                        </tr>
                        <tr>
                          <td>{{event.sDate}}</td>
                          <td>{{event.c1Date}}</td>
                          <td>{{event.c_1Date}}</td>
                          <td>{{event.fDate}}</td>
                        </tr>
                      </table>
                <div style="padding: 11px 126px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Start Date: </b></label><input type="date" class="form-control"  v-model="event.sDate"></br>
                    <label style="padding-right: 9px;"><b>C1 Date: </b></label><input type="date" class="form-control"  v-model="event.c1Date"></br>
                    <label style="padding-right: 9px;"><b>C+1 Date: </b></label><input type="date" class="form-control"  v-model="event.c_1Date"></br>
                    <label style="padding-right: 9px;"><b>Finish Date: </b></label><input type="date" class="form-control"  v-model="event.fDate"></br>
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
  name: 'Dates',
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