<script setup lang="ts">
defineProps({
  link: String,
  image: String
})
</script>

<template>
  <div class="ip-footer__link">
    <a :href="link" target="_blank">
      <img :src="image" :alt="image" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.ip-footer__link {
  width: 40px;
  height: 40px;
  margin: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  &.wsp img {
    width: 27px;
  }
  &.ng img {
    width: 26px;
  }
  &.node img {
    width: 27px;
  }
  &:hover {
    background: #1c1c1c;
    border: 2px solid #1c1c1c;
  }

  img {
    width: 31px;
    display: flex;
  }
}
</style>
