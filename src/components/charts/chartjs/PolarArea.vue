<template>
    <div class="animated fadeIn">
        <card header-text="Polar Area Chart">
            <div class="chart-wrapper">
                <polar-area-chart/>
            </div>
        </card>
    </div>
</template>

<script>
    import PolarAreaChart from '../../charts/chartjs/PolarAreaChart.vue';

    export default {
         components: {
            PolarAreaChart
        }
    }
</script>