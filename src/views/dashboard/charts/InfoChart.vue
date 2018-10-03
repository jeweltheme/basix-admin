<script>
import Vue from 'vue';
import jquery from 'jquery'

import '../../../assets/js/lib/flot-chart/jquery.flot.js';
import '../../../assets/js/lib/flot-chart/jquery.flot.pie.js';
import '../../../assets/js/lib/flot-chart/jquery.flot.spline.js';


export default{
      name: 'info-icon-box-chart',
      //props: ["canvasId"],
      data(){
        return{
            canvasId: 'flotBar1'
        }
      },
      template: "<div :id='canvasId'></div>",
      mounted () {

       jQuery.plot("#" + this.canvasId, [{
          data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6]],
          bars: {
            show: true,
            lineWidth: 0,
            fillColor: '#85c988'
          }
        }], {
          grid: {
            show: false,
            hoverable: true
          }
        })

    }
}
</script>