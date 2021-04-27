<template>
  <header>
    <nav class="nav">
      <router-link to="/" class="nav-left">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
      <router-link to="/about" class="nav-right">
        <img src="@/assets/cart.svg" alt="cart icon" />
      </router-link>
    </nav>
  </header>
  <router-view />
  <footer></footer>
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

.nav {
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 90%;
  background: rgba(102, 102, 102, 0.3);

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }

  &-left img {
    height: 60px;
  }

  &-right img {
    width: 30px;
  }
}

footer {
  height: 250px;
  background: black;
}
</style>
