 <template>
  <div class>
    <div>
      <div class="mt-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <div class>
                  <form class="form-inline">
                    <div class="form-group">
                      <small id="helpId" class="mr-2">Sort by</small>
                      <label for></label>
                      <select
                        class="form-control mr-3"
                        id="gender"
                        style="height: 48px; width: 120px"
                      >
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>

                      <select class="form-control" id="gender" style="height: 48px; width: 120px">
                        <option value="gender">Status</option>
                        <option value="male">Diabetes</option>
                        <option value="female">Non-Diabetes</option>
                      </select>
                    </div>
                  </form>
                  <!-- <div class="form-group cardform">
                                                    <select class="form-control" id="gender" style="height: 48px;">
                                                        <option value="gender">Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                  </div>-->
                </div>
              </div>
              <div class="col-md-4">
                <div class="cardform">
                  <input class="form-control" placeholder="Search Patient" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
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
                  <td>12th Jan, 2020</td>
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
                    <a href="diagnose.html" class="btn btn-sm btn-dark">
                      <span class="small font-weight-bold">Diagnose</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>12th Jan, 2020</td>
                  <td>Kate Salami</td>
                  <td>21 years</td>
                  <td>
                    <span class="badge badge-danger">
                      <span class="fa fa-minus pr-1"></span>
                      Negative
                    </span>
                  </td>
                  <td>
                    <router-link
                      to="/dashboard/patients/listpatient/2"
                      class="mr-2 btn btn-sm btn-secondary"
                    >
                      <span class="small font-weight-bold">View</span>
                    </router-link>
                    <a href="diagnose.html" class="btn btn-sm btn-dark">
                      <span class="small font-weight-bold">Diagnose</span>
                    </a>
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
  name: "patients",
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
