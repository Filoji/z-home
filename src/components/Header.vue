<template>
  <div>
    <div>
      <img src="/Z.svg">
    </div>
  </div>
</template>

<style scoped>
img
{
  aspect-ratio: 21/20;
  height: 100%
}
div:has(>img)
{
  background-color: var(--sign-color);
  height: 50px;
}
</style>