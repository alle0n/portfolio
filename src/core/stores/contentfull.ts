import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useExperiencesCxt = defineStore('experiences', {

  state: () => {
    return {
      experiences: []
    }
  },
  actions: {
    fill(experiences: any) {
      this.experiences = experiences
    }
  }
})
