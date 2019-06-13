<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Polish</router-link>
      <router-link to="/EnglishLang">English</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: rgba(36, 37, 51, 1);
  color: white;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
