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

<style lang="css">
hr
{
  margin: 8px 10px;
  border: solid 0px var(--type-color);
  border-radius: 50%;
  box-shadow: 0 0 10px 2px var(--type-color);
}

.post
{
  width: 100%;
  max-width: 100vw;
  padding: 5px 0px 20px;
  border: solid 5px var(--type-color);
  border-style: none none solid;
  background-color: color-mix(in lch, var(--type-color) 30%, var(--theme));
  transition: 0.3s;
  &:hover
  {
    background-color: color-mix(in lch, var(--type-color) 50%, var(--theme));
    box-shadow: inset 0 0 10px var(--type-color);
  }
}

.message
{
  color: inherit;
  font-size: 25px;
  margin: 0px 5px 0px;
}

.user
{
  display: grid;
  align-items: center;
  height: 45px;
  color: inherit;
  grid-template-columns: 1fr 1fr;
  margin: 0px 5px 0px;
}

.username
{
  vertical-align: bottom;
  font-size: 30px;
  font-weight: bold;
  justify-self: left;
}

.astrosign
{
  display: flex;
  height: 100%;
  border-radius: 25%;
  background-color: var(--sign-color);
  box-shadow: 0 0 5px var(--sign-color);
  justify-self: right;
  > img
  {
    height: 100%;
    aspect-ratio: 1/1;
  }
}
</style>