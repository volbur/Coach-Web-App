<template>
  <section>
    <p class="email">{{ email }}</p>
    <p class="message">{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
section {
  padding: 10px;
  border: 1px solid #000;
}
.email {
  color: blue;
}
</style>style