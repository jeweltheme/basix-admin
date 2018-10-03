<template>
  <transition name="slide" :duration="duration">
    <div v-show="show" class="modal-container">
      <div class="modal" @click.self="clickMask">
        <div class="modal-dialog" :class="modalClass">
          <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
              <slot name="header">
                <div class="modal-title">
                  <slot name="title"></slot>
                </div>
              </slot>
            </div>
            <!--Container-->
            <div class="modal-body">
              <slot></slot>
            </div>
            <!--Footer-->
            <div class="modal-footer">
              <slot name="footer" >
                <button type="button" class="mt-3" :class="okClass" @click="ok">{{okText}}</button>
                <button type="button" class="mt-3" :class="cancelClass" @click="cancel" data-dismiss="modal">{{cancelText}}</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'basix-modal',
    props: {
      transition: {
        type: String,
        default: 'modal'
      },
      small: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      force: {
        type: Boolean,
        default: false
      },
      okText: {
        type: String,
        default: 'CONFIRM'
      },
      cancelText: {
        type: String,
        default: 'CANCEL'
      },
      okClass: {
        type: String,
        default: 'btn btn-primary'
      },
      cancelClass: {
        type: String,
        default: 'btn btn-secondary'
      }
    },
    data () {
      return {
        show: false,
        duration: 200
      }
    },
    computed: {
      modalClass () {
        return {
          'modal-lg': this.large,
          'modal-sm': this.small
        }
      }
    },
    created () {
      if (this.show) {
        document.body.className += ' modal-open'
      }
    },
    beforeDestroy () {
      document.body.className = document.body.className.replace(/\s?modal-open/, '')
    },
    watch: {
      show (value) {
        if (value) {
          document.body.className += ' modal-open'
        } else {
          window.setTimeout(() => {
            document.body.className = document.body.className.replace(/\s?modal-open/, '')
          }, this.duration)
        }
      }
    },
    methods: {
      ok () {
        this.$emit('ok')
        this.show = false
      },
      cancel () {
        this.$emit('cancel')
        this.show = false
      },
      clickMask () {
        if (!this.force) {
          this.cancel()
        }
      },
      open () {
        this.show = true
      }
    }
  }
</script>



<style lang="scss">
  // For Transitioning
  .slide-enter{
  }
  .slide-enter-active{
    animation: slide-in 3s fade forwards;
  }
  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 3s fade forwards;
  }

  @keyframes slide-in{
    from{
      transform: translateY(250px);
    }
    to{
     transform: translateY(0);
    }
  }
  @keyframes slide-out{
    from{
      transform: translateY(0);
    }
    to{
     transform: translateY(250px);
    }
  }



  .modal {
    display: block;
  }

  .modal-dialog, .modal-backdrop {
    transition: all .5s ease;
  }

  .modal-enter .modal-dialog, .modal-leave-active .modal-dialog {
    opacity: 0;
    transform: translateY(-30%);
  }

  .modal-enter .modal-backdrop, .modal-leave-active .modal-backdrop {
    opacity: 0;
  }

  .modal-backdrop {
    opacity: 0.5;
  }

  //Modal styles

  .modal-header {
    height: 55px;
    padding: 0 1.6rem;
    border-bottom: 2px solid #eee;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .modal-content {
    border-radius: 0;
  }

  .modal-footer {
    justify-content: center;
    padding: 0 2px;
    padding-bottom: 5px;
    flex-wrap: wrap;
    .btn {
      margin: 0 10px 20px 10px;
    }
  }


  </style>
