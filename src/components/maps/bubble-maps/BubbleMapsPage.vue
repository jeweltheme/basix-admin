<template>
  <div class="bubble-maps-page">
      <card header-text="Bubble Maps" class="row">
        <bubble-map v-bind:map-data="bubbleMapData"></bubble-map>
      </card>
  </div>
</template>

<script>
  import BubbleMap from './BubbleMap.vue';
  import BubbleMapData from './BubbleMapData.js';

  export default {
    name: 'bubble-maps-page',
    components: {
      BubbleMap
    },
    data: function () {
      return {
        bubbleMapData: BubbleMapData
      }
    }
  }
</script>

<style lang="scss">
   .bubble-maps-page{
    .card-body{
      height: 600px;
      width: 100%;
      margin: 0;
    }
  }
</style>
