<template>
	<chart 
	  	id="traffic-chart" 
	  	class="traffic-chart" 
	  	:data="data" 
	  	:options="options"
	></chart>
</template>


<script>
import Vue from 'vue'
import Chart from 'vue-bulma-chartlist-plugin'


export default {
  components: {
    Chart
  },
 
  data () {
    return {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
				[13000, 18000, 35000, 18000, 25000, 26000, 22000, 20000, 18000, 35000, 18000, 25000],
      			[15000, 23000, 15000, 30000, 20000, 31000, 15000, 15000, 23000, 15000, 30000, 20000],
      			[25000, 15000, 38000, 25500, 15000, 22500, 30000, 25000, 15000, 38000, 25500, 15000]
        ]
      },
      options: {
	      low: 0,
	      showArea: true,
	      showLine: false,
	      showPoint: false,
	      fullWidth: true,
	      axisX: {
	        showGrid: true
	      }
      },
      type: 'line'
    }
  },
	mounted(){
		// Chart.on('draw', function(data) {
	 //      if(data.type === 'line' || data.type === 'area') {
	 //        data.element.animate({
	 //          d: {
	 //            begin: 2000 * data.index,
	 //            dur: 2000,
	 //            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
	 //            to: data.path.clone().stringify(),
	 //            easing: Chartist.Svg.Easing.easeOutQuint
	 //          }
	 //        });
	 //      }
	 //    });
	  
	}

}






// import Vue from 'vue';
// import jquery from 'jquery'


// //import '../../../assets/js/lib/chart-js/Chart.bundle.js';
// import '../../../assets/js/lib/chartist/chartist.min.js';
// import '../../../assets/js/lib/chartist/chartist-plugin-legend.js';


// export default{
//       name: 'dashboard-traffic-chart',
//       data(){
//         return{
//             canvasId: 'traffic-chart'
//         }
//       },
//       template: "<div :id='canvasId'></div>",
//       mounted () {



		  // 	//if (jQuery('#traffic-chart').length) {
		  //   var chart = new Chartist.Line('#traffic-chart', {
		  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		  //     series: [
		  //     [13000, 18000, 35000, 18000, 25000, 26000, 22000, 20000, 18000, 35000, 18000, 25000],
		  //     [15000, 23000, 15000, 30000, 20000, 31000, 15000, 15000, 23000, 15000, 30000, 20000],
		  //     [25000, 15000, 38000, 25500, 15000, 22500, 30000, 25000, 15000, 38000, 25500, 15000]
		  //     ]
		  //   }, {
		  //     low: 0,
		  //     showArea: true,
		  //     showLine: false,
		  //     showPoint: false,
		  //     fullWidth: true,
		  //     axisX: {
		  //       showGrid: true
		  //     }
		  //   });

		  //   chart.on('draw', function(data) {
		  //     if(data.type === 'line' || data.type === 'area') {
		  //       data.element.animate({
		  //         d: {
		  //           begin: 2000 * data.index,
		  //           dur: 2000,
		  //           from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
		  //           to: data.path.clone().stringify(),
		  //           easing: Chartist.Svg.Easing.easeOutQuint
		  //         }
		  //       });
		  //     }
		  //   });
		  // //}



//     }
// }
</script>