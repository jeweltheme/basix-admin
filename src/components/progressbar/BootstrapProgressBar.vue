<template>
     <div class="progress mb-2">
          <div :class="progressClass" role="progressbar" v-if="width" :style="{ 'max-width': (width) + '%' }">
            <span class="title" v-if="width">{{ this.width }}%</span>
        </div>
     </div>
</template>

<script>
export default{
    name: 'bootstrap-progress-bar',
    computed: {
      progressClass () {
        return {
          'progress-bar': this.width,
          'bg-success': this.type === 'success',
          'bg-primary': this.type === 'primary',
          'bg-secondary': this.type === 'secondary',
          'bg-danger': this.type === 'danger',
          'bg-warning': this.type === 'warning',
          'bg-info': this.type === 'info',

          // Stripped
          'bg-success progress-bar-striped': this.type === 'success striped',
          'bg-primary progress-bar-striped': this.type === 'primary striped',
          'bg-secondary progress-bar-striped': this.type === 'secondary striped',
          'bg-danger progress-bar-striped': this.type === 'danger striped',
          'bg-warning progress-bar-striped': this.type === 'warning striped',
          'bg-info progress-bar-striped': this.type === 'info striped',


        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'success'
      },
      // label: {
      //   type: String,
      //   default: ''
      // },
      width: {
        type: Number,
        default: '20'
      }
    }
}

</script>

<style scoped>
 .progress-bar {
      width: 0;
      animation: progress 1.5s ease-in-out forwards;

      .title {
        opacity: 0;
        animation: show 0.35s forwards ease-in-out 0.5s;
      }
    }

    @keyframes progress {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes show  {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
</style>