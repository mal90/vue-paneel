<template>
    <div class="container topmargin" id="users">
        <b-list-group>
            <b-list-group-item active>
                <b-nav-item  v-bind:to="'/'" class="backbtnfont">&lsaquo;Menu</b-nav-item>
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
                <small> Cannot find user ? </small><b-button :size="'sm'" :variant="'primary'">Add</b-button>
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

.backbtnfont{
    position: absolute;
    float:left;
    margin-left: -140px;
    margin-top: -8px;
}

.backbtnfont a{
    color:#721c24;
}
</style>