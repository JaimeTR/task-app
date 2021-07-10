<template>
  <Button block :color="`bg-${color}-50`" :hover="`bg-${color}-100`" @click="$emit('click')">
    <div :class="[`bg-${color}-500`]" class="w-14 h-14 text-white rounded-xl flex items-center justify-center">
      <i class='bx bxs-tag bx-sm'></i>
    </div>
    <div class="ml-5">
      <h1 class="text-xl font-semibold text-gray-600">{{ title }}</h1>
      <p class="text-gray-600">--- tasks</p>
    </div>
  </Button>
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Collection',
  components: {
    Button
  },
  props: {
    title: { type: String, default: '' },
    color: { type: String, default: 'blue' },
  }
}
</script>
