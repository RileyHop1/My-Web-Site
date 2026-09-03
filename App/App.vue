<template>
    <HotBar>
        <NavLink title='Landing Page' link='/'  />
        <NavLink title='Blog' link='/Blog'  />
    </HotBar>
    <RouterView/>



</template> 

<script setup lang="ts">
import { RouterView } from 'vue-router'
import  HotBar  from '@/Composables/hotBar.vue'
import  NavLink  from '@/Composables/navLink.vue'





</script>
<style>
body {
    background-color: black;
    margin: 0;
}


</style>    