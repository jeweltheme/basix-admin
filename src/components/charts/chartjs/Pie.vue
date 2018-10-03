<template>
    <div class="animated fadeIn">
        <card header-text="Pie Chart">
            <div class="chart-wrapper">
                <pie-chart/>
            </div>
        </card>
    </div>
</template>

<script>
    import PieChart from '../../charts/chartjs/PieChart.vue';

    export default {
          components: {
            PieChart
        }
    }
</script>