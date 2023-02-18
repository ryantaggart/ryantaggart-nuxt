<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div v-if="!doc">Post not found</div>

      <div class="relative bg-blue-dark overflow-hidden">
        <div
          :style="{
            backgroundImage: `url('${doc.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }"
          class="absolute inset-0 blur w-full h-full z-0"
        ></div>
        <div class="container mx-auto px-5">
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-center text-white py-16 font-serif z-10 relative"
          >
            {{ doc.title }}
          </h1>
        </div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div
          class="text-4xl p-6 pl-8 border-l-8 border-yellow bg-blue-light mt-12 mb-0 leading-2 font-bold font-serif text-blue-dark"
        >
          {{ doc.excerpt }}
        </div>

        <ContentRenderer class="markdown pb-12" :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>

<style lang="scss">
.markdown {
  @apply text-lg leading-relaxed px-5;
}

.markdown p,
.markdown ul,
.markdown ol,
.markdown blockquote {
  @apply my-6;
}

.markdown h2 {
  @apply text-3xl mt-12 mb-4 leading-snug font-sans;
}

.markdown h3 {
  @apply text-2xl mt-8 mb-4 leading-snug font-sans;
}

.markdown p {
  @apply font-serif;
}

.markdown ol {
  @apply list-decimal ml-12;
}
.markdown ul {
  @apply list-disc ml-12;
}
.markdown ol li,
.markdown ul li {
  @apply pl-4 mb-2;
}

.markdown a {
  @apply underline decoration-2	pb-1 px-1;
}
</style>
