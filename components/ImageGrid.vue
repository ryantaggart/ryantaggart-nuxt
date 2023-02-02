<script setup lang="ts">
export interface ImageItem {
  src: string
  alt?: string
}

const props = defineProps<{
  images: ImageItem[]
}>()

const itemClasses = computed(() => {
  const returnArr = []

  if (props.images.length < 4) {
    returnArr.push(`basis-1/${props.images.length}`)
  } else {
    returnArr.push('basis-1/4 lg:basis-1/5 ')
  }

  return returnArr
})
</script>

<template>
  <div class="flex flex-wrap gap-12 justify-center items-center">
    <div v-for="image in images" :key="image.src" :class="itemClasses">
      <img :src="image.src" :alt="image.alt ?? ''" class="w-full" />
    </div>
  </div>
</template>
