<template>
  <BaseCard>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        id="frontend"
        name="frontend"
        checked
        @change="setFilter"
      />
      <label for="frontend">Frontend</label>
    </span>

    <span class="filter-option">
      <input
        type="checkbox"
        id="backend"
        name="backend"
        checked
        @change="setFilter"
      />
      <label for="backend">Backend</label>
    </span>

    <span class="filter-option">
      <input
        type="checkbox"
        id="career"
        name="career"
        checked
        @change="setFilter"
      />
      <label for="career">Career</label>
    </span>
  </BaseCard>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const id = event.target.id;
      const checked = event.target.checked;

      const objNew = {
        ...this.filters,
        [id]: checked,
      };

      this.filters = objNew;
      this.$emit('change-filter', objNew);
    },
  },
};
</script>