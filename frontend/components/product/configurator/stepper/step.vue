<template>
  <div :class="{ disabled: isDisabled }">
    <v-avatar class="badge mr-6 my-2" size="20" :color="color">
      <span>{{ step.index }}</span>
    </v-avatar>
    <span class="category" @click="back">
      {{ step.category }}
    </span>
    <div v-if="!isLastStep" class="vertical-separator"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  step: {
    type: Object,
    default: () => {}
  },
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

const { step, steps, currentStep } = toRefs(props)

const isLastStep = computed(() => step.value.index === steps.value.length)
const isDisabled = computed(() => step.value.index >= currentStep.value)
const color = computed(() =>
  step.value.index === currentStep.value ? 'primary' : '#CECECE'
)

const back = () => !isDisabled.value && emit('back', step.value.index)
</script>

<style lang="scss" scoped>
.badge {
  span {
    font-size: 10px;
    color: white;
  }
}

.vertical-separator {
  width: 1.5px;
  height: 15px;
  margin-left: 10px;
  background: #e2e2e2;
}

.category {
  margin-top: 7px;
  cursor: pointer;
}

.disabled {
  .category {
    cursor: unset;
  }
}
</style>
