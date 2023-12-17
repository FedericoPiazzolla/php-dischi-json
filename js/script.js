const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "server.php",
      discArray: [],
      selectedDisk: null,
      showDisk: false,
    };
  },
  created() {
    axios.get(this.apiUrl).then((resp) => {
      this.discArray = resp.data;
    });
  },
  methods: {
    getSingleDisk(index) {
      axios
        .get(this.apiUrl, {
          params: {
            id: index,
          },
        })
        .then((resp) => {
          this.selectedDisk = resp.data;
          this.showDisk = true;
        });
    },
    closeDialog() {
      this.showDisk = false;
      this.selectedDisk = null;
    }
  },
}).mount("#app");
