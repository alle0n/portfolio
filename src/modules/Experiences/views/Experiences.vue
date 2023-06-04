<script setup lang="ts">
const experiences = [
  {
    company: 'DEVOS INC ',
    date: 'marzo 2021 - actualidad',
    description:
      'Actualmente me desempeño como desarrollador asignado en farmacias peruanas, realizando mantenimiento y desarrollo de aplicaciones construidas con angular y vtex.io, mis principales funciones son el desarrollo UX/UI para las pantallas creadas por el área de diseño',
    stack: [
      'angular',
      'react',
      'typescript',
      'sass',
      'html',
      'node.js',
      'vtex.io',
      'figma',
      'miro',
      'devops'
    ]
  },
  {
    company: 'CANVIA',
    date: 'enero 2020 - marzo 2021',
    description:
      'Desarrollador en el área “Digital Service”, mis funciones fueron la implementación de arquitecturas frontend para las aplicaciones en angular y react, despliegue continuo en AWS e integración con servicios web creados con .net core y nodejs',
    stack: [
      'angular',
      'react',
      'typescript',
      'sass',
      'html',
      'node.js',
      'vtex.io',
      'GCP',
      'figma',
      'miro',
      'devops'
    ]
  },
  {
    company: 'CSTI CORP',
    date: '',
    description:
      'Desarrollador frontend en el área de transformación digital, creación e implementación de la arquitectura para las aplicaciones en angular, aplicación de filtros de seguridad, implementación de motores reactivos para la aplicación, consumiendo microservicios desarrollados en .net core',
    stack: [
      'angular',
      'typescript',
      'sass',
      'html',
      '.net core,',
      'figma',
      'miro',
      'devops',
      'docker'
    ]
  },
  {
    company: 'ORBITA',
    date: '',
    description:
      'Creación de arquitectura frontend y desarrollo SPA del aplicativo Mi-Sentinel. Consumiendo servicios REST y elaborando el proceso de carrito de compras, semáforo de riesgo financiero y otros procesos de negocio',
    stack: [
      'angular',
      'ionic',
      'react',
      'sass',
      'html',
      '.net core,',
      'node.js',
      'mysql',
      'zeplin',
      'jira',
      'swagger',
      'IIS'
    ]
  },
  {
    company: 'NABIS',
    date: '',
    description:
      'Desarrollador fullstack desarrollando arquitecturas para las aplicaciones requeridas por la empresa, durante mi participación he realizado documentación, planeamiento y analisis de necesidades. También he desarrollado prototipos de desarrollo mobile',
    stack: [
      'angular',
      'react',
      'vuejs',
      'typescript',
      'html',
      'sass',
      'php',
      'node.js',
      'mysql',
      'pgsql',
      'GCP',
      'AWS',
      'serverless',
      'docker'
    ]
  }
]
</script>

<template>
  <div class="ip-experiences">
    <div class="ip-experiences__container">
      <div class="ip-experiences__experience" v-for="experience in experiences">
        <img class="ip-experiences__experience-logo" src="" alt="" />
        <h2 class="ip-experiences__experience-company">
          {{ experience.company }}
          <template v-if="experience.date">
            | <span>{{ experience.date }}</span>
          </template>
        </h2>
        <p class="ip-experiences__experience-description">
          {{ experience.description }}
        </p>

        <div class="ip-experiences__experience-stack">
          <p>Stack Tecnológico:</p>
          <div>
            <span class="ip-experiences__experience-item" v-for="stack in experience.stack">
              {{ stack }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ip-experiences {
  position: relative;
  z-index: 99;
  padding: 0 4rem 0;
  &__experience {
    position: relative;
    &-logo {
    }
    &-company {
      font-size: 1.2rem;
      span {
        font-weight: 800;
        font-size: 0.9rem;
      }
    }
    &-stack,
    &-description {
      padding: 0.6rem 0;
      font-weight: 600;
      font-size: 0.8rem;
      color: #000;
      line-height: 1.3;
      span {
        font-weight: 800;
      }
    }
    &-stack {
      display: flex;
      align-items: center;
      p {
        width: 127px;
        font-weight: 900;
        font-size: 0.9rem;
      }
      div {
        display: flex;
        align-items: center;
        flex-flow: wrap;
        width: calc(100% - 130px);
      }
    }
    &-item {
      background-color: #30ff30;
      padding: 0.1rem 0.4rem;
      border-radius: 4px;
      font-size: 0.72rem;
      margin: 0.2rem;
    }
    &:before {
      content: '';
      width: 3px;
      height: calc(100% - 15px);
      background: #25ff81;
      position: absolute;
      left: -24px;
      top: 39px;
    }
    &:after {
      content: '';
      width: 15px;
      height: 15px;
      background: #25ff81;
      position: absolute;
      left: -30px;
      top: 25px;
      border-radius: 20px;
      border: 1px solid #4f4f4f;
    }
    &:nth-child(1) {
      .ip-experiences__experience-company {
        font-weight: 800;
        font-size: 1.5rem;
      }
    }
    &:first-child {
      &:after {
        border: 1px solid #25ff81;
        background: #3f3f3f;
        box-shadow: 0px 0px 0px 2px #3f3f3f;
      }
    }
    &:last-child {
      &::before {
        background: none;
      }
    }
  }
}
</style>
