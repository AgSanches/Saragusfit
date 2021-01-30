<template>
  <div id="the-process" class="the-proccess mx-auto">
    <div
      class="the-proccess-title d-flex justify-content-center align-items-center"
    >
      <div class="line mr-2"></div>
      <h3 class="title font-weight-bold">THE PROCESS</h3>
      <div class="line ml-2"></div>
    </div>

    <div class="the-proccess-steps mt-3">
      <div class="steps-upper d-flex justify-content-around">
        <div class="col-12 col-md-4 col-lg-3 p-1" v-for="(step, idx) in stepsUpper" :key="idx">
          <ProccessStepComponent :step="step"></ProccessStepComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProccessStepComponent from "./partials/ProccessStepComponent";

export default {
  name: "TheProccessComponent",
  components: {
    ProccessStepComponent
  },
  data: () => {
    return {
      stepsUpper: [
        {
          day: 0,
          name: "Intake interview",
          content:
            "We will know you, take initial measurements, and define your needs, goals and preferences"
        },
        {
          day: 7,
          name: "First Impressions",
          content: "Feedback on first-week training. Any doubts or questions?"
        },
        {
          day: 30,
          name: "The Grand Finale",
          content:
            "Take final measurements, customer review, and plan feedback as a whole. Goal reached? + visual representation of your progress"
        }
      ],
      stepsDown: [
        {
          day: 1,
          name: "First Day Of Training",
          content: "Feedback on first-week training. Any doubts or questions?"
        },
        {
          day: 15,
          name: "Half-way Point",
          content: "Feedback, the general feeling, positives, and negatives"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.the-proccess {
  margin-top: 3.5rem;

  .the-proccess-title {
    .title {
      text-align: center;
    }

    .line {
      width: 3rem;
      border-bottom: 3px solid #de93c1;
    }
  }

  .the-proccess-steps {
  }
}
</style>
