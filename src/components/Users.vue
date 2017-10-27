<template>
    <div class="container topmargin" id="users">
        <b-list-group>
            <b-list-group-item active>
                <b-button :size="'sm'" :variant="'link'"    v-bind:to="'/'" class="backbtn">&lsaquo;Menu</b-button>
                Select User
            </b-list-group-item>
            <b-list-group-item>
               <b-dropdown id="ddown1" text="Select User" variant="primary" class="m-md-2">
                    <b-dropdown-item id="item1">Manager</b-dropdown-item>
                    <b-dropdown-item  id="item2">Supervisor</b-dropdown-item>
                    <b-dropdown-item  id="item3">Co-ordinator</b-dropdown-item>
                    <b-dropdown-item  id="item4">Receptionist</b-dropdown-item>
                </b-dropdown>
                <br/>
                <br/>
                <small> Cannot find user ? </small><b-button :size="'sm'" :variant="'primary'" v-bind:to="'/addusers'">Add</b-button>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
     
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

.backbtn{
    position: absolute;
    float:left;
     margin-left: -133px;
    margin-top: -5px;
    color: white;
}
</style>