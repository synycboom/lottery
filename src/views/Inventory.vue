<template>
  <div class="inventory">
    <h1>สลากกินแบ่งทั้งหมด</h1>
    <b-table :loading="loading" :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
import { getInventory } from '@/services/lotteryService';

export default {
  name: 'Inventory',
  data() {
    return {
      loading: true,
      columns: [
        {
          field: 'number',
          label: 'เลขสลากกินแบ่งรัญบาล',
          width: '40',
        },
        {
          field: 'period',
          label: 'เลขงวด',
          width: '40',
        },
      ],
      data: [],
    };
  },
  async mounted() {
    try {
      const data = await getInventory();
      this.data = data;
    } catch (error) {
      console.error(error);
      this.$toast.open({
        message: 'เกิดปัญหาจ้าาาาา',
        type: 'is-danger',
      });
    }

    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.inventory {
  margin: 20px;
}
h1 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
