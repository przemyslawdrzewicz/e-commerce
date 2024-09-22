export const validateConfigValue = (config, currentStep) => {
  const configItem = config[currentStep - 1]
  return !!configItem?.value
}
