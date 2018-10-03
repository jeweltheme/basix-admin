<template>

    <div class="row">

        <info
            icon="icon-lg pe-7f-cart"
            bgclass="bg-flat-color-1"
            symbol="$"
            counter=23569
            title="Revenue"
        >
        </info>

        <info-chart
            icon="icon-lg pe-7f-cart"
            symbol="%"
            hasPercentage="yes"
            bgclass="bg-flat-color-6"
            counter=85
            canvasId="flotBar1"
            title="Sales Increase"
        >
        </info-chart>

        <info
            icon="icon-lg pe-7f-users"
            bgclass="bg-flat-color-3"
            counter=6596
            title="Total Clients"
        >
        </info>

        <info-chart-two
            icon="icon-lg pe-7f-cart"
            bgclass="bg-flat-color-2"
            counter=1490
            canvasId="flotLine1"
            title="New Users"
        >
        </info-chart-two>

        <RealTime title="Real time"/>
        <Traffic title="Real time"/>
        <EarningStats/>
        <Download/>
        <Revenue/>

    </div>

</template>

<script>
import Info from './dashboard/InfoBox.vue';
import InfoChart from './dashboard/InfoBoxChart.vue';
import InfoChartTwo from './dashboard/InfoBoxChart2.vue';
import RealTime from './dashboard/RealTime.vue';
import Traffic from './dashboard/Traffic.vue';
import EarningStats from './dashboard/EarningStats.vue';
import Download from './dashboard/Download.vue';
import Revenue from './dashboard/Revenue.vue';


export default{
    name: 'dashboard',
    components: {
        Info,
        InfoChart,
        InfoChartTwo,
        RealTime,
        Traffic,
        EarningStats,
        Download,
        Revenue
    }
}


</script>

<style>

</style>