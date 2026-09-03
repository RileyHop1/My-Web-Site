<script setup>
defineProps(['link', 'title'])
</script>
<template>
    <router-link :to="link" class="Nav-route-option">{{ title }}</router-link>
</template>
<style>
.Nav-route-option {
    display: inline-block;
    padding: 8px 8px;
    color:aliceblue;
    


}
.Nav-route-option.router-link-active {
    color:aliceblue;
    border: 1px solid white;
    border-bottom: rgb(48, 58, 109);
    background-color: rgb(48, 58, 109);
    margin-bottom: -1px;
}
</style>