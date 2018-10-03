<template>
  <div class="register">

    <card header-text="Create New Account">
      <form method="post" action="/auth/register" name="register">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
            <input type="email" id="email" name="email" placeholder="Email" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
            <input type="password" id="password" name="password" placeholder="Password" class="form-control">
          </div>
        </div>
        <div class="abc-checkbox abc-checkbox-primary">
          <input id="checkbox1" type="checkbox" checked>
          <label for="checkbox1">
            <span class="abc-label-text">I agree to <router-link to="">Terms of Use.</router-link></span>
          </label>
        </div>
        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
          <button class="btn btn-primary" type="submit">
            Sign Up
          </button>
          <button type="submit" class="btn btn-primary btn-md float-right">
            <router-link class='link text-light float-right' :to="{name: 'login'}">Already joined?</router-link>
          </button>
        </div>
      </form>
    </card>

  </div>
</template>

<script>
  export default {
    name: 'Register'
  }
</script>

<style lang="scss">
  .register {

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 2.6875rem;
    }
  }
</style>
