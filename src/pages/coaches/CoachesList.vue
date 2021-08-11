<template>
  <section>FILTER</section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton to="{ name: 'register' }" link
          >Register as Coach</BaseButton
        >
      </div>
      <ul class="list-coaches" v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :coach="coach"
          :key="coach.id"
        />
      </ul>
      <h3 v-else>No coaches found</h3>
    </BaseCard>
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
.controls {
  display: flex;
  justify-content: space-between;
}

.list-coaches {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-coaches {
  margin-top: 30px;
}
</style>