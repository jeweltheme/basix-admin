<template>
    <div class="col-lg-3 col-md-6">
        <div class="card revenue">
            <div class="card-top">
                <h4 class="card-title m-0 float-left">Revenue</h4><!-- /.content-title -->
                <div 
                    class="action-menu dropdown float-right" 
                >
                    <button class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Edit</a>
                        <a class="dropdown-item" href="#">Remove</a>
                        <a class="dropdown-item" href="#">Modify</a>
                    </div>
                </div><!-- /.action-menu -->

            </div><!-- /.card-top -->
            <div class="card-body p-0 pt-2">
                
                <div class="gauge g2 pb-0">
                        <gauge-js
                            canvas-id="g2"
                            :lines="12"
                            :angle=0
                            
                            :length=".75"
                            :strokeWidth="0.03"
                            color="#000"

                            :lineWidth="0.05"
                            colorStart="#42a5f5"
                            colorStop="#42a5f5"
                            strokeColor="#fbfbfc"
                            maxValue="3000"
                            setValue="1150"
                            limitMax="true"
                            generateGradient="true"
                        ></gauge-js>
                </div>

            </div>

            <div class="card-footer br-0 pb-4 mb-2 bg-white">
                <h6 class="mb-0 float-left">
                    <span class="currency float-left mr-1">$</span>
                    <span class="count">3265986</span>
                </h6>
                <h6 class="mb-0 fw-r float-right">
                    <i class="fa fa-arrow-circle-down color-red"></i>
                    <span>25%</span>
                </h6>
            </div><!-- /.card-footer -->

        </div>
    </div>
</template>

<script>
    import RevenueChart from './charts/RevenueChart.vue';

    export default{
        components:{
            RevenueChart
        }
    }

</script>

<style>
    .revenue{
        height: 272px;
    }
</style>