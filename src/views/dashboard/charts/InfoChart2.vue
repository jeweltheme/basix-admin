<script>
import Vue from 'vue';
import jquery from 'jquery'

import '../../../assets/js/lib/flot-chart/jquery.flot.js';
import '../../../assets/js/lib/flot-chart/jquery.flot.pie.js';
import '../../../assets/js/lib/flot-chart/jquery.flot.spline.js';


export default{
      name: 'info-icon-box-chart-two',
      //props: ["canvasId"],
      data(){
        return{
            canvasId: 'flotLine1'
        }
      },
      template: "<div :id='canvasId'></div>",
      mounted () {

        jQuery.plot($('#' + this.canvasId + ' '),[{
          data: [[0, 1], [1, 3], [2,6], [3, 5], [4, 7], [5, 8], [6, 10]],
          color: '#fff'
        }],
        {
          series: {
            lines: {
              show: false
            },
            splines: {
              show: true,
              tension: 0.4,
              lineWidth: 2
          //fill: 0.4
          },
          shadowSize: 0
          },
          points: {
            show: false,
          },
          legend: {
            noColumns: 1,
            position: 'nw'
          },
          grid: {
            hoverable: true,
            clickable: true,
            show: false
          },
          yaxis: {
            min: 0,
            max: 10,
            color: '#eee',
            font: {
              size: 10,
              color: '#6a7074'
            }
          },
          xaxis: {
            color: '#eee',
            font: {
              size: 10,
              color: '#6a7074'
            }
          }
          })

    }
}
</script>