<template>
  <div class="engLang">
    <Main
      h1Text="PRIME AND SUPER PRIME NUMBERS CALCULATOR"
      h2Text="Serve numbers range."
      pHeader="in the case of large numbers, the counting may take a while"
      fromLabel="From"
      toLabel="To"
      btnText="Count!"
      legendText="legend:"
      legendPrimaryText="primary: "
      legendSuperPrimaryText="super primary: "
      outputInfo="There is 2137 primary numbers and 1200 super primary numbers: "
    ></Main>
  </div>
</template>
<script>
import Main from "@/components/Main.vue";
export default {
  components: {
    Main
  }
};
</script>
