<template>
  <section>FILTER</section>
  <section>
    <button class="refresh-btn">Refresh</button>

    <router-link custom v-slot="{ navigate }" :to="{ name: 'register' }">
      <button @click="navigate" class="register-btn">Register as Coach</button>
    </router-link>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
export default {
  computed: {
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
};
</script>