<template>
  <client-only>
    <div class="shopping-cart">
      <div class="cart">
        <div class="title mb-8 mt-13">Shopping cart</div>
        <cart :items="items" />
      </div>
    </div>
  </client-only>
</template>

<script setup>
let items = [
  {
    name: 'Sofia',
    quantity: 1,
    price: '200',
    image: '/products/sofia/sofia-white-yellow.png',
    configurator: [
      {
        id: 2,
        category: 'Seat',
        type: 'color',
        colors: [
          { code: 'white', color: '#D9D9D3' },
          { code: 'green', color: '#46BB9C' }
        ],
        value: '#D9D9D3',
        code: 'seat'
      },
      {
        id: 3,
        category: 'Legs',
        type: 'color',
        colors: [{ code: 'yellow', color: '#6DB7BB' }],
        value: '#6DB7BB',
        code: 'legs'
      },
      {
        id: 1,
        category: 'Width',
        type: 'number',
        code: 'width',
        params: {
          placeholder: 'cm'
        },
        value: ''
      }
    ]
  }
]

// i think it should be added before save in store
items = items.map(item => ({
  ...item,
  configurations: item.configurator
    .map(config => {
      const { type, category, value, params } = config
      if (type === 'color') {
        const { code } = config.colors.find(
          ({ color }) => color === config.value
        )
        return `${category} ${code}`
      }

      if (type === 'number')
        return `${category} ${value} ${params?.placeholder}`

      return `${category} ${value}`
    })
    .join(', ')
}))
</script>

<style scoped>
.shopping-cart {
  display: flex;
  justify-content: center;
  height: 80vh;
}

.cart {
  width: 1400px;
}

.title {
  font-size: 58px;
  font-weight: bold;
}
</style>
