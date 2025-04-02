<script setup lang="ts">
import Feed from "@/components/Feed.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <header>
    <Header class="virgo"/>
  </header>
  <main>
    <Feed />
  </main>
</template>

<style scoped>
header
{
  position: sticky;
  top: 0;
}
</style>
