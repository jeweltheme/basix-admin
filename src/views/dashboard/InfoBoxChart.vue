<template>
    <div class="col-md-6 col-lg-3">
        <div
            class="card text-white"
            :class="bgclass"
        >
            <div class="card-body">

                <div class="card-left pt-1 float-left">
                    <h3 class="mb-0 fw-r">

                        <div v-if="hasPercentage === 'yes' ">
                            <span class="count float-left" >
                                <basix-counter
                                  :from = 0
                                  :to = Number(counter)
                                  :duration = "4000"
                                ></basix-counter>


                            </span>
                            <span>{{ symbol }}</span>
                        </div>
                        <div v-else>
                            <span class="currency float-left mr-1" v-if="symbol">{{ symbol }}</span>
                            <span class="count">
                                <basix-counter
                                  :from = 0
                                  :to = 23569
                                  :duration = "4000"
                                ></basix-counter>


                            </span>
                        </div>

                    </h3>
                    <p class="text-light mt-1 m-0">{{ title }}</p>
                </div><!-- /.card-left -->

                <div class="card-right float-right text-right">
                    <info-chart canvasId="flotBar1" class="flotBar1"></info-chart>
                </div><!-- /.card-right -->
            </div>
        </div>
    </div>
</template>

<script>
import InfoChart from './charts/InfoChart.vue';

export default{
    props: ['icon', 'symbol', 'counter', 'title', 'bgclass', 'hasPercentage', 'canvasId'],
    components:{
        InfoChart
    },
    data(){
        return{
            liton: this.counter
        }
    }
}
</script>
