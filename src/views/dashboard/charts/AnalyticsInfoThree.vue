<template>
	<div id="flotLine4" class="float-chart height-15"></div>
</template>

<script>

    export default{
      name: 'analytics-line-three-chart',
      data(){
        return{
            canvasId: 'flotLine4'
        }
      },
      mounted () {
      	
		var plot = $.plot($('#flotLine4'),[{
		  data: [[0, 8], [1, 5], [2,7], [3, 8], [4, 7], [5, 10], [6, 8], [7, 5], [8, 8], [9, 6], [10, 4]],
		  label: 'New Data Flow',
		  color: '#5c6bc0'
		}],
		{
		  series: {
		    lines: {
		      show: false
		    },
		    splines: {
		      show: true,
		      tension: 0.4,
		      lineWidth: 1,
		      fill: 0.25
		    },
		    shadowSize: 0
		  },
		  points: {
		    show: false
		  },
		  legend: {
		    show: false
		  },
		  grid: {
		    show: false
		  }
		});



    }
}
</script>