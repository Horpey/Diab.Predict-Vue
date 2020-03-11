<template>
  <div>
    <div class="wrapper">
      <sidebar />
      <div class="main-panel" id="main-panel">
        <div class="content pt-3">
          <div class="row">
            <div class="col-md-6">
              <h3 class="text-capitalize font-weight-bold">Hi Adeniran!</h3>
            </div>
            <div class="col-md-6">
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-theme"
                  data-toggle="modal"
                  data-target="#modelId"
                >
                  <span class="fa fa-user mr-2"></span>
                  Add Patient
                </button>
                <a class="btn btn-dark-sm">
                  Logout
                  <span class="fas fa-sign-out-alt ml-2"></span>
                </a>
              </div>
            </div>
          </div>

          <sidebar />
          <fade-transition>
            <router-view />
          </fade-transition>

          <!-- <home /> -->
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Patient</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group cardform">
                <label for="pName">Patient's Name</label>
                <input type="text" id="pName" value class="form-control" />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group cardform">
                    <label for="dob">Date of Birth</label>
                    <input id="dob" type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group cardform">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="gender" style="height: 48px;">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group mt-3">
                <button type="submit" class="btn btn-dark">Add Patient</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../layout/Sidebar";
import { FadeTransition } from "vue2-transitions";

import Home from "./Home";
export default {
  name: "dashboard",
  bodyClass: "",
  components: {
    sidebar: Sidebar,
    home: Home,
    "fade-transition": FadeTransition
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/dashboard/index.scss";
</style>
