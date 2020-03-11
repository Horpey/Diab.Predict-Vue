 <template>
  <div class>
    <div>
      <div class="mt-2">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body mx-3 my-2">
                <p class="mb-2">
                  <span class="fa fa-calendar mr-2"></span>
                  12th Feb, 2020
                </p>
                <h3 class="text-capitalize font-weight-bold mb-0">Delilah Salam</h3>
                <p>43 Years</p>
                <p>
                  <span class="badge badge-danger">
                    <span class="fa fa-plus mr-2"></span>
                    Negative
                  </span>

                  <span class="badge badge-info">Type 2</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="card">
              <div class="card-body">
                <div class>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>Time of check</th>
                        <th>Blood sugar level</th>
                      </tr>
                      <tr>
                        <td>Fasting or before breakfast</td>
                        <td class="text-info">60–90 mg/dl</td>
                      </tr>
                      <tr>
                        <td>2 hours after meal</td>
                        <td class="text-danger">100–120 mg/dl</td>
                      </tr>
                      <tr>
                        <td>Plasma Glucose (any Time)</td>
                        <td class="text-info">2 mmol/L</td>
                      </tr>
                      <tr>
                        <td>Plasma Glucose (Morning)</td>
                        <td class="text-danger">2 mmol/L</td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="table">
                    <tbody>
                      <tr>
                        <th class="text-info">Diabetic Status</th>
                        <th>Normal</th>
                      </tr>
                      <tr>
                        <th class="text-info">Diabetic Type</th>
                        <th>Type 1</th>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-right">
                    <!-- <a href="#" class="btn btn-dark">
                                                        <span class="fa fa-save mr-2"></span>
                    Save</a>-->
                    <a href="#" class="btn btn-outline-primary text-dark">
                      <span class="fa fa-file-download mr-2"></span>
                      Download Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  
 <script>
export default {
  name: "listPatient",
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
