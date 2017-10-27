<template>
    <div class="container topmargin" id="users">
        <b-list-group>
            <b-list-group-item active>
                <b-button :size="'sm'" :variant="'link'"  v-bind:to="'/users'" class="backbtn">&lsaquo;Select User</b-button>
                Add User                
            </b-list-group-item>
            <b-list-group-item>
                Add time range
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

.backbtn{
    position: absolute;
    float:left;
    margin-left: -138px;
    margin-top: -5px;
    color: white;
}

</style>