<template>
  <header class="flex-container flex-space-between">
    <div class="title">
      <!-- logo -->
      <span>Logo</span>
    </div>
    <nav>
      <ul class="flex-container flex-align-right">
        <li>
          <router-link to="/">Chat</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  padding: 1em 1em;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
}
</style>
