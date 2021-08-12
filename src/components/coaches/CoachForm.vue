<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="first-name">Firstname</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        v-model.trim="firstName"
      />
    </div>

    <div class="form-control">
      <label for="last-name">Lastname</label>
      <input
        type="text"
        id="last-name"
        name="last-name"
        v-model.trim="lastName"
      />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        v-model.trim="description"
      />
    </div>

    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        name="rate"
        min="1"
        max="100"
        v-model.number="rate"
      />
    </div>

    <div class="form-control">
      <h4>Areas of Expertise</h4>
      <div class="checkbox-option">
        <input
          value="frontend"
          type="checkbox"
          id="frontend"
          name="areas"
          v-model="areas"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div class="checkbox-option">
        <input
          value="backend"
          type="checkbox"
          id="backend"
          name="areas"
          v-model="areas"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div class="checkbox-option">
        <input
          value="career"
          type="checkbox"
          id="career"
          name="areas"
          v-model="areas"
        />
        <label for="career">Career Advisory</label>
      </div>
    </div>

    <BaseButton>Register</BaseButton>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>


<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-control > label {
  margin-bottom: 10px;
}

.checkbox-option input {
  margin-right: 10px;
}

input,
textarea {
  font-size: 24px;
  border: 1px solid grey;
}

input:focus,
textarea:focus {
  outline: none;
  background-color: rgb(201, 187, 187);
}
</style>