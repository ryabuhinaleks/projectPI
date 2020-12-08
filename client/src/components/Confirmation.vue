<template>
 <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-5" style="background-color: white;padding: 25px; border: 3px solid #d0cdcd;"> 
          <form  @submit.prevent="">

                <div style="padding: 13px 13px 2px 13px;">
                  <div style="text-align: initial;">
                    <label style="padding-right: 9px;"><b>Enter Pin: </b></label><input type="password" class="form-control"  v-model="pin"></br>
                    <div style=" text-align: right;">
                      <button @click="save" class="btn btn-primary" style="width: 78px;">Ok</button>
                      <button @click="cancel" class="btn btn-primary" style="width: 78px;">Cancel</button></br>
                      <span class='success' style="color: red;">{{error}}</span> 
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
  name: 'UpdateLoginInformation',
  data() {
    return {
      pin: '',
      pin_2: '',
      error: '',
      id: this.$route.params.id,
      id_doc: this.$route.params.id_doc,
    }
  },
  
  mounted() {
    axios.get('/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.pin_2 = res.data.pin;
      })
  },
  methods: {
    cancel(){
        this.$router.push('/event/'+this.id+'/documents/');
    },
    
    save(){
      if(this.pin==this.pin_2)
      {
        axios.put('/UpdateState/'+this.id_doc)        
        .then((res) => 
        {
            this.$router.push('/event/'+this.id+'/documents/');
        })
      }
      else
      {
          this.error="Incorrect Pin";
      }
    },
  }
}
</script>

