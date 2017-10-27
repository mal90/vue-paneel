<template>
    <div class="container topmargin" id="users">
        <b-list-group>
            <b-list-group-item active>
                <b-button :size="'sm'" :variant="'link'"  v-bind:to="'/users'" class="backbtnaddusers">&lsaquo;Select User</b-button>
                Add User                
            </b-list-group-item>
            <b-list-group-item>
                <b-form @submit="onSubmit">
                <b-form-group id="exampleInputGroup2"
                                label="Your Name:" label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text" v-model="form.name" required
                                placeholder="Enter name">
                    </b-form-input>
                    </b-form-group>
                </b-form>
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

</style>