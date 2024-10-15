<template>
  <div class="step" :class="{ disabled: isDisabled }">
    <v-avatar class="badge mr-6 my-2" size="20" :color="color">
      <span>{{ index }}</span>
    </v-avatar>
    <span class="category" @click="back">{{ category }}</span>
    <div class="vertical-separator"></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  index: number
  category: string
  currentStep: number
}

const props = defineProps<Props>()
const { index, category, currentStep } = toRefs(props)

const emit = defineEmits<{
  back: [value: number]
}>()

const back = () => !isDisabled.value && emit('back', index.value)

const isDisabled = computed(() => index.value >= currentStep.value)
const isCurrentStep = computed(() => index.value === currentStep.value)
const color = computed(() => (isCurrentStep.value ? 'primary' : '#CECECE'))
</script>

<style lang="scss" scoped>
.step:last-child {
  .vertical-separator {
    display: none;
  }
}

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
