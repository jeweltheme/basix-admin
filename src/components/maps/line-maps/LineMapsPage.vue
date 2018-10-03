<template>
  <div class="line-maps-page">
      <card header-text="Line Maps" class="row">
        <line-map v-bind:map-data="lineMapData"></line-map>
      </card>
  </div>
</template>

<script>
  import LineMap from './LineMap.vue';
  import LineMapData from './LineMapData.js';

  export default {
    name: 'line-maps-page',
    components: {
      LineMap
    },
    data: function () {
      return {
        lineMapData: LineMapData
      }
    }
  }
</script>

<style lang="scss">
   .line-maps-page{
    .card-body{
      height: 600px;
      width: 100%;
      margin: 0;
    }
  }
</style>
