<template>
  <div class="flex items-center justify-center h-screen">
    <button class="bg-red-200 hover:bg-red-300 p-4" @click="createRequest()">Request</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'default',
  methods: {
    async createRequest(){
      try {
        await this.$axios.$get('task');
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
