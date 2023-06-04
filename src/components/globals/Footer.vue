<script setup lang="ts">
import FooterLink from './FooterLink.vue'
// ICONS
import wspIcon from '../../assets/icons/wsp.svg'
import linuxIcon from '../../assets/icons/linux.svg'
import linkedinIcon from '../../assets/icons/in.svg'
import githubIcon from '../../assets/icons/github.svg'
import androidIcon from '../../assets/icons/android.svg'
import dockerIcon from '../../assets/icons/docker.svg'
import ngIcon from '../../assets/icons/ng.svg'
import nodeIcon from '../../assets/icons/node.svg'
</script>

<template>
  <footer class="ip-footer">
    <div>
      <div class="ip-footer__block">
        <FooterLink :link="'https://www.linkedin.com/in/jonatan-iparraguirre/'" :image="linkedinIcon" />
        <FooterLink class="wsp" :link="'https://wa.me/+51934335134'" :image="wspIcon" />
        <FooterLink :link="'https://wa.me/+51934335134'" :image="githubIcon" />
      </div>

      <FooterLink :image="linuxIcon" />
      <FooterLink :image="androidIcon" />
      <FooterLink :image="dockerIcon" />
      <FooterLink class="ng" :image="ngIcon" />
      <FooterLink class="node" :image="nodeIcon" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.ip-footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #000;
  > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ip-footer__block {
    background: #292929;
    width: 155px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 0;
    padding: 0 10px;
  }
}
</style>
