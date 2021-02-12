<template>
  <div class="mission-and-vision-sections">
    <form action="#" @submit.prevent="updateContent">
      <div class="form-group">
        <label for="inputMission">Our Mission</label>
        <input
          type="text"
          class="form-control"
          id="inputMission"
          aria-describedby="emailHelp"
          placeholder="Enter our mission"
          required
          v-model="content.mission"
        />
      </div>
      <div class="form-group">
        <label for="inputVision">Our Vision</label>
        <input
          type="text"
          class="form-control"
          id="inputVision"
          placeholder="Enter our vision"
          required
          v-model="content.vision"
        />
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";


export default {
  name: "ProccessMissionAndVisionComponent",
  data: () => {
    return {
      doc: "ourMissionAndVision",
      content: {
        mission: "",
        vision: ""
      }
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    updateContent() {

      const dataToUpdate = {
        content: this.content,
        doc: this.doc
      };

      this.updateDocGeneric(dataToUpdate)
        .then(() => {
          this.$swal(displaySuccessSwal);
        })
        .catch(() => {
          this.$swal(displayErrorSwal);
        });
    }
  },
  created() {
    this.getText(this.doc).then(content => {
      this.content = content;
    });
  }
};
</script>

<style scoped lang="scss"></style>
