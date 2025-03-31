<script setup lang="ts">
import Post from "./components/Post.vue";
import { getPosts } from "@/posts";
const posts = getPosts();
</script>

<template>
  <header>
  </header>
  <main>
    <div class="feed">
      <Post v-for="post in posts" :user="post.user">{{ post.message }}</Post>
    </div>
  </main>
</template>

<style scoped>
</style>
