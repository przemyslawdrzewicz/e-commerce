export const useConfiguratorStore = defineStore('configurator', () => {
  const product = ref({})

  const changeProduct = item => (product.value = item)

  return {
    product,
    changeProduct
  }
})
