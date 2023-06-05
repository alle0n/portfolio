<script setup lang="ts">
import wspIcon from '../../../assets/icons/wsp.svg'
import linkedinIcon from '../../../assets/icons/in.svg'
import githubIcon from '../../../assets/icons/github.svg'

const navBarLinks = [
  {
    href: '/',
    text: 'Experiencia'
  },
  {
    href: 'https://www.linkedin.com/in/jonatan-iparraguirre/',
    text: 'Servicios'
  },
  {
    href: 'https://www.linkedin.com/in/jonatan-iparraguirre/',
    text: 'Portafolio'
  }
]

const navBarIcons = [
  {
    href: 'https://www.linkedin.com/in/jonatan-iparraguirre/',
    icon: linkedinIcon
  },
  {
    href: '#',
    icon: githubIcon
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=%2B51934335134&text&type=phone_number&app_absent=0',
    icon: wspIcon,
    style: { width: '28px' },
    class: 'animate__animated animate__heartBeat animate__infinite'
  },
]
</script>

<template>
  <header class="ip-header">
    <nav>
      <ul>
        <template v-for="(link, index) in navBarLinks">
          <li>
            <a :href="link.href"> {{ link.text }} </a>
          </li>
          <!--  -->
          <li v-if="index !== navBarLinks.length - 1">|</li>
        </template>
      </ul>
    </nav>
    <!--  -->
    <nav>
      <ul>
        <template v-for="icon in navBarIcons">
          <li>
            <a :href="icon.href">
              <img :class="icon.class" :src="icon.icon" :alt="icon.icon" :style="icon.style" />
            </a>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.ip-header {
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: #0000001a;
  border-bottom: 1px solid #00000085;
  display: flex;
  nav {
    width: 60%;
    text-align: end;
    padding-right: 2.5rem;
    ul {
      list-style: none;
      display: inline-flex;
      margin: 0;
      padding: 0;
      height: 100%;
      align-items: center;
      li {
        padding-right: 1rem;
        a {
          font-weight: 700;
          text-decoration: none;
          color: #000;
          img {
            width: 30px;
          }
        }
      }
    }
    &:first-child {
      width: 40%;
      padding-left: 3rem;
      text-align: start;
    }
  }
}

@media (min-width: 330px) and (max-width: 760px) {
  .ip-header {
    nav {
      width: 100%;
      padding-right: 0;
      &:first-child {
        display: none;
      }
    }
  }
}
</style>
