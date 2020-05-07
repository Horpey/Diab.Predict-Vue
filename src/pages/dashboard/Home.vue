 <template>
  <div class>
    <div class="text-center mt-5" v-if="loading">
      <img src="img/loadertheme.svg" alt="loading" height="50"/>
    </div>
    <div v-if="!loading">
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
                <tr v-for="(patient, index) in startFrom(patients) " :key="index">
                  <td>{{index + 1}}</td>
                  <td>{{ formatData(patient.created_at) }}</td>
                  <td>{{patient.name}}</td>
                  <td>{{getAge(patient.dob)}}</td>
                  <td>
                    {{patient.diagnosis}}
                    <!-- <span class="badge badge-info">
                      <span class="fa fa-plus pr-1"></span>
                      Positive
                    </span> -->
                  </td>
                  <td>
                   <router-link
                      :to="{path: '/dashboard/diagnose/' + patient.uuid, query: {dob: patient.dob}}"
                      class="btn btn-sm btn-dark"
                    >
                      <span class="small font-weight-bold">Diagnose</span>
                    </router-link>
                    <router-link
                      :to="{path: '/dashboard/patients/' + patient.uuid, query: {dob: patient.dob}}"
                      class="ml-2 btn btn-sm btn-secondary"
                    >
                      <span class="small font-weight-bold">View</span>
                    </router-link>
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
    return {
      loading: false,
      patients: []
    };
  },
  mounted(){
    this.loading = true
    this.getPatients()
  },
  methods: {
    getPatients(){
      this.$store
      .dispatch("getPatients")
      .then(resp => {
        this.loading = false
          console.log(resp.data.data)
          this.patients = resp.data.data;
      })
      .catch(err => {
        console.log(err);
        this.loading = false
        this.$toast.info("Unable to load patients data, Try again!")
      });
    },
    formatData(created){
      var moment = require('moment');
      return moment(created).format("Do MMM YYYY");
    },
    getAge(dob){
      var moment = require('moment');
      return moment(dob).fromNow(true);
    },
    startFrom(arr) {
      return arr.reverse().slice(0,2);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/dashboard/index.scss";
.el-date-editor.el-input .el-input__inner {
    padding-left: 30px !important;
    border-radius: 0px !important;
    height: 47px !important;
}
.el-year-table td .cell{
  color: white!important;
}
</style>
