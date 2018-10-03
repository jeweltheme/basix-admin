<template>
  <div class="alerts">
    <div class="row">
      <div class="col-md-6">

        <div class="card">
          <div class="card-header">
            <strong class="card-title">Alerts</strong>
          </div>
          <div class="card-body">
              <div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!
              </div>
              <div class="alert alert-secondary" role="alert">
                This is a secondary alert—check it out!
              </div>
              <div class="alert alert-success" role="alert">
                This is a success alert—check it out!
              </div>
              <div class="alert alert-danger" role="alert">
                This is a danger alert—check it out!
              </div>
          </div>
        </div>


      </div>


      <div class="col-md-6">

          <div class="card">
              <div class="card-header">
                <strong class="card-title">Dismissing Alerts</strong>
              </div>
              <div class="card-body">
                  <basix-alert type="success" :withCloseBtn="true">
                    <span class="badge badge-pill badge-success">Success</span>
                    You successfully read this important alert.
                  </basix-alert>
                  <basix-alert type="primary" :withCloseBtn="true">
                    <span class="badge badge-pill badge-primary">Success</span>
                    You successfully read this important alert.
                  </basix-alert>
                  <basix-alert type="warning" :withCloseBtn="true">
                    <span class="badge badge-pill badge-warning">Warning</span>
                    You successfully read this important alert.
                  </basix-alert>
                  <basix-alert type="danger" :withCloseBtn="true">
                    <span class="badge badge-pill badge-danger">Danger</span>
                    You successfully read this important alert.
                  </basix-alert>
              </div>
          </div>


      </div>
    </div>
  </div>
</template>