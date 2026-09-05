<template>
        <div 
            v-html="content" 
            :class="selected ? 'selected' : 'unselected'"
            @click="emit('select', props.id)">
        </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    content: String,
    selected: Boolean, 
});
const emit = defineEmits<{select: [id: number]}>();


</script>
<style>
.selected {
    background-color: #1c2127;
    color: #f6f7f9;
    border: 1px solid #4c90f0;
    display: flexbox;
    align-items: center;
    place-items: center;
    border-radius: 10px;
}
.unselected {
    background-color: #1c2127;
    color: #f6f7f9;
    border: 1px solid #4c90f0;
    display: flexbox;
    align-items: center;
    place-items: center;
    border-radius: 10px;
}
    
</style>