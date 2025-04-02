<script setup lang="ts">
import Post from "@/components/Post.vue";
import { getPosts } from "@/utils/posts";
const posts = getPosts();
</script>

<template>
  <div class="feed">
    <Post v-for="post in posts" :user="post.user">{{ post.message }}</Post>
  </div>
</template>

<style lang="css">
.feed
{
  width: 100vw;
  max-width: 600px;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>