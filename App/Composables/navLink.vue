<script setup>
defineProps(['link', 'title'])
</script>
<template>
    <router-link :to="link" class="Nav-route-option">{{ title }}</router-link>
</template>
<style>
.Nav-route-option {
    display: inline-block;
    padding: 8px 16px;
    color: #abb3bf;
    text-decoration: none;
    border-top: 2px solid transparent;
}
.Nav-route-option.router-link-active {
    color: #f6f7f9;
    background-color: #252a31;
    border-top: 2px solid #4c90f0;
    margin-bottom: -2px; 
}
</style>