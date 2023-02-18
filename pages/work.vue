<script setup lang="ts">
const { data } = await useAsyncData('work', () => queryContent('portfolio').find())

const normalizedPosts = computed(() => {
  if (!data.value) {
    return []
  }

  return useDataToPost(data.value).sort((rowA, rowB) => {
    return new Date(rowB.date).getTime() - new Date(rowA.date).getTime()
  })
})
</script>

<!--- Featured work block -->
<template>
  <div class="container mx-auto px-5">
    <h3 class="text-5xl font-serif font-bold my-8">Work</h3>
    <Divider size="large" />

    <div class="flex align-stretch gap-8 flex-wrap">
      <div
        class="flex lg:flex-1 basis:full"
        v-for="blogItem in normalizedPosts"
        :key="blogItem.slug"
      >
        <PostsPreview :post="blogItem" location="portfolio" />
      </div>
    </div>
  </div>
</template>
