<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Polish</router-link>|
      <router-link to="/about">English</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
</style>
