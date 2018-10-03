<script>
import Vue from 'vue';
import jquery from 'jquery'

import '../../../assets/js/lib/flot-chart/jquery.flot.js';
import '../../../assets/js/lib/flot-chart/jquery.flot.pie.js';
import '../../../assets/js/lib/flot-chart/jquery.flot.spline.js';


export default{
      name: 'dash-earning-chart',
      data(){
        return{
            canvasId: 'flotBar2'
        }
      },
      template: "<div :id='canvasId' class='float-chart ml-4 mr-4'></div>",
      mounted () {

       jQuery.plot("#flotBar2", [{
		  data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6]],
		  bars: {
		    show: true,
		    lineWidth: 0,
		    fillColor: '#f58f8d'
		  }
		}], {
		  grid: {
		    show: false
		  }
		})

    }
}
</script>