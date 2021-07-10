<template>
  <transition name="modal">
    <div
      v-if="active"
      class="fixed top-0 left-0 h-screen w-full z-50 transition-all duration-100 bg-gray-400 bg-opacity-40">
      <div class="h-full flex w-full items-center justify-center">
          <div class="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-100" :style="`min-width: ${minWidth}`">
            <div class="p-4 content">
              <slot name="content" />
            </div>
            <div class="actions bg-gray-50 p-4 flex gap-2 justify-end">
              <slot name="actions" />
            </div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    active: { type: Boolean, default: false },
    minWidth: { type: String, default: null },
  },
};
</script>

<style>
.modal-enter {
    @apply opacity-0;
}

.modal-leave-active {
    @apply opacity-0;
}
</style>
