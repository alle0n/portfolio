<script setup lang="ts">
import { useExperiencesCxt } from '@/core/stores/contentfull'
import { cxtGetEntry } from '@/core/utils/contentfull'
import { computed, inject } from 'vue'

const $cxt: any = inject('$cxt')

const $experiences: any = useExperiencesCxt()

cxtGetEntry($cxt, '7BHp5vrSk4aj0Bcoaz3i2n')
  .then(async (entry: any) => {
    const {
      fields: { experiences: data }
    } = entry
    const experiences = await data.map(async (item: any) => {
      const stack = await Promise.all(
        item.fields.stack?.map(async (stack: any) => await cxtGetEntry($cxt, stack.sys.id))
      ).then((c) => c.map((i) => i.fields.technology))

      return {
        company: item.fields.company,
        description: item.fields.description,
        label: item.fields.label,
        stack: stack
      }
    })

    Promise.all(experiences).then((c) => $experiences.fill(c))
  })
  .catch((err: any) => console.log(err))
</script>

<template>
  <div class="ip-experiences">
    <div class="ip-experiences__container">
      <slot v-for="(experience, index) in $experiences.experiences">
        <div class="ip-experiences__experience animate__animated animate__fadeInUp animate__slow" :style="{'animation-duration' : '0.'+(index*2)+'s'}">
        <img class="ip-experiences__experience-logo" src="" alt="" />
        <h2 class="ip-experiences__experience-company">
          {{ experience.company }}
          <template v-if="experience.label">
            | <span>{{ experience.label }}</span>
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
      </slot>
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
