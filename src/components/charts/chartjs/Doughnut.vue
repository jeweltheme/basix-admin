<template>
    <div class="animated fadeIn">
        <card header-text="Doughnut Chart">
            <div class="chart-wrapper">
                <doughnut-chart/>
            </div>
        </card>
    </div>
</template>

<script>
    import DoughnutChart from '../../charts/chartjs/DoughnutChart.vue';

    export default {
         components: {
            DoughnutChart
        }
    }
</script>