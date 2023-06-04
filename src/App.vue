<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IpFooter from './components/globals/Footer.vue'
import IpHeader from './components/globals/Header.vue'

import NabisVector from './assets/vector.svg'
</script>

<template>
  <div class="ip-container">
    <IpHeader />

    <div class="ip-container__developer">
      <div class="ip-container__developer-info">
        <img
          alt="Jonatan Iparraguirre"
          class="ip-container__logo"
          src="@/assets/logo.svg"
          width="275"
        />
        <div class="ip-container__user">
          <h1>
            <span>Jonatan Iparraguirre</span>
            Full Stack Developer
          </h1>
          <a href="https://www.linkedin.com/in/jonatan-iparraguirre/" target="_blank">
            <img src="@/assets/icons/linkdin.svg" alt="Jonatan Iparraguirre - Linkedin" />
          </a>
        </div>
        <!-- CONTAINER_DETAIL -->
        <div class="ip-container__detail">
          <div class="ip-container__detail-skills">
            <ul>
              <li><span>Frontend</span></li>
              <li><span>Backend</span></li>
              <li><span>Devops</span></li>
            </ul>
          </div>

          <p class="ip-container__about">
            Hola, mi nombre es <strong>Jonatan Iparraguirre</strong>. Soy desarrollador de software
            con mas de 10 años de experiencia; Durante esos años de trabajo he participado en
            grandes empresas desarrollando plataformas multi-dispositivo, satisfaciendo las
            necesidades de multiples usuarios.
          </p>
          <!-- <IpExperiences /> -->

          <a class="ip-container__contact" href="https://api.whatsapp.com/send/?phone=%2B51934335134&text&type=phone_number&app_absent=0"> Contáctame </a>
        </div>
      </div>

      <span class="ip-container__developer-buildwith"
        >Build with | <span>Vue 3 Composition</span></span
      >
    </div>
    <div class="ip-container__main">
      <RouterView />
    </div>
    <!--  -->
    <div
      class="ip-container__vector"
      :style="{ backgroundImage: 'url(' + NabisVector + ')' }"
    ></div>
  </div>
  <!-- <IpFooter /> -->
</template>

<style lang="scss" scoped>
.ip-container {
  display: flex;
  &__developer {
    width: 40vw;
    height: 100vh;
    background: #25ff81;
    padding: 7rem 3rem;
    &-info {
      position: relative;
      z-index: 99;
    }
    &-buildwith {
      position: absolute;
      bottom: 30px;
      font-weight: 700;
      font-size: 0.8rem;
      span {
        font-weight: 900;
      }
    }
  }
  &__user {
    padding: 0.3rem 0;
    border-top: 2px solid;
    border-bottom: 2px solid;
    margin: 0.4rem 0;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    a {
      display: flex;
    }
    img {
      width: 65px;
    }
    h1 {
      font-size: 0.96rem;
      font-weight: 900;
    }
    span {
      display: none;
    }
  }
  &__detail {
    &-skills {
      height: 34px;
      display: flex;
      align-items: center;
      ul {
        padding: 0;
        li {
          display: inline;
          padding: 5px;
          &:nth-child(1) {
            padding-left: 0;
          }
          span {
            font-size: 0.655em;
            font-weight: 700;
            background: #30ff30;
            padding: 0.2rem;
            border: 2px solid;
            box-shadow: 3px -1px 0px 0px black;
          }
        }
      }
    }
  }

  &__vector {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
  }
  &__main {
    width: 60vw;
    height: 100vh;
    padding: 7rem 3rem 0;
    overflow-y: scroll;
  }
  &__contact {
    background: #000;
    box-shadow: 6px 0px 0px 0px #037734;
    border-top: 4px solid #037734;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: all 0.3s;
    &:hover {
      background: #25ff81;
      box-shadow: 6px 0px 0px 0px #000;
      border-top: 4px solid #000;
      color: #000;
      font-weight: 900;
    }
  }
  &__about {
    padding: 0.6rem 0;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.96rem;
    color: #000;
    strong {
      font-weight: 700;
    }
  }
}

@media (max-width: 760px) {
  .ip-container__developer {
    width: 100vw;
  }
  .ip-container__main {
    display: none;
  }
}
</style>
