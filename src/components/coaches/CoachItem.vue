<template>
  <li class="list-coach">
    <h2>{{ fullName }}</h2>
    <p>${{ coach.hourlyRate }}/hour</p>
    <div class="list-areas">
      <BaseBadge
        v-for="area in coach.areas"
        :key="area"
        :area="area"
      ></BaseBadge>
    </div>

    <ul class="actions">
      <li>
        <BaseButton mode="outline" link :to="coachContactLink"
          >Contact</BaseButton
        >
      </li>
      <li>
        <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.coach.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.coach.id;
    },
  },
};
</script>

<style scoped>
.list-areas {
  margin-bottom: 20px;
}

.list-coach {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
}

.list-coach:last-child {
  margin-bottom: 0;
}

.list-areas {
  display: flex;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;
}

.actions li {
  margin: 0 5px;
}
</style>