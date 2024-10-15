import type { Product } from '@/interfaces/product'

export const useConfiguratorStore = defineStore('configurator', () => {
  const product = ref<Product>()

  const changeProduct = (item: Product) => (product.value = item)

  return {
    product,
    changeProduct
  }
})
