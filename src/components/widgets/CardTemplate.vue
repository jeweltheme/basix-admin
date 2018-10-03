<template>
    <div class="card" :class="{'noheader': !headerText}">
        <div class="card-header">
            <i :class="headerIcon" v-if="headerIcon" class="mr-2"></i>
          <strong class="card-title" v-if="headerText">{{headerText}}</strong>
          <small v-if="smallText">{{smallText}}</small>
      </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="footerText">
            {{ footerText }}
        </div>
    </div>
</template>


<script>
  export default {
    name: 'card-template',

    props: [
        'headerIcon',
        'headerText',
        'footerText',
        'smallText'
    ]
}
</script>

<style scoped>
    .noheader .card-header{
        display: none;
    }
</style>