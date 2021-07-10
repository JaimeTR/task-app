<template>
  <div class="flex flex-col">
    <label for="color" class="select-none">{{ label }}</label>
    <input
    v-model="input"
    :class="[{
      'w-full': block
    }]"
    class="focus:outline-none outline-none border-0 px-4 py-4 transition-all
    duration-300 bg-gray-50 rounded-lg focus:pl-6 mt-2" type="text"
    :placeholder="placeholder">
    <p class="mt-2 text-red-500 select-none">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: { type: String, default: null },
    label: { type: String, default: null },
    error: { type: String, default: null },
    value: { type: String, default: null },
    block: { type: Boolean, default: false },
  },
  data() {
    return {
      input: this.value
    }
  },
  watch: {
    input() {
      this.$emit('input', this.input)
    }
  }
}
</script>
