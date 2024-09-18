<template>
  <div class="d-flex my-2">
    <product-configurator-stepper-steps
      :steps="steps"
      :current-step="step"
      class="steps align-self-center"
      @back="back"
    />
    <product-configurator-stepper-content
      :configurator="configurator"
      :selected-configurator="selectedConfigurator"
      class="align-self-center"
    />
  </div>
  <v-btn class="step-btn" color="black" width="200" @click="next">Next</v-btn>
</template>

<script setup>
const props = defineProps({
  configurator: {
    type: Array,
    default: () => []
  }
})

const { configurator } = props

const step = ref(1)
const steps = computed(() =>
  configurator.map(({ category }, index) => ({
    category,
    value: index + 1
  }))
)

const selectedConfigurator = computed(() => configurator[step.value - 1])

const back = () => {
  // TODO Validation
  step.value -= 1
}

const next = () => {
  // TODO Validation
  step.value += 1
}
</script>

<style lang="scss" scoped>
.steps {
  margin-left: -200px;
  width: 200px;
}
</style>
