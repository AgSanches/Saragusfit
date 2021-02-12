<template>
  <div class="mission-and-vision-section p-1">
    <form action="#" @submit.prevent="updateContent">
      <div class="row justify-content-start align-items-center">
        <div class="col-12">
          <button class="btn btn-primary" @click="addItem">
            Add plan
          </button>
        </div>

        <div
          class="col-12 row my-1"
          v-for="(plan, idx) of content.plans"
          :key="`plan-${idx}`"
        >
          <div class="form-group col-12 p-1">
            <label :for="`inputPlanName-${idx}`">Name {{ idx + 1 }}</label>
            <input
              type="text"
              class="form-control"
              :id="`inputPlanName-${idx}`"
              placeholder="Enter name"
              required
              v-model="plan.name"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputSubtitle-${idx}`">Subtitle {{ idx + 1 }}</label>
            <input
              type="text"
              class="form-control"
              :id="`inputSubtitle-${idx}`"
              placeholder="Enter subtitle"
              required
              v-model="plan.subtitle"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputPrice-${idx}`">Price {{ idx + 1 }}</label>
            <input
              type="number"
              class="form-control"
              :id="`inputPrice-${idx}`"
              placeholder="Enter Price"
              required
              v-model="plan.price"
            />
          </div>

          <div class="form-group col-12 p-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="plan.isOffer"
                :id="`inputIsOffer-${idx}`"
              />
              <label class="form-check-label" :for="`inputIsOffer-${idx}`">
                It's is on sale?
              </label>
            </div>
          </div>

          <button
            class="btn btn-danger mt-1 ml-1"
            @click="removeItem(idx)"
            type="button"
          >
            Remove plan
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
  name: "ProccessPlanSectionComponent",
  data: () => {
    return {
      doc: "plansSection",
      content: {
        plans: []
      }
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    addItem() {
      this.content.plans.push("");
    },
    removeItem(idx) {
      this.$swal({
        title: "Are you sure?",
        text: "You will delete this plan",
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
