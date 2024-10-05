export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const delivery = ref('standard')
  const contactDetails = ref({
    fullname: '',
    street: '',
    postalCode: '',
    city: '',
    email: '',
    phone: ''
  })

  const addItem = item => items.value.push(item)
  const removeItem = item => {
    const { id } = item
    const storeIndex = items.value.findIndex(storeItem => storeItem.id === id)
    items.value.splice(storeIndex, 1)
  }

  const setContactDetails = value => (contactDetails.value = value)

  return {
    items,
    contactDetails,
    delivery,
    addItem,
    removeItem,
    setContactDetails
  }
})
