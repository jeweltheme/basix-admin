<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6">
        <card header-text="Line Chart">
          <div class="chart-wrapper">
            <line-chart-js/>
          </div>
        </card>
      </div>
      <div class="col-sm-6">
        <card header-text="Bar Chart" class="mb-4">
          <div class="chart-wrapper mb-4" >
            <bar-chart-js style="height:375px"/>
          </div>
        </card>
      </div>

    </div>
  </div>
</template>
<script>
import BarChartJs from './chartjs/scripts/BarChartJs.vue';
import LineChartJs from './chartjs/scripts/LineChartJs.vue';
import DoughnutChart from './chartjs/scripts/DoughnutChart.vue';
import RadarChart from './chartjs/scripts/RadarChart.vue';
import PieChart from './chartjs/scripts/PieChart.vue';
import PolarAreaChart from './chartjs/scripts/PolarAreaChart.vue';

export default {
  name: 'chartjs',
  components: {
    BarChartJs,
    LineChartJs,
    DoughnutChart,
    RadarChart,
    PieChart,
    PolarAreaChart
  }
}
</script>
