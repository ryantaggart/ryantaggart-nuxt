<script setup lang="ts">
interface Props {
  size?: 'normal' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'normal',
})

const dividerClasses = computed(() => {
  switch (props.size) {
    case 'large':
      return 'bg-blue-dark h-4 rounded-lg my-8 w-32 group-hover:w-64 transition-all'
    default:
      return 'bg-yellow h-2 rounded my-4 w-16 group-hover:w-32 transition-all'
  }
})
</script>

<template>
  <div :class="dividerClasses"></div>
</template>
