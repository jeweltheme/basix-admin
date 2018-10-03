<template>
    <div class="col-lg-8">
        <div class="card">
            <div class="card-top">
                <h4 class="card-title m-0 float-left">Traffic</h4><!-- /.content-title -->
                <div class="float-right text-r">
                    <button class="content-settings" data-toggle="tooltip" data-placement="top" title="Settings"><i class="fa fa-cog"></i></button>
                    <button class="content-collapse" data-toggle="tooltip" data-placement="top" title="Collapse"><i class="fa fa-angle-down"></i></button>
                    <button class="content-close" data-toggle="tooltip" data-placement="top" title="Close"><i class="fa fa-close"></i></button>
                </div>

            </div><!-- /.card-top -->
            <div class="card-body pb-0">
                <TrafficChart/>
            </div>

            <div class="card-footer bg-white br-0 pl-5 pr-5 pt-0 pb-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="item text-center">
                            <span class="text-muted">Visits</span>
                            <h4 class="m-0 text-up pb-1">29.703 Users (40%)</h4>
                            <div class="progress progress-thin">
                                <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style="width: 40%;"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item text-center">
                            <span class="text-muted">Visits</span>
                            <h4 class="m-0 text-up pb-1">29.703 Users (40%)</h4>
                            <div class="progress progress-thin">
                                <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style="width: 40%;"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item text-center">
                            <span class="text-muted">Visits</span>
                            <h4 class="m-0 text-up pb-1">29.703 Users (40%)</h4>
                            <div class="progress progress-thin">
                                <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style="width: 40%;"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import TrafficChart from './charts/TrafficChart.vue';

export default{
    //props: ['icon', 'symbol', 'counter', 'title', 'bgclass', 'hasPercentage', 'canvasId'],
    components:{
        TrafficChart
    }
}
</script>