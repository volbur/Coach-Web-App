<template>
  <section>
    <CoachFilter @change-filter="setFilters" />
  </section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton :to="{ name: 'register' }" link
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
      });
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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