var clientApp = new Vue({
  el: '#clientMain',
  data: {
    client: [],
    clientForm: { },
  },

methods: {

  fetchClients(){
    fetch('api/client.php')
    .then( response => response.json() )
    .then( json => {clientApp.client = json} )
    .catch( err => {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    })
  },

  gotoClient(cid) {
      window.location = 'comment.html?clientId=' + cid;
    }
},

  created () {

    this.fetchClients();

  }
})
