<template>
  <li class="list-coach">
    <h2>{{ fullName }}</h2>
    <p>${{ coach.hourlyRate }}/hour</p>
    <ul class="list-areas">
      <li v-for="area in coach.areas" :key="area">
        <span>{{ area }}</span>
      </li>
    </ul>

    <div class="actions">
      <router-link custom v-slot="{ navigate }" :to="coachContactLink">
        <button @click="navigate">Contact</button>
      </router-link>

      <router-link custom v-slot="{ navigate }" :to="coachDetailsLink">
        <button @click="navigate">View Details</button>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    coach: {
      type: Object,
      requred: false,
    },
  },
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
  margin: 0;
  padding: 0;
  list-style: none;
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
</style>