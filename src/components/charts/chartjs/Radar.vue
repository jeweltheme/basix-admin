<template>
    <div class="animated fadeIn">
        <card header-text="Radar Chart">
            <div class="chart-wrapper">
                <radar-chart/>
            </div>
        </card>
    </div>
</template>

<script>
    import RadarChart from '../../charts/chartjs/RadarChart.vue';

    export default {
         components: {
            RadarChart
        }
    }
</script>