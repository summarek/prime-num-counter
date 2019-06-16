<template>
  <div class="wrapper">
    <header>
      <h1>{{ h1Text }}</h1>
      <div class="underHeader">
        <h2>{{ h2Text }}</h2>
        <p class="underHeaderText">{{ pHeader }}</p>
      </div>
    </header>
    <section>
      <form>
        <main class="inputs">
          <div class="group">
            <input v-on:keyup.enter="countFirstNumbers" type="number" v-model="fromNumber" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{{ fromLabel }}</label>
          </div>
          <div class="group">
            <input v-on:keyup.enter="countFirstNumbers" type="number" v-model="toNumber" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{{ toLabel }}</label>
          </div>
        </main>

        <div @click="countFirstNumbers" class="btn">
          <p>{{ btnText }}</p>
        </div>
        <transition
          name="alertAnim"
          mode="out-in"
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOutDown"
        >
          <p v-if="this.toNumber - this.fromNumber > 100000" class="alert">{{bigScopeMess}}</p>
          <p
            v-if="parseInt(this.toNumber) <= parseInt(this.fromNumber)"
            class="alert"
          >{{invalidInputMessage}}</p>
        </transition>
      </form>
    </section>
    <p class="outputInfo">
      {{ outputInfo1 }} {{ pierwszaCount }} {{ outputInfo2 }}
      {{ superPierwszaCount }}
      {{ outputInfo3 }}
    </p>

    <div class="output-container">
      <p id="outputString">
        <span v-html="outputTabString"></span>
      </p>
    </div>

    <h2 class="legend">{{ legendText }}</h2>
    <div class="legend-items">
      <div class="legend-item">
        <p>{{ legendPrimaryText }}</p>
        <div class="legend-color blue"></div>
      </div>
      <div class="legend-item">
        <p>{{ legendSuperPrimaryText }}</p>
        <div class="legend-color white"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: [
    "h1Text",
    "h2Text",
    "pHeader",
    "fromLabel",
    "toLabel",
    "btnText",
    "legendText",
    "legendPrimaryText",
    "legendSuperPrimaryText",
    "outputInfo1",
    "outputInfo2",
    "outputInfo3",
    "invalidInputMessage",
    "bigScopeMess"
  ],
  data() {
    return {
      tab: [],
      outputTab: "",
      fromNumber: 1,
      toNumber: 100,
      dzielniki: 0,
      superPierwsza: 0,
      dzielnikiSuper: 0,
      superPierwszaCount: 0,
      pierwszaCount: 0,
      outputTabString: "",
      rangeTab: [],
      test: 0
    };
  },
  methods: {
    countFirstNumbers: function(fromNumber, toNumber) {
      this.fromNumber = parseInt(this.fromNumber, 10);
      this.toNumber = parseInt(this.toNumber, 10);
      this.tab = [];
      this.outputTab = [];
      this.dzielniki = 0;
      this.superPierwsza = 0;
      this.dzielnikiSuper = 0;
      this.superPierwszaCount = 0;
      this.pierwszaCount = 0;
      this.rangeTab = [];
      this.test = this.fromNumber;
      document.querySelector(".outputInfo").style.display = "none";
      document.querySelector("#outputString").style.color = "white";
      document.querySelector("#outputString").style.fontWeight = "400";

      if (this.toNumber - this.fromNumber > 100000) {
        this.outputTabString = this.bigScopeMess;
        document.querySelector("#outputString").style.color = "red";
        document.querySelector("#outputString").style.fontWeight = "bold";

        return;
      }
      for (var w = 0; w < this.toNumber - this.fromNumber; w++) {
        this.tab[parseInt(w, 10)] = parseInt(w, 10) + parseInt(this.test, 10);
      }

      this.tab.forEach(element => {
        for (var j = 0; j <= element; j++) {
          if (element % j === 0) {
            this.dzielniki++;
          }
        }
        if (this.dzielniki === 2) {
          this.pierwszaCount++;
          for (var g = 0; g < String(element).length; g++) {
            this.superPierwsza += parseInt(String(element)[g]);
          }
          for (var h = 0; h <= this.superPierwsza; h++) {
            if (this.superPierwsza % h === 0) {
              this.dzielnikiSuper++;
            }
          }
          if (this.dzielnikiSuper == 2 && typeof element == "number") {
            this.superPierwszaCount++;
            this.outputTab.push(
              ` <span style=color:#55c2ff;>${element}</span>`
            );
            this.outputTabString = this.outputTab.join(", ");
          } else if (typeof element == "number") {
            this.outputTab.push(`<span>${element}</span>`);
            this.outputTabString = this.outputTab.join(", ");
          }
          this.dzielnikiSuper = 0;
          this.superPierwsza = 0;
        }
        this.dzielniki = 0;
      });
      if (this.superPierwszaCount == 0 && this.pierwszaCount == 0) {
        this.outputTab.push(this.invalidInputMessage);
      }
      document.querySelector(".outputInfo").style.display = "block";

      this.outputTabString = this.outputTab;
      this.outputTabString = this.outputTab.join(", ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  h1 {
    font-size: 1.7em;
    text-align: center;
    font-weight: bold;
  }
  h2 {
    font-size: 1.3em;
    text-align: center;
    font-weight: 400;
  }
  .underHeader {
    margin: 20px;
  }
  .underHeaderText {
    text-align: center;
    opacity: 0.7;
    font-size: 1em;
  }
}
.btn {
  background: #525a96;
  border: 1px solid #def3ff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  margin: 0 auto;
  p {
    font-size: 1.2em;
    font-weight: 500;
  }
}

.inputs {
  height: 65px;
  display: flex;
  width: 250px;

  justify-content: space-between;
}

.output-container {
  background: #2c2d42;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  overflow: auto;
  height: 35vh;
  width: 100%;
  margin-top: 1em;
  word-break: break-word;
  line-height: 21px;
  text-align: left;
  padding: 10px;
}
.legend {
  text-align: left !important;
  width: 100%;
  margin: 10px 10px 5px 10px;
}
.legend-items {
  display: flex;
  text-align: left !important;
  width: 100%;
}
.legend-item {
  display: flex;
  width: auto;
  margin-right: 10px;
  align-content: center;
  align-items: center;
}
.legend-color {
  width: 21px;
  height: 21px;
}
.blue {
  margin-left: 5px;

  background-color: #def3ff;
}
.white {
  background-color: #55c2ff;
  margin-left: 5px;
}
.outputInfo {
  display: none;
  margin-top: 10px;
}
form {
  position: relative;
}
.alert {
  top: 40px;
  //width: 60vw;
  //left: calc(-15vw);
  margin: 0 auto;

  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;

  background-color: red;
  position: absolute;
}

span.superPrimary {
  color: red;
}

/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: 30px;
}
input {
  text-align: left;
  font-size: 1.1em;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 1.2em;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 1em;
  color: #ffffff;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #b3bcdd;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@keyframes inputHighlighter {
  from {
    background: #929abd;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
