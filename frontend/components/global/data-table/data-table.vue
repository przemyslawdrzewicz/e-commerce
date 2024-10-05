<template>
  <client-only>
    <table class="data-table">
      <tr>
        <th v-for="header in headers" :key="header.value" :class="header.class">
          {{ header.title }}
        </th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="header in headers" :key="header.value" :class="header.class">
          <slot :name="header.value" :item="item" />
          <div v-if="header.type === 'price'">
            {{ formatPrice(item[header.value]) }}
          </div>
          <div v-else>{{ item[header.value] }}</div>
        </td>
        <td class="text-right">
          <slot name="actions" :item="item" />
        </td>
      </tr>
    </table>
  </client-only>
</template>

<script setup>
import { formatPrice } from '@/utils/global'

const props = defineProps({
  headers: {
    type: Array,
    default: () => []
  },
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.data-table {
  width: 100%;
  border-spacing: 15px 0;
  font-weight: 300;

  th {
    text-align: left;
    font-weight: 500;
    padding-bottom: 10px;
  }
}
</style>
