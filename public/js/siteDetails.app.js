var siteDetailsApp = new Vue({
  el: '#siteDetailsMain',
  data: {
    siteDetails: [],
  },

  methods: {

    gotoTurbine(tid, sid) {
      console.log(sid);
      window.location = 'http://ec2-34-222-243-254.us-west-2.compute.amazonaws.com/dashboard.html?turbineDeployedId=1&siteId=1';
    }
  },

  created() {

    const url = new URL(window.location.href);
    console.log(url);
    const siteId = url.searchParams.get("siteId");
    console.log(siteId);
    this.siteId = siteId;

    fetch('api/turbineDeployed.php?siteId=' + siteId)
      .then(response => response.json())
      .then(json => {
        siteDetailsApp.siteDetails = json
      })
      .catch(err => {
        console.log('ERROR:');
        console.log(err);
      })
  }
})
