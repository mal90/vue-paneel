<template>
    <div class="container topmargin" id="addusers">
        <b-list-group>
            <b-list-group-item active>
                <b-nav-item  v-bind:to="'/'" class="backbtnfont">&lsaquo;Menu</b-nav-item>
                Add User
            </b-list-group-item>
            <b-list-group-item>
               <b-dropdown id="ddown1" text="Select User" variant="primary" class="m-md-2">
                    <b-dropdown-item id="header1">Manager</b-dropdown-item>
                    <b-dropdown-item  id="header2">Supervisor</b-dropdown-item>
                    <b-dropdown-item  id="header3">Co-ordinator</b-dropdown-item>
                    <b-dropdown-item  id="header4">Receptionist</b-dropdown-item>
                </b-dropdown>
                <br/>
                <small> Cannot find user ? </small><b-badge v-bind:to="'/'" variant="success">Add</b-badge>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'AddUsers',
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

.backbtnfont{
    position: absolute;
    float:left;
    margin-left: -147px;
    margin-top: -8px;
}

.backbtnfont a{
    color:#721c24;
}
</style>