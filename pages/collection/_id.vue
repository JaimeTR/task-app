<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'ViewSingleNote',
  created() {
    this.getRouteParam();
  },
  methods: {
    getRouteParam(){
      console.log(this.$route.params.id);
    }
  }
}
</script>
