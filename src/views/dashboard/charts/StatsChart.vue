<template>
  <canvas id="area_chart"></canvas>
</template>


<script>
import { Line } from 'vue-chartjs'

export default({
  extends: Line,

  mounted () {
      
      var ctx = document.getElementById('area_chart').getContext('2d');

      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: 
        {
          labels: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: '#4fabf5',
            pointBackgroundColor: "#ffffff",
            data: [5000, 2700, 8500, 5500, 4500, 4900, 3000]
          },
          {
            label: "My Second dataset",
            backgroundColor: 'rgba(230,240,244,.5)',
            borderColor: '#6ebe73',
            pointBackgroundColor: "#ffffff",
            data: [5500, 2900, 7000, 3500, 5000, 3300, 4800 ]
          },
          {
            label: "My Third dataset",
            backgroundColor: 'transparent',
            borderColor: '#5c6bc0',
            pointBackgroundColor: "#ffffff",
            data: [2700, 7000, 3500, 6900, 2600, 6500, 2200]
          }]
        },

        // Configuration options go here
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },

          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              gridLines: {
                zeroLineColor: '#e8e9ef',
                color: '#e8e9ef',
                drawBorder: true
              }
            }]

          },
          elements: {
            line: {
              tension: 0.00001,
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4,
              borderWidth: 2
            }
          }
        }
      });


  }
})
</script>
