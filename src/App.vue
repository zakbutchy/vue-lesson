<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="View01">View01</router-link></li>
        <li><router-link to="method-test">Method</router-link></li>
        <li><router-link to="v03">View03</router-link></li>
        <li><router-link to="slot-test">Slot</router-link></li>
        <li><router-link to="computed-test">Computed</router-link></li>
        <li><router-link to="v-for-test">v-for</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: #c0e0d2;

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  li {
    list-style: none;
    padding: 10px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007844;
    }
  }
}
</style>
