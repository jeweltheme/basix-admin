<template>

    <div class="col-lg-6">
        <div class="card bg-flat-color-4">
            <div class="card-top bg-flat-color-4">
                <h4 class="card-title m-0 float-left">Earning Stats</h4><!-- /.content-title -->
                <div class="float-right text-r">
                    <button class="content-settings" data-toggle="tooltip" data-placement="top" title="Settings"><i class="fa fa-cog"></i></button>
                    <button class="content-collapse" data-toggle="tooltip" data-placement="top" title="Collapse"><i class="fa fa-angle-down"></i></button>
                    <button class="content-close" data-toggle="tooltip" data-placement="top" title="Close"><i class="fa fa-close"></i></button>
                </div>

            </div><!-- /.card-top -->

            <div class="card-body p-0">
                <EarningStat/>
            </div>

            <div class="card-footer pt-3 pb-3 br-0 black-rgba">
                <h4 class="card-title m-0 float-left color-white">Total Earning</h4><!-- /.content-title -->
                <h6 class="mb-0 fw-r float-right color-white">
                    <span class="currency float-left mr-1">$</span>
                    <span class="count">3265986</span>
                </h6>
            </div><!-- /.card-footer -->

        </div>
    </div>

</template>


<script>

import EarningStat from './charts/EarningStat.vue';

export default{
    components:{
        EarningStat
    }
}
</script>