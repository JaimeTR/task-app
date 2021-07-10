<template>
  <div>
    <label for="color" class="select-none">Color</label>
    <div class="flex-grow flex gap-2 mt-2">
      <div v-for="(color, index) in colors" :key="index" class="w-10 h-10 cursor-pointer transition-all duration-300
      rounded-xl flex items-center justify-center text-white"
      :class="`bg-${color}-400 hover:bg-${color}-500`" @click="selectColor(color)">
        <i v-if="selected === color" class='bx bx-check bx-sm'></i>
      </div>
    </div>
    <p class="mt-2 text-red-500 select-none">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'ColorSelect',
  props: {
    value: { type: String, default: null },
    error: { type: String, default: null }
  },
  data() {
    return {
      selected: '',
      colors: ['blue', 'red', 'yellow', 'indigo', 'pink', 'purple']
    }
  },
  created() {
    this.selected = this.value;
  },
  methods: {
    selectColor(color) {
      this.selected === color ? this.selected = '' : this.selected = color;
      this.$emit('input', this.selected);
    }
  },
}
</script>
