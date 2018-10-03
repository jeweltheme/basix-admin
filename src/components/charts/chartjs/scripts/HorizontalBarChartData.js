<script>
import { Bar } from 'vue-chartjs'

export default({
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
          label: 'Satisfaction Score',
          data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93],
          backgroundColor: "#42b983"
        }, {
          label: 'Satisfaction Score',
          data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53],
          backgroundColor: "#61dafb"
        }]
    },
    //  {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: true
    //   },
    //   scales: {
    //     xAxes: [{
    //       display: false,
    //       categoryPercentage: 1,
    //       barPercentage: 0.5
    //     }],
    //     yAxes: [{
    //       display: false
    //     }]
    //   }
    // }
    )
  }
})
</script>
