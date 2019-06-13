<template>
  <div class="wrapper">
    <header>
      <h1>{{h1Text}}</h1>
      <div class="underHeader">
        <h2>{{h2Text}}</h2>
        <p class="underHeaderText">{{pHeader}}</p>
      </div>
    </header>
    <section>
      <form>
        <main class="inputs">
          <div class="group">
            <input type="number" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{{fromLabel}}</label>
          </div>
          <div class="group">
            <input type="number" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{{toLabel}}</label>
          </div>
        </main>
        <div class="btn">
          <p>{{btnText}}</p>
        </div>
      </form>
    </section>
    <p class="outputInfo">{{outputInfo}}</p>
    <div class="output-container">sdsd</div>
    <h2 class="legend">{{legendText}}</h2>
    <div class="legend-items">
      <div class="legend-item">
        <p>{{legendPrimaryText}}</p>
        <div class="legend-color blue"></div>
      </div>
      <div class="legend-item">
        <p>{{legendSuperPrimaryText}}</p>
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
    "outputInfo"
  ],
  data() {
    return {
      fromNum: 1,
      toNum: 1
    };
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
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    font-weight: 400;
  }
  .underHeader {
    margin: 20px;
  }
  .underHeaderText {
    text-align: center;
    opacity: 0.7;
    font-size: 15px;
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
  overflow: scroll;
  height: 35vh;
  width: 100%;
  margin-top: 1.4em;
  word-break: break-all;
  line-height: 21px;
  text-align: left;
  padding: 10px;
}
.legend {
  text-align: left !important;
  width: 100%;
  margin: 20px;
}
.legend-items {
  display: flex;
  text-align: left !important;
  width: 100%;
}
.legend-item {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
}
.legend-color {
  width: 21px;
  height: 21px;
}
.blue {
  margin-left: 5px;

  background-color: #55c2ff;
}
.white {
  background-color: #def3ff;
  margin-left: 5px;
}
.outputInfo {
  margin-top: 10px;
}

/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: 45px;
}
input {
  text-align: left;
  font-size: 18px;
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
  font-size: 18px;
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
  font-size: 14px;
  color: #8f96b1;
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
