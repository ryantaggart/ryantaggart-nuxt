<script setup lang="ts">
import { Ref } from 'vue'

interface DinoImage {
  index: number
  image: string
  style: {
    left: string
    animationDelay: string
    animationDuration: string
  }
}

const dinoCount: Ref<number> = ref(7)

const dinoImages: Ref<DinoImage[]> = computed(() => {
  const returnArr: DinoImage[] = []

  for (let i = 1; i <= dinoCount.value; i++) {
    const left = (i - 1) * 14.285714286 - (i % 2 ? -2 : +5)
    const animationDuration = (i % 2 ? i * 1.1 : i * 2.8) + 10
    const animationDelay = i % 2 ? (i - 1) * 0.9 : i + 1.3 * 0.1

    returnArr.push({
      index: i,
      image: `dino${i}`,
      style: {
        left: left + '%',
        animationDelay: animationDelay + 's',
        animationDuration: animationDuration + 's',
      },
    })
  }
  return returnArr
})
</script>

<template>
  <template v-if="dinoImages.length">
    <div class="introImages">
      <img
        v-for="dino in dinoImages"
        :key="dino.index"
        :src="`/img/${dino.image}.svg`"
        :style="dino.style"
        class="absolute w-80"
      />
    </div>
  </template>
</template>

<style lang="scss">
.introImages img {
  opacity: 0;
  animation-name: fadeIn;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    opacity: 1;
    top: 110%;
  }
}
</style>
