<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-8" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 

          <div style="font-size: 34px; height: 58px; float: left;">{{event.title}}</div>
          <form  @submit.prevent="">
                <div style="padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <table class="table_col" style="width: 614px;">
                        <colgroup>
                            <col style="background:rgb(0 123 255)">
                        </colgroup>
                        <tr>
                          <th>Document</th>
                          <th>Day</th>
                          <th>State</th>
                          </tr>
                        <tr v-for="document in documents">
                          <td><a :href="'/#/event/'+id+'/documents/'+document.id+'/info'">{{document.title}}</a></td>
                          <td>{{document.day}}</td>
                          <td v-if="document.state=='false'"><button @click="setState(document.id)" class="btn btn-warning" style="color: white; padding: 4px 15px 4px 15px">Signed</button></td>
                          <td v-if="document.state=='true'">Signed</td>
                        </tr>
                      </table>
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
  name: 'Documents',
  data() {
    return {
      documents: '',
      success: '',
      event: '',
      id: this.$route.params.id,
    }
  },
  
  mounted() {
    axios.get('/documents/'+this.id)
      .then(res => {
        this.documents=res.data;
      })

    axios.get('/event/'+this.id, { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.event=res.data;
      })
  },
  methods: {
    setState(id){
        this.$router.push('/event/'+this.id+'/documents/'+id);
    }
  }
}
</script>

