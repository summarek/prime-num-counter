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
      outputInfo1=" In this range are "
      outputInfo2=" primary numbers and "
      outputInfo3=" super primary numbers."
      invalidInputMessage="Enter valid input data!"
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
