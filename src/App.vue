<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<style lang="stylus">
#app {
  font-family: 'hwyt', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1080px;
  height: 1920px;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
