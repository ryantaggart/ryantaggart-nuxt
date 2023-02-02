<script setup lang="ts">
const { data } = await useAsyncData('work', () => queryContent('portfolio').find())

const normalizedPosts = computed(() => {
  if (!data.value) {
    return []
  }
  return useDataToPost(data.value)
})
</script>

<!--- Featured work block -->
<template>
  <div class="container mx-auto px-5">
    <h3 class="text-5xl font-serif font-bold my-8">Work</h3>
    <Divider size="large" />
    <div class="flex align-stretch gap-8 flex-wrap">
      <div class="flex flex-1" v-for="blogItem in normalizedPosts" :key="blogItem.slug">
        <PostsPreview :post="blogItem" location="portfolio" />
      </div>
    </div>
  </div>
</template>
