<template>
  <span class="badge" :class="area">
    {{ area }}
  </span>
</template>

<script>
export default {
  props: {
    area: {
      type: String,
      requred: false,
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 10px 15px;
  margin: 0 5px;
  border: 1px solid #000;
  border-radius: 20px;
  color: #fff;
}

.frontend {
  background-color: blue;
}
.backend {
  background-color: red;
}
.career {
  background-color: green;
}
</style>