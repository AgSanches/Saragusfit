<template>
  <div class="mission-and-vision-section p-1">
    <form action="#" @submit.prevent="updateContent">
      <div class="row justify-content-start align-items-center">
        <div class="col-12">
          <button class="btn btn-primary" @click="addCoach">
            Add coach
          </button>
        </div>

        <div
          class="col-12 row my-1"
          v-for="(coach, idx) of content.coachs"
          :key="`coach-${idx}`"
        >
          <div class="form-group col-12 p-1">
            <label :for="`inputCoachName-${idx}`">Name {{ idx + 1 }}</label>
            <input
              type="text"
              class="form-control"
              :id="`inputCoachName-${idx}`"
              placeholder="Enter name"
              required
              v-model="coach.name"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputCoachText-${idx}`"
              >First Text {{ idx + 1 }}
            </label>
            <input
              type="text"
              class="form-control"
              :id="`inputCoachText-${idx}`"
              placeholder="Enter text"
              required
              v-model="coach.subtitle"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputCoachContent-${idx}`"
              >Main Content{{ idx + 1 }}</label
            >
            <textarea
              class="form-control"
              :id="`inputCoachContent-${idx}`"
              placeholder="Enter text"
              required
              v-model="coach.description"
            ></textarea>
          </div>

          <button
            class="btn btn-danger mt-1 ml-1"
            @click="removeParagraph(idx)"
            type="button"
          >
            Remove coach
          </button>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";

export default {
  name: "ProccessCoachsComponent",
  data: () => {
    return {
      doc: "coach",
      content: {
        coachs: []
      }
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    addCoach() {
      this.content.coachs.push("");
    },
    removeParagraph(idx) {
      this.$swal({
        title: "Are you sure?",
        text: "You will delete this coach",
        showCancelButton: true
      }).then(value => {
        if (value.isConfirmed) {
          this.content.coachs.splice(idx, 1);
        }
      });
    },
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
