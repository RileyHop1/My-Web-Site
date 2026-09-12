<template>
  <div>
    <div class="Blog-page-general">
      <h1 class="Blog-page-heading">Checkout the my most current articles.</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArticleCard from "@/Composables/articleCard.vue";
</script>
<style>
.Blog-page-general {
  color: #f6f7f9;
  background-color: #252a31;
  padding: 1.5rem 2rem;
  min-height: 100vh;
}

.Blog-page-heading {
  display: inline-block;
  border-bottom: 2px solid #14181c;
}
</style>
