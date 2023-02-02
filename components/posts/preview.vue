<script setup lang="ts">
import { Post } from '~~/@types/Post'

interface Props {
  post: Post
  displayStyle?: 'card' | 'list'
  location?: 'blog' | 'portfolio'
}

const props = withDefaults(defineProps<Props>(), {
  displayStyle: 'card',
  location: 'blog',
})

const wrapperClasses = computed(() => {
  switch (props.displayStyle) {
    case 'card':
      return 'flex flex-col rounded-lg overflow-hidden bg-white shadow cursor-pointer mb-12'

    case 'list':
      return 'flex flex-col cursor-pointer'

    default:
      return 'flex flex-col rounded-lg overflow-hidden bg-white shadow cursor-pointer mb-12'
  }
})

const innerContentClasses = computed(() => {
  switch (props.displayStyle) {
    case 'card':
      return 'p-4 sm:p-8 flex-1'

    case 'list':
      return 'flex-1'

    default:
      return 'flex-1'
  }
})

const showImage = computed(() => {
  return props.post.coverImage?.length && props.displayStyle === 'card'
})
</script>

<template>
  <NuxtLink :to="`/${location}/${post.slug}`" :class="wrapperClasses">
    <div v-if="showImage">
      <img :title="post.title" :src="post.coverImage" class="w-full" />
    </div>
    <div :class="innerContentClasses">
      <h3 class="text-xl sm:text-3xl mb-0 leading-snug">{{ post.title }}</h3>

      <p
        v-if="post.categories?.length"
        class="text-sm my-2 opacity-70 uppercase tracking-widest"
      >
        {{ post.categories }}
      </p>

      <Divider />

      <p class="text-sm sm:text-base leading-relaxed font-serif font-light">
        {{ post.excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>
