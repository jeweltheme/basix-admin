<template>
  <div class="auth-layout">
    <div class="nav hidden-lg-up"><router-link class="basix-home" :to="{path: '/'}"></router-link></div>
    <div class="main row">
      <div class="auth-content col-md-6">
        <router-view></router-view>
      </div>
      <div class="auth-wallpaper col-md-6 hidden-md-down">
        <div class="oblique"></div>
        <router-link class="basix-home" :to="{path: '/'}"><img src="../images/logo.png" alt="Logo"></router-link>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="scss">


  .auth-layout {
    height: 100vH;
    margin: 0;

    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: #333;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .basix-home {
          z-index: 2;
          font-size: 2.625rem;
          color: #1ec260;
        }
        .oblique {
          position: absolute;
          background-color: #282828;
          left: calc(50% - 23%/2);
          transform: rotate(150deg);
          width: 27%;
          height: 115%;
        }
      }
    }

  }
</style>