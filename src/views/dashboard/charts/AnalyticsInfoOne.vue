<template>
    <div id="flotLine2" class="float-chart height-15"></div>
</template>


<script>

    export default{
      name: 'analytics-line-one-chart',
      data(){
        return{
            canvasId: 'flotLine2'
        }
      },
      //template: "<div :id='canvasId'></div>",
      mounted () {
      	
         var plot = $.plot($('#flotLine2'),[{
          data: [[0, 8], [1, 5], [2,7], [3, 8], [4, 7], [5, 10], [6, 8], [7, 5], [8, 8], [9, 6], [10, 4]],
          label: 'New Data Flow',
          color: '#42a5f5'
        }],{
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