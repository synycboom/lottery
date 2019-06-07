<template>
  <div class="order">
    <h1>Manage Order</h1>
    <b-table :data="items" :columns="columns" :loading="loading">
      <template slot-scope="props">
        <b-table-column field="buyer" :class="{'accept': props.row.isAccepted, 'reject': props.row.isRejected}">
          {{ props.row.buyer }}
        </b-table-column>
        <b-table-column field="number" :class="{'accept': props.row.isAccepted, 'reject': props.row.isRejected}">
          {{ props.row.number.substring(0, 6) }}
        </b-table-column>
        <b-table-column field="action" :class="{'accept': props.row.isAccepted, 'reject': props.row.isRejected}">
          <b-button type="is-success" :disabled="props.row.isAccepted || props.row.isRejected" @click="accept(props.row.number)">Accept</b-button>
          <b-button type="is-danger" :disabled="props.row.isAccepted || props.row.isRejected" @click="reject(props.row.number)">Reject</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  methods: {
    accept(number) {
      const targetItem = this.items.find(item => item.number === number);
      targetItem.isAccepted = true;
    },
    reject(number) {
      const targetItem = this.items.find(item => item.number === number);
      targetItem.isRejected = true;
    },
  },
  data() {
    return {
      loading: false,
      items: [
        {
          number: '6011532963307994',
          period: 'October',
          buyer: 'Prof. Elfrieda Champlin',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011279692791424',
          period: 'May',
          buyer: 'Dr. Baby Olson',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011786363002419',
          period: 'November',
          buyer: 'Miss Maggie Kiehn',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011605938069970',
          period: 'October',
          buyer: 'Prof. Johanna Padberg',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011641449383970',
          period: 'May',
          buyer: 'Princess Zaria Rohan',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011532384781544',
          period: 'December',
          buyer: 'Princess Hertha Herzog',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011345933355485',
          period: 'December',
          buyer: 'Princess Gertrude Lebsack',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011449957279899',
          period: 'November',
          buyer: 'Prof. Janis Kub',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011044350476198',
          period: 'October',
          buyer: 'Dr. Laurianne Ullrich',
          isAccepted: false,
          isRejected: false,
        },
        {
          number: '6011299276464284',
          period: 'March',
          buyer: 'Mrs. Dasia Becker',
          isAccepted: false,
          isRejected: false,
        },
      ],
      columns: [
        {
          field: 'buyer',
          label: 'Buyer',
        },
        {
          field: 'number',
          label: 'Number',
        },
        {
          field: 'action',
          label: 'Action',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.order {
  margin: 20px;
}
h1 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
.accept {
  background-color: #deffde;
}
.reject {
  background-color: #ffdee7;
}
</style>
