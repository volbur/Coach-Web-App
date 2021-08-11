<template>
  <section>FILTER</section>
  <section>
    <button class="refresh-btn">Refresh</button>

    <router-link custom v-slot="{ navigate }" :to="{ name: 'register' }">
      <button @click="navigate" class="register-btn">Register as Coach</button>
    </router-link>
    <ul>
      LIST OF COACHES
    </ul>
  </section>
</template>