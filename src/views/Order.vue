<template>
  <div class="order">
    <h1>Manage Order</h1>
    <b-table :data="items" :columns="columns">
      <template slot-scope="props">
        <b-table-column field="buyer">
          {{ props.row.buyer }}
        </b-table-column>
        <b-table-column field="number">
          {{ props.row.number.substring(0, 6) }}
        </b-table-column>
        <b-table-column field="action">
          <b-button type="is-success">Accept</b-button>
          <b-button type="is-danger">Reject</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          number: '6011532963307994',
          period: 'October',
          buyer: 'Prof. Elfrieda Champlin',
        },
        {
          number: '6011279692791424',
          period: 'May',
          buyer: 'Dr. Baby Olson',
        },
        {
          number: '6011786363002419',
          period: 'November',
          buyer: 'Miss Maggie Kiehn',
        },
        {
          number: '6011605938069970',
          period: 'October',
          buyer: 'Prof. Johanna Padberg',
        },
        {
          number: '6011641449383970',
          period: 'May',
          buyer: 'Princess Zaria Rohan',
        },
        {
          number: '6011532384781544',
          period: 'December',
          buyer: 'Princess Hertha Herzog',
        },
        {
          number: '6011345933355485',
          period: 'December',
          buyer: 'Princess Gertrude Lebsack',
        },
        {
          number: '6011449957279899',
          period: 'November',
          buyer: 'Prof. Janis Kub',
        },
        {
          number: '6011044350476198',
          period: 'October',
          buyer: 'Dr. Laurianne Ullrich',
        },
        {
          number: '6011299276464284',
          period: 'March',
          buyer: 'Mrs. Dasia Becker',
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
</style>
