<template>
  <div class="page-header clear-filter" filter-color="dark">
    <div class="page-header-image" style="background-image: url('img/lnd.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="text-left text-white" style="margin-top: 18%;">
              <h1 class="mb-1">
                Modern, Intelligent
                <br />Diabetes Diagnosis Tool
              </h1>
              <p>
                Built for the Medics, Get high accuracy diabetes diagnosis on
                patient's data.
              </p>
              <p class="mt-5">
                <a href="#" class="text-white">
                  Learn More
                  <i class="larrow now-ui-icons arrows-1_minimal-down"></i>
                  <!-- <span class="fa fa-arrow-down larrow"></span> -->
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card ncardbody text-left">
              <div class="card-body">
                <div v-if="!loginCond" class="formins">
                  <h5 class="trackcamp">Create Account</h5>
                  <div class="mt-4">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group cardform">
                          <label for="fname">First Name</label>
                          <input type="text" id="fname" value class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group cardform">
                          <label for="lname">Last Name</label>
                          <input type="text" id="lname" value class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group cardform">
                      <label for="email">Email address</label>
                      <input type="email" id="email" value class="form-control" />
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group cardform mt-1">
                          <label for="password">Password</label>
                          <input type="password" id="password" value class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group cardform mt-1">
                          <label for="confirmPassword">Confirm Password</label>
                          <input type="password" id="confirmPassword" value class="form-control" />
                        </div>
                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <button type="submit" class="btn btn-cust btn-block">Create Account</button>
                    </div>
                    <div class="small mt-4">
                      <p>
                        Already have an account?
                        <a
                          href="#"
                          @click="login"
                          class="text-theme"
                        >Login here</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div v-if="loginCond" class="formins">
                  <h5 class="trackcamp">Login Here</h5>
                  <div class="mt-4">
                    <div class="form-group cardform">
                      <label for="email">Email address</label>
                      <input type="email" id="email" value class="form-control" />
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group cardform mt-1">
                          <label for="password">Password</label>
                          <input type="password" id="password" value class="form-control" />
                        </div>
                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <button type="submit" class="btn btn-cust btn-block">Login</button>
                    </div>
                    <div class="small mt-4">
                      <p>
                        Don't have an account?
                        <a
                          href="#"
                          @click="login"
                          class="text-theme"
                        >Create account</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/layout/MainFooter";
export default {
  name: "index",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      loginCond: false
    };
  },
  methods: {
    login() {
      this.loginCond = !this.loginCond;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
@import "../assets/scss/landing.scss";
</style>
