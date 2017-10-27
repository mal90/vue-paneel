<template>
    <div class="container topmargin" id="dashboard">
        <b-list-group>
            <b-list-group-item active>
                Menu
            </b-list-group-item>
            <b-list-group-item v-bind:to="'/addusers'">
                Go to Add User
            </b-list-group-item>
            <b-list-group-item>
                Add time range
            </b-list-group-item>
            <b-list-group-item>
                Select catagory
            </b-list-group-item>
            <b-list-group-item>
                Select location
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
<style>
.list-group{
    margin: auto;
    width: 32%;
    padding: 10px;
}
</style>