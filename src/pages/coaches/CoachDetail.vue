<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <p>${{ rate }}/hour</p>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <p>Interested? Reach out now!</p>
      <BaseButton :to="contactLink" link>Contact</BaseButton>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :area="area" />
      <p>
        {{ description }}
      </p>
    </BaseCard>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>