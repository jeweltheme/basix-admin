<script>
import { Bar } from 'vue-chartjs'

export default({
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [ "January", "February", "March", "April", "May", "June", "July" ],
      datasets: [{
          label: 'Vue JS',
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          borderWidth: "0",
          backgroundColor: "#42b983"
        }, {
          label: 'React JS',
          data: [ 28, 48, 40, 19, 86, 27, 90 ],
          borderWidth: "0",
          backgroundColor: "#61dafb"
        }]
    },
     {
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: false,
          categoryPercentage: 1,
          barPercentage: 0.5
        }],
        yAxes: [{
          display: false,

        }]
      }
    })
  }
})
</script>
