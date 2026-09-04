<script setup lang="ts">
defineProps(['nave-item']);
</script>



<template>
    <nav class="hot_bar_composable">
        <slot/> 
    </nav>
</template>
<style lang="css">
.hot_bar_composable {
    display: flex;
    gap: 0;
    background-color: #1c2127;
    border-bottom: 1px solid #14181c;
}
</style>