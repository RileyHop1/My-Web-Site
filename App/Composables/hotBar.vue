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
    align-items: center;
    display: flex;
    gap: 5px;
    border-bottom: 1px solid white;

}
</style>