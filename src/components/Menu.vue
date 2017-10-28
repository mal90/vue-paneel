<template>
    <div class="container topmargin" id="menu">
        <b-list-group>
            <b-list-group-item active>
                Menu
            </b-list-group-item>
            <b-list-group-item v-bind:to="'/users'">
                User         <icon name="chevron-right" scale="1" class="goto-user-chevron"></icon>
            </b-list-group-item>
            <b-list-group-item href="#">
                Add time range
            </b-list-group-item>
            <b-list-group-item href="#">
                Select catagory
            </b-list-group-item>
            <b-list-group-item href="#">
                Select location
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
<style>
.list-group{
    margin: auto;
    width: 32%;
    padding: 10px;
}

.goto-user-chevron{
    float: right;
    margin-top: 6px;
}
</style>