<template>
  <div class="animated fadeIn">
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


        <div class="col-md-6 col-lg-3">
            <div class="card bg-flat-color-1 text-light">
                <div class="card-body">
                    <div class="h4 m-0">                            
                        <basix-counter
                          :from = 0
                          :to = 89
                          :duration = "4000"
                        ></basix-counter>%</div>
                    <div>Lorem ipsum...</div>
                    <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
                </div>
            </div>
        </div><!--/.col-->

        <div class="col-md-6 col-lg-3">
            <div class="card bg-flat-color-3 text-light">
                <div class="card-body">
                    <div class="h4 m-0">
                        <basix-counter
                          :from = 0
                          :to = 12124
                          :duration = "4000"
                        ></basix-counter>
                      </div>
                    <div>Lorem ipsum...</div>
                    <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
                </div>
            </div>
        </div><!--/.col-->

        <div class="col-md-6 col-lg-3">
            <div class="card bg-flat-color-4 text-light">
                <div class="card-body">
                    <div class="h4 m-0">$                            
                        <basix-counter
                          :from = 500000
                          :to = 9811100
                          :duration = "4000"
                        ></basix-counter>
                    </div>
                    <div>Lorem ipsum...</div>
                    <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
                </div>
            </div>
        </div><!--/.col-->

        <div class="col-md-6 col-lg-3">
            <div class="card bg-flat-color-2 text-light">
                <div class="card-body">
                    <div class="h4 m-0">$
                        <basix-counter
                          :from = 500000
                          :to = 9811100
                          :duration = "4000"
                        ></basix-counter>
                      </div>
                    <div>Lorem ipsum...</div>
                    <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
                </div>
            </div>
        </div><!--/.col-->



        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-cogs bg-flat-color-5 p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                </div>
            </div>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                </div>
            </div>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                </div>
            </div>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                </div>
            </div>
        </div><!--/.col-->



        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-cogs bg-flat-color-5 p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                    <div class="b-b-1 pt-3"></div>
                    <hr>
                    <div class="more-info pt-2" style="margin-bottom:-10px;">
                        <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                    <div class="b-b-1 pt-3"></div>
                    <hr>
                    <div class="more-info pt-2" style="margin-bottom:-10px;">
                        <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                    <div class="b-b-1 pt-3"></div>
                    <hr>
                    <div class="more-info pt-2" style="margin-bottom:-10px;">
                        <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="clearfix">
                        <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                        <div class="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                    </div>
                    <div class="b-b-1 pt-3"></div>
                    <hr>
                    <div class="more-info pt-2" style="margin-bottom:-10px;">
                        <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
        </div><!--/.col-->



        <!--/.col-->
        <div class="col-md-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-md-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-md-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-md-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->


        <div class="col-sm-12 mb-4">
            <div class="card-group">

                <div class="card col-md-6 no-padding ">
                    <div class="card-body">
                        <div class="h1 text-muted text-right mb-4">
                            <i class="fa fa-cart-plus"></i>
                        </div>
                        <div class="h4 mb-0">
                            <span class="count">1238</span>
                        </div>
                        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
                        <div class="progress progress-xs mt-3 mb-0 bg-flat-color-3" style="width: 40%; height: 5px;"></div>
                    </div>
                </div>
                <div class="card col-md-6 no-padding ">
                    <div class="card-body">
                        <div class="h1 text-muted text-right mb-4">
                            <i class="fa fa-pie-chart"></i>
                        </div>
                        <div class="h4 mb-0">
                            <span class="count">28</span>%
                        </div>
                        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                        <div class="progress progress-xs mt-3 mb-0 bg-flat-color-4" style="width: 40%; height: 5px;"></div>
                    </div>
                </div>
                <div class="card col-md-6 no-padding ">
                    <div class="card-body">
                        <div class="h1 text-muted text-right mb-4">
                            <i class="fa fa-clock-o"></i>
                        </div>
                        <div class="h4 mb-0">5:34:11</div>
                        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                        <div class="progress progress-xs mt-3 mb-0 bg-flat-color-5" style="width: 40%; height: 5px;"></div>
                    </div>
                </div>
                <div class="card col-md-6 no-padding ">
                    <div class="card-body">
                        <div class="h1 text-muted text-right mb-4">
                            <i class="fa fa-comments-o"></i>
                        </div>
                        <div class="h4 mb-0">
                            <span class="count">972</span>
                        </div>
                        <small class="text-muted text-uppercase font-weight-bold">COMMENTS</small>
                        <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" style="width: 40%; height: 5px;"></div>
                    </div>
                </div>
            </div>
        </div>




    </div>
</div>


  </div>
</template>

<script>
    import Info from '../views/dashboard/InfoBox.vue';
    import InfoChart from '../views/dashboard/InfoBoxChart.vue';
    import InfoChartTwo from '../views/dashboard/InfoBoxChart2.vue';

    import AnimatedNumber from './AnimateNumber.vue'

    export default {
      name: 'widgets',
      data () {
        return {
          msg: 'Widgets'
        }
      },
     components: {
            Info,
            InfoChart,
            InfoChartTwo,
            BasixCounter: AnimatedNumber,
            Dropdown
        }
    }
</script>

<style scoped>
  .users{
      .table th, .table td{
          padding: .7rem 0;
      }
      .title{
          font-size: .8rem;
      }
      .small {
          font-size: 70%;
      }
  }
  .social-box ul li span.count{
    font-size: 20px;
  }
</style>