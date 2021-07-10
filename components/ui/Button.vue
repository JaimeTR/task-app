<template>
  <button :class="[`${color} hover:${hover}`, {
    'w-full': block
    }]" class="p-4 rounded-xl items-center flex transition-all duration-300 select-none" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: { type: String, default: 'bg-blue-50' },
    hover: { type: String, default: 'bg-blue-100' },
    block: { type: Boolean, default: false },
  }
}
</script>
