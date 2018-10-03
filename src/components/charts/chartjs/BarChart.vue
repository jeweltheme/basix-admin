<template>
    <div class="animated fadeIn">
        <card header-text="Bar Chart" class="mb-4">
            <div class="chart-wrapper mb-4" >
                <bar-chart-js style="height:300px"/>
            </div>
        </card>
    </div>
</template>

<script>
    import BarChartJs from '../../charts/chartjs/BarChartJs.vue';

    export default {
      name: 'bar-chart',
          components: {
            BarChartJs
        }
    }
</script>