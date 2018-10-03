<template>

    <animate-number
      mode="auto"
      :from="from"
      :to="to"
      :duration="4000"
      easing="easeOutQuad"
    ></animate-number>

</template>


<script>
    import Vue from 'vue'
    import VueAnimateNumber from 'vue-animate-number'
    Vue.use(VueAnimateNumber)

   export default {
    name: 'basix-counter',
    props: {
      from: {
            type: Number,
            default: 0
        },
        to: {
            type: Number,
            default: 100
        },
        duration: {
            type: Number,
            default: 5000
        },
    },
    methods: {
      formatter: function (num) {
        return num.toFixed(2)
      },

      startAnimate: function () {
        this.$refs.myNum.start()
      }
    }
  }
</script>

<style scoped>
  .iCountUp {
    font-size: 1em;
    margin: 0;
  }
</style>