<script>
  import Vue from 'vue';
  import jquery from 'jquery'

  import '../../../assets/js/lib/flot-chart/jquery.flot.js';
  import '../../../assets/js/lib/flot-chart/jquery.flot.pie.js';
  import '../../../assets/js/lib/flot-chart/jquery.flot.spline.js';


  export default{
      name: 'dashboard-realtime-chart',
      data(){
        return{
            canvasId: 'flotRealtime2'
        }
      },
      template: "<div :id='canvasId'></div>",
      mounted () {

          var data = [], totalPoints = 50;

          function getRandomData() {
            if (data.length > 0)
              data = data.slice(1);
            while (data.length < totalPoints) {
              var prev = data.length > 0 ? data[data.length - 1] : 50,
              y = prev + Math.random() * 10 - 5;
              if (y < 0) {
                y = 0;
              } else if (y > 100) {
                y = 100;
              }
              data.push(y);
            }
            var res = [];
            for (var i = 0; i < data.length; ++i) {
              res.push([i, data[i]])
            }
            return res;
          }

        var updateInterval = 1000;

        var plot5 = jQuery.plot('#flotRealtime2', [ getRandomData() ], {
          colors: ['#5c6bc0'],

          series: {
            // label: 'Upload',
            lines: {
              show: true,
              lineWidth: 0,
              fill: 0.9
            },
            shadowSize: 0 // Drawing is faster without shadows
          },
          grid: {
            show: false
          },
          xaxis: {
            color: '#eee',
            font: {
              size: 10,
              color: '#6a7074'
            }
          },
          yaxis: {
            min: 0,
            max: 100,
            color: '#eee',
            font: {
              size: 10,
              color: '#6a7074'
            }
          }
        });

        function update_plot5() {
          plot5.setData([getRandomData()]);
          plot5.draw();
          setTimeout(update_plot5, updateInterval);
        }

        update_plot5();


    }
}
</script>