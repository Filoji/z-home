<script setup lang="ts">
import type { User, Elements } from "@/types";
import { signsElementsMap } from "@/types";

const props = defineProps<{
  user: User
}>();
const el : Elements = signsElementsMap[props.user.sign];
const postClasses: String = `post ${props.user.sign.toLowerCase()} ${el.toLocaleLowerCase()}`
</script>

<template>
<div :class="postClasses">
  <div class="user">
    <span class="username">{{ props.user.username }}</span>
    <span class="astrosign">
      <img :src="`signs/${props.user.sign}.svg`">
    </span>
  </div>
  <hr>
  <div class="message">
    <slot />
  </div>
</div>
</template>