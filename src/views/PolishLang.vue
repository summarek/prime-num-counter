<template>
  <div class="polLang">
    <Main
      h1Text="KALKULATOR LICZB PIERWSZYCH
        I LICZB SUPER PIERWSZYCH"
      h2Text="Podaj zakres liczb."
      pHeader="w przypadku dużych liczb liczenie może może to chwilę potrwać"
      fromLabel="Od"
      toLabel="Do"
      btnText="Licz!"
      legendText="legenda:"
      legendPrimaryText="pierwsze: "
      legendSuperPrimaryText="super pierwsze: "
      outputInfo=" W tym zakresie jest 2137 liczb pierwszych
1200 liczb superpierwszych: "
    ></Main>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Main
  }
};
</script>
