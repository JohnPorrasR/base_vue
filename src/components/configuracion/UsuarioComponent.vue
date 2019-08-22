<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3>Elementos</h3>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table v-model="selected" :headers="headers" :items="items" :search="search" multi-sort class="elevation-1">
            <template v-slot:item.calories="{ item }">
              <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      selected:[],
      search: '',
      headers: [
        { text: 'ID', value: 'id', sortable: false },
        { text: 'Dessert (100g serving)', value: 'name' },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat', sortable: false },
        { text: 'Carbs (g)', value: 'carbs', sortable: false },
        { text: 'Protein (g)', value: 'protein', sortable: false },
        { text: 'Iron (%)', value: 'iron', sortable: false },
      ],
      items: [
        {
          id: 1,
          name: 'Frozen Yogurt',
          calories: 200,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          id: 2,
          name: 'Frozen Yogurt cero grasa',
          calories: 200,
          fat: 6.0,
          carbs: 24,
          protein: 5.0,
          iron: '2%',
        },
        {
          id: 3,
          name: 'Eclair',
          calories: 300,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          id: 4,
          name: 'Cupcake',
          calories: 300,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          id: 5,
          name: 'Gingerbread',
          calories: 400,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          id: 6,
          name: 'Jelly bean',
          calories: 400,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          id: 7,
          name: 'Lollipop',
          calories: 400,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          id: 8,
          name: 'Honeycomb',
          calories: 400,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          id: 9,
          name: 'Donut',
          calories: 500,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          id: 10,
          name: 'KitKat',
          calories: 500,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
  methods:{
    getColor (calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
  },
};
</script>
