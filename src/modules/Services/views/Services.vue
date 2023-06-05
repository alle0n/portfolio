<script setup lang="ts">

const services = [
  {
    service: 'Desarrollo Web',
    description: '',
    image: '',
  },
  {
    service: 'Tienda Virtual',
    description: '',
    image: '',
  },
  {
    service: 'SEO',
    description: '',
    image: '/assets/icons/linkdin.svg',
  },
  {
    service: 'Mantenimiendo de Servidores',
    description: '',
    image: '',
  },
  {
    service: 'Aplicaciones Moviles',
    description: '',
    image: '',
  },
]
</script>

<template>
  <div class="ip-services">
    <div class="ip-services__service" v-for="service in services">
      <p>{{ service.service }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ip-services {
  position: relative;
  z-index: 99;
  padding: 0 4rem 0;
}
</style>
