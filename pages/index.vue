<script setup lang="ts">
useHead({
  title: 'Ryan Taggart - full stack developer',
})

const { data: featuredItems } = await useAsyncData('home-portfolio', () =>
  queryContent('portfolio').limit(2).find()
)
const { data: blogItems } = await useAsyncData('home-blog', () =>
  queryContent('blog').limit(2).find()
)

const normalizedFeaturedItems = computed(() => {
  if (!featuredItems.value) {
    return []
  }
  return useDataToPost(featuredItems.value)
})

const normalizedBlogItems = computed(() => {
  if (!blogItems.value) {
    return []
  }
  return useDataToPost(blogItems.value)
})
</script>

<template>
  <section
    class="relative w-full mx-auto flex-none flex bg-blue-dark sm:pt-24 sm:pb-48 pt-4 pb-24 px-8 overflow-hidden border-b-1 border-white"
  >
    <div class="container mx-auto px-5 z-0">
      <DinoBackground />

      <h1
        class="text-3xl sm:text-4xl lg:text-5xl text-white font-serif font-bold leading-relaxed z-10 text-center relative"
      >
        Hello, I'm Ryan, a
        <span class="text-yellow">Full Stack Developer</span> at
        <a class="text-stova" href="https://stova.io" target="_blank"> STOVA </a>
        .
      </h1>
    </div>
  </section>

  <!--- Featured work block -->
  <section id="featured" class="bg-blue-light pb-16 z-10 relative pt-1">
    <div class="container mx-auto px-5 z-0 max-w-5xl">
      <div class="flex align-stretch gap-8 -my-16">
        <div
          class="flex flex-1"
          v-for="featuredItem in normalizedFeaturedItems"
          :key="featuredItem.slug"
        >
          <PostsPreview :post="featuredItem" />
        </div>
      </div>
    </div>
  </section>

  <section id="articles">
    <div class="waves-container">
      <div class="item-1"></div>
      <div class="item-2"></div>
      <div class="item-3"></div>
    </div>

    <div class="bg-purple pb-16 pt-10 text-white">
      <div class="container mx-auto px-5 z-0">
        <h3 class="md:text-4xl text-2xl font-serif font-bold mb-12">
          Recent Writings & Code Snippets
        </h3>
        <div class="flex align-stretch gap-8">
          <div
            class="flex flex-1"
            v-for="blogItem in normalizedBlogItems"
            :key="blogItem.slug"
          >
            <PostsPreview :post="blogItem" :displayStyle="'list'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.text-stova {
  color: #cf009e;
  position: relative;
  z-index: 10;
  text-shadow: 2px 2px rgba(50, 52, 72), 2px -2px rgba(50, 52, 72),
    -2px 2px rgba(50, 52, 72), -2px -2px rgba(50, 52, 72);
  background-image: -webkit-linear-gradient(45deg, #cf009e, #781260);
  background-size: 100% 4px;
  background-position: 0 93%;
  background-repeat: no-repeat;
  transition-duration: 0.2s;
}
.text-stova:hover {
  background-position: 0 100%;
}

.waves-container {
  @apply relative;
  @apply bg-blue-light;
  @apply w-full;
  @apply h-12;
  @apply md:h-36;
}

.item {
  @apply absolute;
  @apply inset-0;
  background: url(/assets/img/wave.svg) repeat-x;
  height: auto;
  transform: translate3d(0, 0, 0);
  min-width: 100%;
}

.item-1 {
  @apply item;
  animation: wave 25s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite alternate;
}
.item-2 {
  @apply item;
  animation: wave 17s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite alternate;
  @apply opacity-50;
}
.item-3 {
  @apply item;
  animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) 0.125s infinite alternate;
  @apply opacity-30;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>
