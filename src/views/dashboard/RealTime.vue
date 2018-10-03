<template>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-top">
                <h4 class="card-title m-0 float-left">{{ title }}</h4><!-- /.content-title -->
                <div class="float-right text-r">
                    <button class="content-settings" data-toggle="tooltip" data-placement="top" title="Settings"><i class="fa fa-cog"></i></button>
                    <button class="content-collapse" data-toggle="tooltip" data-placement="top" title="Collapse"><i class="fa fa-angle-down"></i></button>
                    <button class="content-close" data-toggle="tooltip" data-placement="top" title="Close"><i class="fa fa-close"></i></button>
                </div>

            </div><!-- /.card-top -->
            <div class="card-body p-0">
                <real-time-chart canvasId="flotRealtime2" class="flotRealtime2"></real-time-chart>
            </div>

        </div>
    </div>

</template>

<script>
import RealTimeChart from './charts/RealTimeChart.vue';

export default{
    props: ['icon', 'symbol', 'counter', 'title', 'bgclass', 'hasPercentage', 'canvasId'],
    components:{
        RealTimeChart
    }
}
</script>