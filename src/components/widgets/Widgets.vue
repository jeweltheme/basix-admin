<template>
  <div class="animated fadeIn">
    <div class="row">


        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-1">
            <div class="card-body pb-0">
              <div class="dropdown float-right" v-dropdown>
                <button class="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-cog"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>
            <card-line1-chart class="chart-wrapper px-3" style="height:70px;" height="70"/>

          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-2">
            <div class="card-body pb-0">
              <button type="button" class="btn bg-transparent text-light p-0 float-right">
                <i class="fa fa-map-marker"></i>
              </button>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>
            <card-line2-chart class="chart-wrapper px-0" style="height:70px;" height="70"/>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-3">
            <div class="card-body pb-0">
              <div class="dropdown float-right" v-dropdown>
                <button class="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-cog"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>
              <card-line3 class="chart-wrapper px-0" style="height:70px;" height="70"/>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-4">
            <div class="card-body pb-0">
              <div class="dropdown float-right" v-dropdown>
                <button class="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-cog"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>

             <card-bar-chart
                    class="chart-wrapper px-3"
                    style="height:70px;"
                    barbgcolor="rgba(255,255,255,.3)"
                    :data="[78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]"
                    height="70"
                    />
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-12">
            <div class="card ">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-5">
                      <h4 class="card-title mb-0">Traffic</h4>
                      <div class="small text-muted">October 2017</div>
                    </div>
                      <!--/.col-->
                      <div class="col-sm-7 hidden-sm-down">
                          <button type="button" class="btn btn-primary float-right bg-flat-color-1"><i class="fa fa-cloud-download"></i></button>
                          <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                              <label class="btn btn-outline-secondary">
                                <input type="radio" name="options" id="option1"> Day
                            </label>
                            <label class="btn btn-outline-secondary active">
                                <input type="radio" name="options" id="option2" checked=""> Month
                            </label>
                            <label class="btn btn-outline-secondary">
                                <input type="radio" name="options" id="option3"> Year
                            </label>
                        </div>
                    </div>
                </div><!--/.col-->
            </div><!--/.row-->
            <main-chart class="chart-wrapper mt-4" style="height:300px;" height="300"/>
            </div>
            <div class="card-footer">
                <ul>
                    <li>
                        <div class="text-muted">Visits</div>
                        <strong>29.703 Users (40%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 5px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li class="hidden-sm-down">
                        <div class="text-muted">Unique</div>
                        <strong>24.093 Users (20%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li>
                        <div class="text-muted">Pageviews</div>
                        <strong>78.706 Views (60%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 60%; height: 5px;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li class="hidden-sm-down">
                        <div class="text-muted">New Users</div>
                        <strong>22.123 Users (80%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 80%; height: 5px;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li class="hidden-sm-down">
                        <div class="text-muted">Bounce Rate</div>
                        <strong>40.15%</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar" role="progressbar" style="width: 40%; height: 5px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-flat-color-1">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>

              <sales-chart
                  bgcolor="transparent"
                  :barcolor="red"
                  :linebar="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11 ]"
                  :salesbar="[10, 30, 20, 30, 50, 30, 12, 15, 34, 49, 32, 8, 54, 32, 18, 20]"
                  />
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-sm-7 px-0">

                  <card-bar-chart
                    class="chart-wrapper px-3"
                    style="height:30px;"
                    :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                    height="70"
                    />

                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$1,897,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-flat-color-4">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>

              <sales-chart
                  bgcolor="transparent"
                  :barcolor="red"
                  :linebar="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11 ]"
                  :salesbar="[10, 30, 20, 30, 50, 30, 12, 15, 34, 49, 32, 8, 54, 32, 18, 20]"
                  />
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                  <card-bar-chart
                    class="chart-wrapper px-3"
                    style="height:30px;"
                    :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                    height="70"
                    />
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$1,897,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-flat-color-5">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>
              <sales-chart
                  bgcolor="transparent"
                  :barcolor="red"
                  :linebar="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11 ]"
                  :salesbar="[10, 30, 20, 30, 50, 30, 12, 15, 34, 49, 32, 8, 54, 32, 18, 20]"
               />
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                  <card-bar-chart
                    class="chart-wrapper px-3"
                    style="height:30px;"
                    :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                    height="70"
                    />
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$1,897,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-warning">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>
               <sales-chart
                        bgcolor="transparent"
                        :barcolor="red"
                        :linebar="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11 ]"
                        :salesbar="[10, 30, 20, 30, 50, 30, 12, 15, 34, 49, 32, 8, 54, 32, 18, 20]"
                        />
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                <card-bar-chart
                    class="chart-wrapper px-3"
                    style="height:30px;"
                    :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                    height="70"
                    />
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$1,897,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-1 text-light">
                <div class="h4 m-0">89.9%</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-3 text-light">
                <div class="h4 m-0">12.124</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-4 text-light">
                <div class="h4 m-0">$98.111,00</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-2 text-light">
                <div class="h4 m-0">2 TB</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

    </div><!--/.row-->


    <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>

                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                        <card-bar-chart
                            class="chart-wrapper px-0"
                            style="height:40px;"
                            barbgcolor="#20a8d8"
                            barbordercolor="red"
                            :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                            height="40"
                        />
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                      <card-bar-chart
                          class="chart-wrapper px-0"
                          style="height:40px;"
                          barbgcolor="#ffc107"
                          barbordercolor="red"
                          :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                          height="40"
                      />
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                      <card-bar-chart
                          class="chart-wrapper px-0"
                          style="height:40px;"
                          barbgcolor="#379457"
                          barbordercolor="red"
                          :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                          height="40"
                      />
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                      <social-box-chart
                          style="height:40px;"
                          bordercolor="#20a8d8"
                          bgcolor="transparent"
                          :data="[65, 59, 84, 84, 51, 55, 40]" height="90"
                      />

                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>

                      <social-box-chart
                          style="height:40px;"
                          bordercolor="#4dbd74"
                          bgcolor="transparent"
                          :data="[65, 59, 84, 84, 51, 55, 40]" height="90"
                      />

                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>

                      <social-box-chart
                          style="height:40px;"
                          bordercolor="#f86c6b"
                          bgcolor="transparent"
                          :data="[65, 59, 84, 84, 51, 55, 40]" height="90"
                      />

                </div>
            </div>
        </div>
        <!--/.col-->
    </div>

    <div class="row">
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
    </div><!--/.row-->


    <div class="row">
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="card-body p-0 clearfix">
                    <i class="fa fa-laptop bg-info p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-bell bg-danger p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
    </div>


    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="social-box facebook">
                <i class="fa fa-facebook"></i>
                <ul>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=89
                          :duration="4000"
                        ></basix-counter>k</strong>
                        <span>friends</span>
                    </li>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=459
                          :duration="4000"
                        ></basix-counter></strong>
                        <span>feeds</span>
                    </li>
                </ul>
            </div>
            <!--/social-box-->
        </div>
        <!--/.col-->
        <div class="col-md-3 col-sm-6">
            <div class="social-box twitter">
                <i class="fa fa-twitter"></i>
                <ul>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=973
                          :duration="4000"
                        ></basix-counter>k</strong>
                        <span>followers</span>
                    </li>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=1792
                          :duration="4000"
                        ></basix-counter></strong>
                        <span>tweets</span>
                    </li>
                </ul>
            </div>
            <!--/social-box-->
        </div>
        <!--/.col-->
        <div class="col-md-3 col-sm-6">
            <div class="social-box linkedin">
                <i class="fa fa-linkedin"></i>
                <ul>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=500
                          :duration="4000"
                        ></basix-counter>+</strong>
                        <span>contacts</span>
                    </li>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=292
                          :duration="4000"
                        ></basix-counter></strong>
                        <span>feeds</span>
                    </li>
                </ul>
            </div>
            <!--/social-box-->
        </div>
        <!--/.col-->
        <div class="col-md-3 col-sm-6">
            <div class="social-box google-plus">
                <i class="fa fa-google-plus"></i>
                <ul>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=894
                          :duration="4000"
                        ></basix-counter></strong>
                        <span>followers</span>
                    </li>
                    <li>
                        <strong>
                        <basix-counter
                          :from=0
                          :to=92
                          :duration="4000"
                        ></basix-counter></strong>
                        <span>circles</span>
                    </li>
                </ul>
            </div>
            <!--/social-box-->
        </div>
        <!--/.col-->
    </div>


    <div class="card-group">
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-users"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=87500
                    :duration="5000"
                    ></basix-counter>
                </div>

                <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-user-plus"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=385
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-2" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-cart-plus"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=1238
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-3" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-pie-chart"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=28
                    :duration="3000"
                    ></basix-counter>%
                </div>
                <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-4" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-clock-o"></i>
                </div>
                <div class="h4 mb-0">5:34:11</div>
                <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-5" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-comments-o"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=972
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-muted text-uppercase font-weight-bold">COMMENTS</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
    </div>

    <div class="card-group">
        <div class="card bg-flat-color-1">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-users text-light"></i>
                </div>

                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=87500
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-uppercase font-weight-bold text-light">Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-2">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-user-plus text-light"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=385
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-uppercase font-weight-bold text-light">New Clients</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-3">
                <div class="h1 text-right mb-4">
                    <i class="fa fa-cart-plus text-light"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=1238
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-light text-uppercase font-weight-bold">Products sold</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-5">
                <div class="h1 text-right text-light mb-4">
                    <i class="fa fa-pie-chart"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=28
                    :duration="5000"
                    ></basix-counter>%
                </div>
                <small class="text-uppercase font-weight-bold text-light">Returning Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-4">
                <div class="h1 text-light text-right mb-4">
                    <i class="fa fa-clock-o"></i>
                </div>
                <div class="h4 mb-0 text-light">5:34:11</div>
                <small class="text-light text-uppercase font-weight-bold">Avg. Time</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-1">
                <div class="h1 text-light text-right mb-4">
                    <i class="fa fa-comments-o"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=972
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-light text-uppercase font-weight-bold">COMMENTS</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <div class="card-title text-center h6 mt-3">
                        Revenue
                    </div>

                    <div class="gaugejs-wrap mt-4 mb-0">
                      <gauge-js
                        canvas-id="gaugeid3"
                        style="height:100px;"
                        lines="15"
                        strokeWidth="0.035"
                        length="0.7"
                        lineWidth="0.44"

                        color="#000"
                        colorStart="#63c2de"
                        colorStop="#20a8d8"
                        strokeColor="#e4e5e6"
                        maxValue="200"
                        setValue="160"
                        limitMax="false"
                        generateGradient="true"
                        ></gauge-js>
                    </div>

                </div>
                <div class="card-footer">
                    <strong>$11.234,00</strong>
                    <span class="float-right"><i class="fa fa-arrow-circle-o-up text-success"></i> 15%</span>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <div class="card-title text-center h6 mt-3">
                        Profit
                    </div>

                    <div class="gaugejs-wrap mt-4 mb-0">
                      <gauge-js
                        canvas-id="gaugeid4"
                        style="height:100px;"
                        lines="15"
                        strokeWidth="0.035"
                        length="0.7"
                        lineWidth="0.44"

                        color="#000"
                        colorStart="#28a745"
                        colorStop="#28a745"
                        strokeColor="#e4e5e6"
                        maxValue="200"
                        setValue="30"
                        limitMax="false"
                        generateGradient="true"
                        ></gauge-js>
                    </div>

                </div>
                <div class="card-footer">
                    <strong>$11.234,00</strong>
                    <span class="float-right"><i class="fa fa-arrow-circle-o-down text-danger"></i> -25%</span>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <div class="card-title text-center h6 mt-3">
                        Bounce Rate
                    </div>

                    <div class="gaugejs-wrap mt-4 mb-0">
                      <gauge-js
                        canvas-id="gaugeid5"
                        style="height:100px;"
                        lines="15"
                        strokeWidth="0.035"
                        length="0.7"
                        lineWidth="0.44"

                        color="#000"
                        colorStart="#ffc107"
                        colorStop="#ffc107"
                        strokeColor="#e4e5e6"
                        maxValue="200"
                        setValue="100"
                        limitMax="false"
                        generateGradient="true"
                        ></gauge-js>
                    </div>

                </div>
                <div class="card-footer">
                    <strong>4%</strong>
                    <span class="float-right"><i class="fa fa-arrow-circle-o-up text-success"></i> -87%</span>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <div class="card-title text-center h6 mt-3">
                        Pageviews
                    </div>

                    <div class="gaugejs-wrap mt-4 mb-0">
                      <gauge-js
                        canvas-id="gaugeid6"
                        style="height:100px;"
                        lines="15"
                        strokeWidth="0.035"
                        length="0.7"
                        lineWidth="0.44"

                        color="#000"
                        colorStart="#f86c6b"
                        colorStop="#f86c6b"
                        strokeColor="#e4e5e6"
                        maxValue="200"
                        setValue="140"
                        limitMax="false"
                        generateGradient="true"
                        ></gauge-js>
                    </div>

                </div>
                <div class="card-footer">
                    <strong>1239</strong>
                    <span class="float-right"><i class="fa fa-arrow-circle-o-up text-success"></i> 117%</span>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-md-5">
            <div class="card-group mb-3">
                <div class="card text-white bg-flat-color-1" style="width:40%">
                    <div class="card-header font-weight-bold text-dark">Pageviews</div>
                    <div class="card-body py-3 pb-0">
                        <ul class="list-unstyled mb-0">
                            <li class="py-2">Overall
                                <span class="font-weight-bold float-right">987.123</span>
                            </li>
                            <li class="py-2">This week
                                <span class="font-weight-bold float-right">9.873</span>
                            </li>
                            <li class="py-2">Yestarday
                                <span class="font-weight-bold float-right">851</span>
                            </li>
                            <li class="py-2">Today
                                <span class="font-weight-bold float-right">184</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card pb-0 no-shadow">
                    <div class="card-header">May 15 - May 22</div>
                    <div class="card-body py-1">
                        <card-line4-chart class="chart-wrapper" style="height:200px;" height="200"/>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header text-white bg-flat-color-1">
                    <div class="font-weight-bold mb-3">Revenue</div>
                    <revenue class="chart-wrapper mb-3" style="height:200px;" height="200"/>
            </div>
            <div class="card-body">
            <revenue-bar
                    class="chart-wrapper px-0"
                    style="height:90px; width: 100%;"
                    barcolor="red"
                    :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                    height="70"
                    />
            </div>
          </div>
        </div>

        <div class="col-md-7">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-check pr-2"></i>Tasks in Progress
                </div>
                <div class="card-body pt-3">
                    <vue-tabs>
                        <v-tab title="Tasks">
                              <table class="table table-hover table-align-middle mb-0">
                                  <thead>
                                      <tr>
                                          <th>Task</th>
                                          <th>Assigned to</th>
                                          <th>Progress</th>
                                          <th class="text-sm-center">Status</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>SEO Optimisation</td>
                                          <td>Charly Brown</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-info" role="progressbar" style="width: 73%; height: 7px;" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-info">
                                              Active
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>App Development</td>
                                          <td>John Smith</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-success" role="progressbar" style="width: 95%; height: 7px;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-success">
                                              Active
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Hire Developers</td>
                                          <td>Megan Holms</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-warning" role="progressbar" style="width: 27%; height: 7px;" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-warning">
                                              Pending
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Growth Hacking</td>
                                          <td>Alan Wane</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-primary" role="progressbar" style="width: 11%; height: 7px;" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-primary">
                                              Active
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>A/B Tests</td>
                                          <td>Irina Cole</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 73%; height: 7px;" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-danger">
                                              Canceled
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Hacking</td>
                                          <td>Alan Wane</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                              <div class="progress-bar bg-primary" role="progressbar" style="width: 11%; height: 7px;" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-primary">
                                              Active
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>New website development</td>
                                          <td>Megan Holms</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-warning" role="progressbar" style="width: 27%; height: 7px;" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-warning">
                                              Pending
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Hacking</td>
                                          <td>Alan Wane</td>
                                          <td>
                                              <div class="progress progress-sm my-2">
                                                  <div class="progress-bar bg-primary" role="progressbar" style="width: 11%; height: 7px;" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </td>
                                          <td class="text-sm-center text-primary">
                                              Active
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                      </v-tab>
                      <v-tab title="Tickets">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>User</th>
                                        <th>Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span class="badge badge-success">Complete</span>
                                        </td>
                                        <td>Jul 25, 2012 11:09</td>
                                        <td>Server problem</td>
                                        <td>Ashley Tan</td>
                                        <td><b>[#199278]</b></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="badge badge-info">In progress</span>
                                        </td>
                                        <td>Jul 25, 2012 11:09</td>
                                        <td>Paypal Issue</td>
                                        <td>Chris Dan</td>
                                        <td><b>[#199276]</b></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="badge badge-danger">Rejected</span>
                                        </td>
                                        <td>Jul 25, 2012 11:09</td>
                                        <td>IE7 Problem</td>
                                        <td>John Grand</td>
                                        <td><b>[#199275]</b></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="badge badge-warning">Suspended</span>
                                        </td>
                                        <td>Jul 25, 2012 11:09</td>
                                        <td>Mobile App Problem</td>
                                        <td>Patricia Doyle</td>
                                        <td><b>[#199273]</b></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="badge badge-info">In progress</span>
                                        </td>
                                        <td>Jul 25, 2012 11:09</td>
                                        <td>Mobile App Problem</td>
                                        <td>Melanie Brown</td>
                                        <td><b>[#199272]</b></td>
                                    </tr>
                                </tbody>
                            </table>
                      </v-tab>
                    </vue-tabs>

                </div>
            </div>
        </div>

        <div class="col-md-6">
          <div class="card">

            <div class="card-header">
              <i class="fa fa-compass icon-bg text-secondary pr-2"></i>Traffic

              <div class="card-actions">
                <a href="#" class="btn-setting text-secondary"><i class="fa fa-cog"></i></a>
                <a href="#" class="btn-minimize text-secondary"><i class="fa fa-arrow-up"></i></a>
                <a href="#" class="btn-close text-secondary"><i class="fa fa-times"></i></a>
              </div>
            </div>

            <div class="card-body">

              <div>Visits
                <span class="font-weight-bold float-right">(40% - 29.703 Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 7px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Unique
                <span class="font-weight-bold float-right">(20% - 24.093 Unique Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%; height: 7px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Pageviews
                <span class="font-weight-bold float-right">(60% - 78.706 Views)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 60%; height: 7px;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>New Users
                <span class="font-weight-bold float-right">(80% - 22.123 Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 80%; height: 7px;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Bounce Rate
                <span class="font-weight-bold float-right">(40.15%)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 7px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Visits
                <span class="font-weight-bold float-right">(40% - 29.703 Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 7px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Unique
                <span class="font-weight-bold float-right">(20% - 24.093 Unique Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%; height: 7px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </div>
          </div>
        </div>


        <div class="col-md-6">
          <div class="row">
            <div class="card">

              <div class="card-header">
                <i class="fa fa-clock-o icon-bg text-secondary pr-2"></i>Timeline

                <div class="card-actions">
                  <a href="#" class="btn-close text-secondary"><i class="fa fa-times"></i></a>
                  <a href="#" class="btn-minimize text-secondary"><i class="fa fa-link"></i></a>
                </div>
              </div>

              <div class="card-body">
                <ul class="timeline">
                  <li>
                    <div class="timeline-badge primary"><i class="fa fa-smile-o"></i></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h5 class="timeline-title">You deleted homepage </h5>
                      </div>
                      <div class="timeline-body">
                        <p>10 minutes ago</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="timeline-badge warning"><i class="fa fa-sun-o"></i></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h5 class="timeline-title">You change your profile picture</h5>
                      </div>
                      <div class="timeline-body">
                        <p>20 minutes ago</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="timeline-badge danger"><i class="fa fa-times-circle-o"></i></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h5 class="timeline-title">You followed john doe</h5>
                      </div>
                      <div class="timeline-body">
                        <p>30 minutes ago</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="timeline-badge success"><i class="fa fa-check-circle-o"></i></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h5 class="timeline-title">Some new content has been added. </h5>
                      </div>
                      <div class="timeline-body">
                        <p>15 minutes ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /# card -->
        </div>

    </div>



    <div class="row">
      <div class="col-md-12">
        <card header-text="Recent orders" header-icon="fa fa-cart-plus">
           <div class="card-body">
              <table class="table table-responsive mt-0 mb-0">
                 <thead>
                    <tr>
                       <th>ID</th>
                       <th>User</th>
                       <th>Fee</th>
                       <th>Status</th>
                       <th class="u-textRight@md">Date</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td data-label="Id"><a href="#">1</a></td>
                       <td data-label="User">Cruz Oneal</td>
                       <td data-label="Fee"><code>$69.00</code></td>
                       <td data-label="Status"><span class="badge badge-secondary">Refunded</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-01-13 22:17</td>
                    </tr>
                    <tr>
                       <td data-label="Id"><a href="#">2</a></td>
                       <td data-label="User">Lula Holder</td>
                       <td data-label="Fee"><code>$86.30</code></td>
                       <td data-label="Status"><span class="badge badge-info">Paid</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-03-15 11:50</td>
                    </tr>
                    <tr>
                       <td data-label="Id"><a href="#">3</a></td>
                       <td data-label="User">Lloyd Murphy</td>
                       <td data-label="Fee"><code>$84.80</code></td>
                       <td data-label="Status"><span class="badge badge-secondary">Refunded</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-04-02 15:12</td>
                    </tr>
                    <tr>
                       <td data-label="Id"><a href="#">4</a></td>
                       <td data-label="User">Lula Holder</td>
                       <td data-label="Fee"><code>$76.90</code></td>
                       <td data-label="Status"><span class="badge badge-secondary">Refunded</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-01-21 08:33</td>
                    </tr>
                    <tr>
                       <td data-label="Id"><a href="#">5</a></td>
                       <td data-label="User">Lloyd Murphy</td>
                       <td data-label="Fee"><code>$36.00</code></td>
                       <td data-label="Status"><span class="badge badge-secondary">Refunded</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-02-18 08:32</td>
                    </tr>
                    <tr>
                       <td data-label="Id"><a href="#">6</a></td>
                       <td data-label="User">Bentley Christensen</td>
                       <td data-label="Fee"><code>$79.00</code></td>
                       <td data-label="Status"><span class="badge badge-secondary">Refunded</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-03-04 02:14</td>
                    </tr>
                    <tr>
                       <td data-label="Id"><a href="#">7</a></td>
                       <td data-label="User">Carol Lancaster</td>
                       <td data-label="Fee"><code>$28.00</code></td>
                       <td data-label="Status"><span class="badge badge-secondary">Refunded</span></td>
                       <td data-label="Date" class="u-textRight@md">2017-03-08 10:09</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </card>
      </div>

      <div class="col-md-12">
        <card header-text="Users" header-icon="fa fa-users">
          <div class="users">
            <table class="table table-responsive table-hover table-outline mb-0">
                <thead class="thead-default">
                    <tr>
                        <th class="text-center"><i class="icon-people"></i></th>
                        <th>User</th>
                        <th class="text-center">Country</th>
                        <th>Usage</th>
                        <th class="text-center">Payment Method</th>
                        <th>Activity</th>
                        <th class="text-center">Satisfaction</th>
                        <th class="text-center"><i class="fa fa-cog"></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">
                            <div class="avatar">
                                <img src="../../images/avatar/1.jpg" class="img-avatar" alt="admin@zebratheme.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </td>
                        <td>
                            <div>Yiorgos Avraamu</div>
                            <div class="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                            </div>
                        </td>
                        <td class="text-center">
                        <img src="../../images/flag/us.png" alt="USA" style="height:24px;">
                        </td>
                        <td>
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>50%</strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                            </div>
                            <bootstrap-progress-bar type="success" :width="50" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                        </td>
                        <td class="text-center">
                            <i class="fa fa-cc-mastercard" style="font-size:24px"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>10 sec ago</strong>
                        </td>
                        <td class="text-center">
                            <div class="gaugejs-wrap sparkline" style="width:34px;height:34px">
                                  <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#20a8d8"
                                    :data="[35,23,56,22, 97, 23, 64]"
                                    height="22"
                                />
                                <span class="value">48%</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            <div class="avatar">
                                <img src="../../images/avatar/2.jpg" class="img-avatar" alt="admin@zebratheme.com">
                                <span class="avatar-status badge-danger"></span>
                            </div>
                        </td>
                        <td>
                            <div>Avram Tarasios</div>
                            <div class="small text-muted">

                                <span>Recurring</span> | Registered: Jan 1, 2015
                            </div>
                        </td>
                        <td class="text-center">
                            <img src="../../images/flag/it.png" alt="Brazil" style="height:24px;">
                        </td>
                        <td>
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>10%</strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                            </div>
                            <bootstrap-progress-bar type="info" :width="10" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                        </td>
                        <td class="text-center">
                            <i class="fa fa-cc-visa" style="font-size:24px"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>5 minutes ago</strong>
                        </td>
                        <td class="text-center">
                            <div class="gaugejs-wrap sparkline" style="width:34px;height:34px">
                                <callout-chart
                                    class="chart-wrapper"
                                    style="mt-2"
                                    bordercolor="#f86c6b"
                                    :data="[78,81,80,22, 10, 5, 21]"
                                    height="22"
                                />
                                <span class="value">61%</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            <div class="avatar">
                                <img src="../../images/avatar/3.jpg" class="img-avatar" alt="admin@zebratheme.com">
                                <span class="avatar-status badge-warning"></span>
                            </div>
                        </td>
                        <td>
                            <div>Quintin Ed</div>
                            <div class="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                            </div>
                        </td>
                        <td class="text-center">
                            <img src="../../images/flag/du.png" alt="India" style="height:24px;">
                        </td>
                        <td>
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>74%</strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                            </div>
                            <bootstrap-progress-bar type="warning" :width="74" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                        </td>
                        <td class="text-center">
                            <i class="fa fa-cc-stripe" style="font-size:24px"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>1 hour ago</strong>
                        </td>
                        <td class="text-center">
                            <div class="gaugejs-wrap sparkline" style="width:34px;height:34px">
                                <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#f8cb00"
                                    :data="[35,23,58,22,97, 23, 64]"
                                    height="22"
                                />
                                <span class="value">33%</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            <div class="avatar">
                                <img src="../../images/avatar/4.jpg" class="img-avatar" alt="admin@zebratheme.com">
                                <span class="avatar-status badge-dark"></span>
                            </div>
                        </td>
                        <td>
                            <div>Enéas Kwadwo</div>
                            <div class="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                            </div>
                        </td>
                        <td class="text-center">
                            <img src="../../images/flag/fr.png" alt="France" style="height:24px;">
                        </td>
                        <td>
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>98%</strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                            </div>
                            <bootstrap-progress-bar type="danger" :width="98" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                        </td>
                        <td class="text-center">
                            <i class="fa fa-paypal" style="font-size:24px"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>Last month</strong>
                        </td>
                        <td class="text-center">
                            <div class="gaugejs-wrap sparkline" style="width:34px;height:34px">
                                <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#4dbd74"
                                    :data="[78,81,80,45, 34, 12, 40]"
                                    height="22"
                                />
                                <span class="value">23%</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            <div class="avatar">
                                <img src="../../images/avatar/6.jpg" class="img-avatar" alt="admin@zebratheme.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </td>
                        <td>
                            <div>Agapetus Tadeáš</div>
                            <div class="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                            </div>
                        </td>
                        <td class="text-center">
                            <img src="../../images/flag/it.png" alt="Spain" style="height:24px;">
                        </td>
                        <td>
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>22%</strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                            </div>
                            <bootstrap-progress-bar type="info" :width="22" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                        </td>
                        <td class="text-center">
                            <i class="fa fa-google-wallet" style="font-size:24px"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>Last week</strong>
                        </td>
                        <td class="text-center">
                            <div class="gaugejs-wrap sparkline" style="width:34px;height:34px">
                                <callout-chart
                                    class="chart-wrapper"
                                    style="mt-2"
                                    bordercolor="#f86c6b"
                                    :data="[78,81,80,22, 10, 5, 21]"
                                    height="22"
                                />
                                <span class="value">78%</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            <div class="avatar">
                                <img src="../../images/avatar/6.jpg" class="img-avatar" alt="admin@zebratheme.com">
                                <span class="avatar-status badge-danger"></span>
                            </div>
                        </td>
                        <td>
                            <div>Friderik Dávid</div>
                            <div class="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                            </div>
                        </td>
                        <td class="text-center">
                            <img src="../../images/flag/es.png" alt="Poland" style="height:24px;">
                        </td>
                        <td>
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>43%</strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                            </div>
                            <bootstrap-progress-bar type="success" :width="43" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                        </td>
                        <td class="text-center">
                            <i class="fa fa-cc-amex" style="font-size:24px"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>Yesterday</strong>
                        </td>
                        <td class="text-center">
                            <div class="gaugejs-wrap sparkline" style="width:34px;height:34px">
                                <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#20a8d8"
                                    :data="[35,23,56,22, 97, 23, 64]"
                                    height="22"
                                />
                                <span class="value">11%</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </card>
      </div>
    </div>


</div>


  </div>
</template>

<script>
    import CardLine1Chart from './charts/CardLine1Chart.vue'
    import CalloutChart from './charts/CalloutChart.vue'
    import CardBarChart from './charts/CardBarChart.vue'
    import CardLine2Chart from './charts/CardLine2Chart.vue'
    import CardLine3 from './charts/CardLine3.vue'
    import MainChart from './charts/MainChart.vue'
    import SocialBoxChart from './charts/SocialBoxChart.vue'
    import SalesChart from './charts/SalesChart.vue'
    import CardLine4Chart from './charts/CardLine4Chart.vue'
    import Revenue from './charts/Revenue.vue'
    import RevenueBar from './charts/RevenueBar.vue'
    import Gauges from './charts/Gauges.vue'
    import AnimatedNumber from '../AnimatedNumber.vue'
    import Dropdown from '../../directives/Dropdown';

    export default {
      name: 'widgets',
      data () {
        return {
          msg: 'Widgets'
        }
      },
     components: {
            CardLine1Chart,
            CalloutChart,
            CardBarChart,
            CardLine2Chart,
            CardLine3,
            MainChart,
            SocialBoxChart,
            SalesChart,
            BasixGauge: Gauges,
            BasixCounter: AnimatedNumber,
            CardLine4Chart,
            Revenue,
            RevenueBar,
            Dropdown
         },
        directives: {
            dropdown: Dropdown
        }
    }
</script>

<style>
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
</style>