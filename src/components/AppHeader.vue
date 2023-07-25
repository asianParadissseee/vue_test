<template>
  <header class="header">
    <div class="logo">App</div>

    <nav>
      <ul class="header__nav">
        <li
          v-for="link in headerNav"
          @click="$router.push(`${link.path}`)"
          :key="link.id"
        >
          {{ link.name }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavLink {
  id: number;
  name: string;
  path: string;
}

export default defineComponent({
  data() {
    return {
      headerNav: [
        {
          id: 1,
          name: "Home",
          path: "/",
        },
        {
          id: 1,
          name: "Cards",
          path: "/cards",
        },
      ] as NavLink[],
    };
  },
});
</script>

<style scoped>
.header {
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.logo {
  font-size: 30px;
  font-weight: 900;
  color: #fff;
}

.header__nav {
  display: flex;
  gap: 20px;
}

.header__nav li {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
</style>
