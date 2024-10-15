import type { Product } from '@/interfaces/product'
import type { DeliveryTypes, ContactDetails } from '@/interfaces/cart'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([])
  const delivery = ref<DeliveryTypes>('standard')
  const contactDetails = ref<ContactDetails>({
    fullname: '',
    street: '',
    postalCode: '',
    city: '',
    email: '',
    phone: ''
  })

  const addItem = (item: Product) => items.value.push(item)
  const removeItem = (item: Product) => {
    const { id } = item
    const storeIndex = items.value.findIndex(storeItem => storeItem.id === id)
    items.value.splice(storeIndex, 1)
  }

  const setContactDetails = (value: ContactDetails) =>
    (contactDetails.value = value)

  return {
    items,
    contactDetails,
    delivery,
    addItem,
    removeItem,
    setContactDetails
  }
})
