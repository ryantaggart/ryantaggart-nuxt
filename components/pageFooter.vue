<script setup lang="ts">
import { Ref } from 'vue'
import { NavigationItem } from '~~/@types/NavigationItems'

const socialLinks: Ref<NavigationItem[]> = ref([
  {
    isExternal: true,
    label: 'Twitter',
    href: 'https://twitter.com/ryanoceros',
  },
  {
    isExternal: true,
    label: 'Mastodon',
    href: 'https://mastodon.social/@ryantaggart',
    rel: 'me',
  },
  {
    isExternal: true,
    label: 'Dribble',
    href: 'http://www.dribbble.com/ryantaggart',
  },
])

const quickLinks: Ref<NavigationItem[]> = ref([
  { href: '/work/', label: 'Work', isExternal: false },
  { href: '/articles/', label: 'Articles', isExternal: false },
  { href: '/about-me/', label: 'About Me', isExternal: false },
  { href: 'https://github.com/ryantaggart', label: 'Github', isExternal: true },
])
</script>

<template>
  <footer class="py-8 z-40 w-full mx-auto bg-blue-dark px-8 edge--top">
    <div class="container mx-auto px-5 z-0">
      <div class="flex justify-between">
        <div>
          <h3
            class="text-3xl font-bold tracking-tighter leading-tight md:leading-none text-yellow pb-4 font-serif relative"
          >
            Quick links
          </h3>
          <Divider />
          <ul class="mt-4">
            <li v-for="link in quickLinks" key="link.href">
              <NuxtLink
                :to="link.href"
                :target="link.isExternal ? '_blank' : ''"
                :rel="link.rel"
                class="text-white text-xl py-2 block"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-3xl font-bold tracking-tighter leading-tight md:leading-none text-yellow pb-4 font-serif relative"
          >
            Contact me
          </h3>
          <Divider />
          <ul class="mt-4">
            <li v-for="link in socialLinks" key="link.href">
              <NuxtLink
                :to="link.href"
                :target="link.isExternal ? '_blank' : ''"
                :rel="link.rel"
                class="text-white text-xl py-2 block"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
