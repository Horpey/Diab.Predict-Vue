<template>
  <div>
    <div class="wrapper">
      <!-- <sidebar /> -->
      <div class="main-panel" id="main-panel">
        <div class="content pt-3">
          <div class>
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
            <div>
              <div class="mt-2">
                <div class="row">
                  <div class="col-md-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-3">
                            <h3 class="mb-0 mt-2 text-theme">
                              <span class="fa fa-users"></span>
                            </h3>
                          </div>
                          <div class="col-9">
                            <p class="mb-0">Patients</p>
                            <h4 class="my-0">24</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-3">
                            <h3 class="mb-0 mt-2 text-theme">
                              <span class="fa fa-users"></span>
                            </h3>
                          </div>
                          <div class="col-9">
                            <p class="mb-0">Diabetic Patients</p>
                            <h4 class="my-0">9</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-3">
                            <h3 class="mb-0 mt-2 text-theme">
                              <span class="fa fa-users"></span>
                            </h3>
                          </div>
                          <div class="col-9">
                            <p class="mb-0">Non-diabetic Patients</p>
                            <h4 class="my-0">15</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-3">
                            <h3 class="mb-0 mt-2 text-theme">
                              <span class="fa fa-percent"></span>
                            </h3>
                          </div>
                          <div class="col-9">
                            <p class="mb-0">Diabetic Rate</p>
                            <h4 class="my-0">
                              37.8
                              <sub>%</sub>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-md-8">
                        <h4 class="my-0">Chart</h4>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="panel-header-lgxx mt-4">
                      <canvas id="distanceChart"></canvas>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-md-8">
                        <h4 class="my-0">Recent Patient</h4>
                      </div>
                      <div class="col-md-4 text-right">
                        <a href="patients.html" class="btn btn-dark">View All</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <table class="table sitetable table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Patient's Name</th>
                          <th>Age</th>
                          <th>Diabetic Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>12th Jan, 20202</td>
                          <td>Kate Salami</td>
                          <td>21 years</td>
                          <td>
                            <span class="badge badge-info">
                              <span class="fa fa-plus pr-1"></span>
                              Positive
                            </span>
                          </td>
                          <td>
                            <button class="btn btn-sm btn-secondary">
                              <span class="small font-weight-bold">View</span>
                            </button>
                            <button class="btn btn-sm btn-dark">
                              <span class="small font-weight-bold">Download Report</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>12th Jan, 20202</td>
                          <td>Kate Salami</td>
                          <td>21 years</td>
                          <td>
                            <span class="badge badge-info">
                              <span class="fa fa-plus pr-1"></span>
                              Positive
                            </span>
                          </td>
                          <td>
                            <button class="btn btn-sm btn-secondary">
                              <span class="small font-weight-bold">View</span>
                            </button>
                            <button class="btn btn-sm btn-dark">
                              <span class="small font-weight-bold">Download Report</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
//import Sidebar from "@/layout/Sidebar";
export default {
  name: "dashboard",
  bodyClass: "",
  components: {
    //sidebar: Sidebar
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
