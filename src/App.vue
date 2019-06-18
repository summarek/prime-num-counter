<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Polish</router-link>
      <router-link to="/EnglishLang">English</router-link>
    </div>
    <transition
      name="router-anim"
      mode="out-in"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
    >
      <router-view />
    </transition>
    <!-- <a href="https://summarek.github.io/" target="blank">
      <div class="creator">
        <h3>By summarek</h3>
        <p>Click to check my portfolio.</p>
      </div>
    </a>-->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css");
@import url("https://fonts.googleapis.com/css?family=B612+Mono&display=swap");
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
  font-size: 16px;
  a {
    text-decoration: none;
    color: white;
  }
}
#nav {
  text-align: right;
  a {
    margin: 0px 20px 0px 5px;
  }
}
</style>
