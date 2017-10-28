<template>
    <div class="container topmargin" id="users">
        <b-list-group>
            <b-list-group-item active>
                <b-button :size="'sm'" :variant="'link'"  v-bind:to="'/users'" class="backbtnaddusers">&lsaquo;Select User</b-button>
                Add User                
            </b-list-group-item>
            <b-list-group-item>
                <b-container fluid>
                    <b-row class="my-1">
                        <b-col sm="3"><small><label size="sm" for="input-small">Role : </label></small></b-col>
                        <b-col sm="9"><b-form-input size="sm" id="input-small" :id="'text'" :type="'text'"></b-form-input></b-col>
                    </b-row>
                    <b-row class="my-2">
                        <b-col sm="3"><small><label size="sm" for="input-small">Info : </label></small></b-col>
                        <b-col sm="9">
                            <b-form-textarea id="textarea1"
                            placeholder="Enter a short description of the role"
                            :rows="3"
                            :max-rows="6">
                            </b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row class="my-3">
                        <b-col sm="10">
                        </b-col>
                        <b-col sm="2">
                            <b-button :size="'sm'" :variant="'primary'" v-bind:to="'/addusers'" class="addsavebtn">Save</b-button>
                        </b-col>   
                    </b-row>
                </b-container>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'AddUsers',
  data () {
    return {
     form: {
        email: '',
        name: '',
        food: null,
        checked: false,
        secret: 'S3CR3T'
      }
    }
  }, 
  methods: {
    
  }
}
</script>
<style>
.list-group{
    margin: auto;
    width: 32%;
    padding: 10px;
}

.backbtnaddusers{
    position: absolute;
    float:left;
    margin-left: -141px;
    margin-top: -5px;
    color: white;
}

.addsavebtn{
    float: right;
}
</style>