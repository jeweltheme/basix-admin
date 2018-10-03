<script>
import Vue from 'vue';
import { Gauge } from 'gaugeJS';

// Gauge JS
Vue.component('gauge-js', {
  name: 'gauge-js',
    props: [
            "lines",
            "color",
            "angle",
            "lineWidth",
            "length",
          	"strokeWidth",
          	"colorStart",
          	"colorStop",
          	"strokeColor",
          	"maxValue",
          	"setValue",
          	"limitMax",
          	"generateGradient",
          	"canvasId"
          ],
  template: "<canvas :id='canvasId'></canvas>",
  mounted () {
      var opts = {
        lines: this.lines, // The number of lines to draw
        angle: this.angle, // The length of each line
        lineWidth: this.lineWidth, // The line thickness
        pointer: {
            length: this.length, // The radius of the inner circle
            strokeWidth: this.strokeWidth, // The rotation offset
            color:  this.color // Fill color
          },
        limitMax: 'true', // If true, the pointer will not go past the end of the gauge
        colorStart: this.colorStart, // Colors
        colorStop: this.colorStop, // just experiment with them
        strokeColor: this.strokeColor, // to see which ones work best for you
        generateGradient: true,
        responsive: true
      };

      var target = document.getElementById(this.canvasId); 
      var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.maxValue = 3000; // set max gauge value
      gauge.animationSpeed = 32; // set animation speed (32 is default value)
      gauge.set(1150); // set actual value
    
   }
})

</script>