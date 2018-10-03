<template>
  <div class="animated fadeIn">
      <card header-text="Line Chart">
        <div class="chart-wrapper">
          <line-chart-js/>
        </div>
      </card>
  </div>
</template>

<script>
    import LineChartJs from '../charts/chartjs/LineChartJs.vue';

    export default {
      name: 'line-chart',
          components: {
            LineChartJs
        }
    }
</script>