<template>
  <section>FILTER</section>
  <section>
    <button class="refresh-btn">Refresh</button>

    <router-link custom v-slot="{ navigate }" :to="{ name: 'register' }">
      <button @click="navigate" class="register-btn">Register as Coach</button>
    </router-link>

    <ul class="list-coaches" v-if="hasCoaches">
      <CoachItem
        v-for="coach in filteredCoaches"
        :coach="coach"
        :key="coach.id"
      />
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
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

<style scoped>
.list-coaches {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-coaches {
  margin-top: 30px;
}
</style>