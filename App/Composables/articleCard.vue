<template>
    <div class="general-article-card">
        <div v-html="rendered"></div>
    </div>
    
</template>
<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt();

const props = defineProps({
    body: {type: String, default: '*Place Holder*'}
});

const rendered = computed(() => md.render(props.body));


    
</script>
<style>
.general-article-card {
    background-color: #1c2127;
    color: #f6f7f9;
    border: 1px solid #4c90f0;
    display: flexbox;
    align-items: center;
    place-items: center;
    border-radius: 10px;
}
.article-card-heading {

}
.article-card-body {


}
    
</style>