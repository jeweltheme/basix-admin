<template>
    <div id="flotLine5" class="flot-line"></div>
</template>

<script>

    export default{
      name: 'dash-widget-one-chart',
      data(){
        return{
            canvasId: 'flotLine5'
        }
      },
      mounted () {
        
           var newCust = [[0, 3], [1, 5], [2,4], [3, 7], [4, 9], [5, 3], [6, 6], [7, 4], [8, 10]];

           var plot = $.plot($('#flotLine5'),[{
            data: newCust,
            label: 'New Data Flow',
            color: '#fff'
          }],
          {
            series: {
              lines: {
                show: true,
                lineColor: '#fff',
                lineWidth: 1
              },
              points: {
                show: true,
                fill: true,
                fillColor: "#ffffff",
                symbol: "circle",
                radius: 3
              },
              shadowSize: 0
            },
            points: {
              show: true,
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