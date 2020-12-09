<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-8" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
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
                          <th>For</th>
                          </tr>
                        <tr v-for="document in documents">
                          <td><a :href="'/#/event/'+id+'/documents/'+document.id+'/info'">{{document.title}}</a></td>
                          <td>{{document.day}}</td>
                          <td>{{document.role}}</td>
                        </tr>
                      </table>
                  </div>  
                  <div style=" text-align: right;">
                      <button @click="add" class="btn btn-primary" style="width: 175px;">Add Document</button>
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
  name: 'My_documents',
  data() {
    return {
      documents: '',
      success: '',
      id: '',
    }
  },
  mounted() {
    axios.get('/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.id=res.data.id;
        axios.get('/documentsAll/'+ this.id)
        .then(res => {
          this.documents=res.data
        })
        
      })
  },
  methods: {
    add(){
        this.$router.push('/documents/newDocument');
    }
  }
}
</script>