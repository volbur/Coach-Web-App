<template>
  <BaseCard>
    <h2>Requests Received</h2>
    <div v-if="hasRequests">
      <RequestItem
        v-for="requests in receivedRequests"
        :key="requests.id"
        :text="requests.message"
        :email="requests.userEmail"
      />
    </div>
    <h3 v-else>You haven't received any requests yet!</h3>
  </BaseCard>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      text: 'text-message',
      email: 'email',
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped>
h2,
h3 {
  text-align: center;
}
</style>