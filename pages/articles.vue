<script setup lang="ts">
const { data } = await useAsyncData('articles', () => queryContent('blog').find())

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
    <h3 className="text-5xl font-serif font-bold my-8">Articles</h3>
    <Divider size="large" />

    <PostsPreview
      v-for="blogItem in normalizedPosts"
      :key="blogItem.slug"
      :post="blogItem"
      :displayStyle="'list'"
    />
  </div>
</template>
