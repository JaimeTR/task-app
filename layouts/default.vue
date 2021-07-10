<template>
  <div>
    <nav class="bg-white flex items-center justify-center select-none">
      <p class="h-full border-b-2 border-blue-500 p-5 hover:border-blue-300 cursor-pointer transition-all duration-300
      font-semibold text-gray-600">Todo App</p>
    </nav>
    <main class="">
        <Nuxt class="max-w-screen-md mx-auto container p-4" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
