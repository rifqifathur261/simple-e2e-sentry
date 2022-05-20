<template>
  <div class="home text-center mt-12">
    <v-btn
      class="white--text me-2"
      color="green"
      @click="$router.push('/login')"
      >Back to login</v-btn
    >
    <v-btn color="error" @click="throwError('Sentry Error ey')"
      >Throw error ey!</v-btn
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    throwError(err) {
      throw new Error(err);
    },
  },
  mounted() {
    this.throwError("error mount");
  },
};
</script>
