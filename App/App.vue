<template>
    <HotBar>
        <NavLink title='Landing Page' link='/'  />
        <NavLink title='Blog' link='/Blog'  />
        <NavLink title='Projects' link='/Projects'  />
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
    background-color: #1c2127;
    color: #f6f7f9;
    font-family: system-ui, sand-serif;
    margin: 0;
}


</style>    