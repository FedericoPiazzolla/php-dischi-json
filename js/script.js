const { createApp } = Vue;

createApp({

  data() {
    return {
      apiUrl: "server.php",
      discArray: [],
    }
  },
  created() {
    axios
    .get(this.apiUrl)
    .then((resp) => {
      this.discArray = resp.data;
    })
  }

}).mount("#app")