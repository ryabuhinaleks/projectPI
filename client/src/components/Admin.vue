<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-8" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">
                <div style="padding: 13px 0px 2px">
                  <div style="text-align: initial;">
                    <table class="table_col" style="width: 720px;">
                        <colgroup>
                            <col style="background:rgb(0 123 255)">
                        </colgroup>
                        <tr>
                          <th>User</th>
                          <th>Event</th>
                          <th>Role</th>
                          <th>Assign</th>
                        </tr>
                        <tr v-for="d in doc">
                          <td>{{d[0]}}</td>
                          <td>{{d[1]}}</td>
                          <td>{{d[2]}}</td>
                          <td>
                              <button v-if="d[4]==''" @click="assign(d[3])" class="btn btn-warning" style="color: white; padding: 1px 19px ">Assign</button>
                              <button v-if="d[4]=='true'" @click="remove(d[3])" class="btn btn-danger" style="color: white; padding: 1px 15px">Remove</button>
                          </td>
                        </tr>
                      </table>
                  </div>  
                  <div style=" text-align: right;">
                      <button @click="cancel" class="btn btn-primary">Cancel</button>
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
  name: 'Admin',
  data() {
    return {
      documents: [],
      doc: [],
      user: '',
    }
  },
  mounted() {
    axios.get('/eventAll')
    .then(res => {

        this.documents=res.data            
        this.documents.forEach(element => {
        let name=element.data_user.fname+" "+element.data_user.lname;
        this.doc.push([name, element.title, element.role, element.id, element.status]);
        });
    })
  },
  methods: {
    cancel(){
        this.$router.push('/username');
    },
    assign(idEvent){ 
        axios.put('/AssignEvent/'+idEvent)        
        .then((res) => 
        {
          window.location.reload();
        })
    },
    remove(idEvent){
        axios.delete('/event/'+idEvent)
        .then((res) => {
          window.location.reload();
        })
    },
  }
}
</script>

