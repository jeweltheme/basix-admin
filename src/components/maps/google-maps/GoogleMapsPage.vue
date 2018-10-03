<template>
  <div class="google-maps-page">

      <card header-text="Google Maps" class="row">
            <google-map></google-map>
        </card>

  </div>
</template>

<script>
  import GoogleMap from './GoogleMap.vue';

  export default {
    name: 'google-maps-page',
    components: {
      GoogleMap
    }
  }
</script>

<style lang="scss">
   .google-maps-page{
    .card-body{
      height: 600px;
      width: 100%;
      margin: 0;
    }
  }
</style>
