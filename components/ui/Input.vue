<template>
  <div class="flex">
    <input
    :class="[{
      'w-full': block
    }]"
    class="focus:outline-none outline-none border-0 px-4 py-4 transition-all
    duration-300 bg-gray-50 rounded-lg focus:pl-6"
    type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: { type: String, default: null },
    block: { type: Boolean, default: false },
  }
}
</script>
