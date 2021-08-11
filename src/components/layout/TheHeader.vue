<template>
  <header class="header">
    <nav>
      <h1>
        <router-link :to="{ name: 'coaches' }">Find a coach</router-link>
      </h1>
      <ul class="nav-btns">
        <li class="nav-btns__item">
          <router-link
            custom
            v-slot="{ navigate, isActive }"
            :to="{ name: 'coaches' }"
          >
            <button
              @click="navigate"
              :class="['nav-btn', { active: isActive }]"
            >
              All coaches
            </button>
          </router-link>
        </li>
        <li class="nav-btns__item">
          <router-link
            custom
            v-slot="{ navigate, isActive }"
            :to="{ name: 'requests' }"
          >
            <button
              @click="navigate"
              :class="['nav-btn', { active: isActive }]"
            >
              Requests
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 0 20px;
  background-color: #3d008d;
}

.header a {
  text-decoration: none;
  color: #fff;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-btns {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-btns__item {
  margin: 0 10px;
}

.nav-btn {
  padding: 10px 20px;
  color: #f391e3;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: transparent;
}

.nav-btn:active,
.nav-btn:hover,
.nav-btn.active {
  border-color: #f391e3;
}
</style>