<template>
  <div class="leaflet-maps-page">

      <card header-text="Leaflet Maps" class="row">
        <leaflet-map></leaflet-map>
      </card>

  </div>
</template>

<script>
  import LeafletMap from './LeafletMap.vue';

  export default {
    name: 'leaflet-maps-page',
    components: {
      LeafletMap
    }
  }
</script>

<style lang="scss">
  .leaflet-maps-page{
    .card-body{
      height: 600px;
      width: 100%;
      margin: 0;
    }

  }

</style>
