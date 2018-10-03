<template>
  <li
    class="menu-item-has-children dropdown"
    :to="url"
    :class="{'show': isShow, '': !isShow }"
    @click="handleClick"
  >
    <a href="#" >
      <i class="menu-icon" :class="icon"></i>
      <span class="menu-title-text">{{name}}</span>
    </a>

    <ul
      class="sub-menu children dropdown-menu"
      :class="{'show': isShow, '': !isShow }"
      @click="handleClick"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  data (){
    return{
      isShow: false
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    menuShowClick (e) {
      this.isShow = !this.isShow;
    //  e.target.parentElement.classList.toggle('show')
    },
    handleClick (e) {
      e.preventDefault()
      //e.target.parentElement.classList.toggle('show')
      this.isShow = !this.isShow;
    }
  }
}
</script>
