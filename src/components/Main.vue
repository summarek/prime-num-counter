<template>
  <div class="wrapper">
    <header>
      <h1>
        KALKULATOR LICZB PIERWSZYCH
        I LICZB SUPER PIERWSZYCH
      </h1>
    </header>
    <section class="info"></section>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 20px;
    text-align: center;
  }
}
</style>
