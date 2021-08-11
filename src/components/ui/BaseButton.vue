<template>
  <router-link v-if="link" custom v-slot="{ navigate }" :to="to">
    <button :class="mode" @click="navigate">
      <slot></slot>
    </button>
  </router-link>
  <button v-else :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      requred: false,
      default: null,
    },
    link: {
      type: Boolean,
      requred: false,
      default: false,
    },
    to: {
      type: String,
      requred: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>