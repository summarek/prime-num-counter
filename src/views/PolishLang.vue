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
      outputInfo1=" W tym zakresie jest "
      outputInfo2=" liczb pierwszych i "
      outputInfo3=" liczb super pierwszych."
      invalidInputMessage="Podaj prawidłowe dane wejściowe!"
      bigScopeMess="Maksymalny zakres ciągu to 100 000, zmniejsz zakres!"
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
