<template>
  <div class="animated fadeIn row">

    <div class="col-md-12">
      <card header-text="3d Switch">
        <basix-switch type="3d" variant="primary" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="3d" variant="secondary" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="3d" variant="success" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="3d" variant="warning" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="3d" variant="info" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="3d" variant="danger" :checked="true"/>
      </card>
    </div><!--/.col-->


    <div class="col-md-6">
      <card header-text="Switch Default">
        <basix-switch type="default" variant="primary" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="secondary" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="success" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="warning" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="info" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="danger" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch Default - Pills">
        <basix-switch type="default" variant="primary" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="secondary" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="success" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="warning" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="info" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="danger" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch Outline">
        <basix-switch type="default" variant="primary-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="secondary-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="success-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="warning-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="info-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="danger-outline" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch Outline - Pills">
        <basix-switch type="default" variant="primary-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="secondary-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="success-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="warning-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="info-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="danger-outline" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch Outline Alternative">
        <basix-switch type="default" variant="primary-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="secondary-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="success-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="warning-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="info-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="danger-outline-alt" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch Outline Alternative - Pills">
        <basix-switch type="default" variant="primary-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="secondary-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="success-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="warning-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="info-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="default" variant="danger-outline-alt" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Text">
        <basix-switch type="text" on="On" off="Off" variant="primary" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="secondary" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="success" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="warning" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="info" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="danger" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Text - Pills">
        <basix-switch type="text" on="On" off="Off" variant="primary" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="secondary" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="success" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="warning" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="info" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="danger" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Text Outline">
        <basix-switch type="text" on="On" off="Off" variant="primary-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="secondary-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="success-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="warning-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="info-outline" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="danger-outline" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Text Outline - Pills">
        <basix-switch type="text" on="On" off="Off" variant="primary-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="secondary-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="success-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="warning-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="info-outline" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="danger-outline" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Text Outline alternative">
        <basix-switch type="text" on="On" off="Off" variant="primary-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="secondary-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="success-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="warning-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="info-outline-alt" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="danger-outline-alt" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Text Outline alternative- Pills">
        <basix-switch type="text" on="On" off="Off" variant="primary-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="secondary-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="success-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="warning-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="info-outline-alt" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="text" on="On" off="Off" variant="danger-outline-alt" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Icon">
        <basix-switch type="icon" variant="primary" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="secondary" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="success" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="warning" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="info" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="danger" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Icon - Pills">
        <basix-switch type="icon" variant="primary" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="secondary" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="success" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="warning" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="info" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="danger" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Icon Outline">
        <basix-switch type="icon" variant="primary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="secondary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="success-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="warning-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="info-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="danger-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Icon Outline- Pills">
        <basix-switch type="icon" variant="primary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="secondary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="success-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="warning-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="info-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="danger-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->


    <div class="col-md-6">
      <card header-text="Switch with Icon Outline alternative">
        <basix-switch type="icon" variant="primary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="secondary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="success-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="warning-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="info-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="danger-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
      </card>
    </div><!--/.col-->

    <div class="col-md-6">
      <card header-text="Switch with Icon Outline alternative- Pills">
        <basix-switch type="icon" variant="primary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="secondary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="success-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="warning-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="info-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        &nbsp;&nbsp;&nbsp;
        <basix-switch type="icon" variant="danger-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
      </card>
    </div><!--/.col-->


  </div>
</template>

<script>
 import Switch from './Switch.vue';
export default {
  name: 'switches',
  components: {
    BasixSwitch : Switch
  },
  computed: {
    icon (icon) {
      return icon
    }
  }
}
</script>
