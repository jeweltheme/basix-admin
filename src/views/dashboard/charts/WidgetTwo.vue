<template>
    <div id="flotPie1" class="float-chart"></div>
</template>

<script>

    export default{
      name: 'dash-widget-one-chart',
      data(){
        return{
            canvasId: 'flotPie1'
        }
      },
      mounted () {
                
         var piedata = [
         { label: "Desktop visits", data: [[1,32]], color: '#5c6bc0'},
         { label: "Tab visits", data: [[1,33]], color: '#ef5350'},
         { label: "Mobile visits", data: [[1,35]], color: '#66bb6a'}
         ];

         $.plot('#flotPie1', piedata, {
          series: {
            pie: {
              show: true,
              radius: 1,
              innerRadius: 0.4,
              label: {
                show: true,
                radius: 2/3,
                threshold: 1
              },
              stroke: { 
                width: 0.1
              }
            }
          },
          grid: {
            hoverable: true,
            clickable: true
          }
        });
        
    }
}
</script>