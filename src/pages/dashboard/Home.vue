 <template>
  <div class>
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
                <router-link to="dashboard/patients" class="btn btn-dark">View All</router-link>
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
                    <router-link
                      to="/dashboard/patients/listpatient/2"
                      class="mr-2 btn btn-sm btn-secondary"
                    >
                      <span class="small font-weight-bold">View</span>
                    </router-link>
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
                    <router-link
                      to="/dashboard/patients/listpatient/2"
                      class="mr-2 btn btn-sm btn-secondary"
                    >
                      <span class="small font-weight-bold">View</span>
                    </router-link>
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
</template>  
 <script>
export default {
  name: "home",
  bodyClass: "",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/dashboard/index.scss";
</style>
