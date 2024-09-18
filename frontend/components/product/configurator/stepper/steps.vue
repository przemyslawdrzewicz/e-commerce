<template>
  <div>
    <div v-for="{ category, value } in steps" :key="value">
      <div class="d-flex">
        <div class="align-self-center">
          <v-avatar class="mr-6 my-2" :color="stepColor(value)" size="20">
            <span class="number">{{ value }}</span>
          </v-avatar>
          <div v-if="isLastStep(value)" class="separator"></div>
        </div>
        <div
          class="category"
          :class="{ disabled: isDisabled(value) }"
          @click="back(value)"
        >
          {{ category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    default: () => []
  },
  currentStep: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['back'])

const isLastStep = index => index !== props.steps.length
const stepColor = index => (props.currentStep === index ? 'primary' : '#CECECE')
const isDisabled = step => step >= props.currentStep
const back = step => !isDisabled(step) && emit('back')
</script>

<style lang="scss" scoped>
.number {
  font-size: 10px;
  color: white;
}

.separator {
  width: 1.5px;
  height: 15px;
  margin-left: 10px;
  background: #e2e2e2;
}

.category {
  margin-top: 7px;
  cursor: pointer;
}

.category.disabled {
  cursor: unset;
}
</style>
