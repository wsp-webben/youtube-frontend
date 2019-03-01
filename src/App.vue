<template>
  <div id="app">
    <router-view/>
    <!-- <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/watch">Watch</router-link>
    </nav> -->
  </div>
</template>

<style lang="scss">
:root {
  --main-color: #42b983;
  --secondary-color: #2c3e50;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--secondary-color-color);
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: var(--main-color);
    }
  }
}
</style>
