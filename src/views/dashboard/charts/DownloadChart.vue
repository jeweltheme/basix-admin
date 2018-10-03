<template>
  <div class="chart-download">
    <canvas id="download-chart" width="160px" height="160px"></canvas>
    <span id="gauge-value"> % </span>
  </div>
</template>

<script>
import Vue from 'vue';
import { Donut, Gauge } from 'gaugeJS';

  export default{
  mounted () {
          var opts = {
            lines: 14,
            angle: 0.5,
            lineWidth: 0.1,
            limitMax: 'false', 
            percentColors: [[0.0, "#cccccc" ], [0.50, "#ffff00"], [1.0, "#ff0000"]],
            strokeColor: '#ffa726',
            generateGradient: true,
            highDpiSupport: true,


            colorStart: '#cdcdcd',
            colorStop: '#ffa726', 
            strokeColor: '#e6e9ec',
            generateGradient: true
          };
          var target = document.getElementById('download-chart');
          var gauge = new Donut(target).setOptions(opts);
          gauge.maxValue = 100;
          gauge.animationSpeed = 40;
          gauge.set(60);
          
          gauge.setTextField(document.getElementById("gauge-value"));

   }
}

</script>


<style scoped>
  #download-chart{
    margin-left: 30%;
    margin-top: 2%;
  }
  #gauge-value {
      color: #000 !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      text-anchor: middle;
      font-family: Arial;
      font-size: 29px;
      font-weight: bold;
      fill-opacity: 1;
      position: absolute;
      left: 45%;
      top: 38%;
  }
  #gauge-value:after{
    content: "%";
  }
</style>