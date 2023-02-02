<script setup lang="ts">
import { Ref } from 'vue'
import { NavigationItem } from '~~/@types/NavigationItems'

const navigationItems: Ref<NavigationItem[]> = ref([
  { href: '/work/', label: 'Work', isExternal: false },
  { href: '/articles/', label: 'Articles', isExternal: false },
  { href: '/about-me/', label: 'About Me', isExternal: false },
  { href: 'https://github.com/ryantaggart', label: 'Github', isExternal: true },
])
</script>

<template>
  <nav
    id="mainNav"
    class="p-4 sticky top-0 z-40 w-full mx-auto flex-none flex bg-blue-dark px-8 py-0 justify-between"
  >
    <NuxtLink href="/">
      <div class="flex flex-none">
        <h1
          class="font-serif font-bold text-xl align-middle text-yellow leading-normal cursor-pointer py-4 flex"
        >
          <span class="inline-block h-9 mr-4">
            <img src="~/assets/img/dino.svg" height="36" width="36" />
          </span>
          <span class="inline-block">Ryan Taggart</span>
        </h1>
      </div>
    </NuxtLink>

    <ul class="flex justify-between order-last align-stretch">
      <li v-for="navItem in navigationItems" :key="navItem.href" class="flex">
        <NuxtLink
          :to="navItem.href"
          :target="navItem.isExternal ? '_blank' : ''"
          class="px-4 py-4 mx-2 text-white font-serif font-bold text-xl cursor-pointer border-b-4 border-yellow border-opacity-0 hover:border-opacity-100 transition"
          :class="{
            'border-opacity-100': $route.path === navItem.href,
          }"
        >
          {{ navItem.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
