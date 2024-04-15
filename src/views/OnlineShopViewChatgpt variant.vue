<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      <button @click="toggleAccordion(index)">
        {{ category.name }}
      </button>
      <div v-if="category.open">
        <ul>
          <li v-for="(subcategory, subIndex) in category.subcategories" :key="subIndex">
            <button @click="selectSubcategory(subcategory)">
              {{ subcategory.name }}
            </button>
            <ul v-if="subcategory.options.length">
              <li v-for="(option, optionIndex) in subcategory.options" :key="optionIndex">
                <button @click="selectOption(option)">
                  {{ option }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Engine',
          open: false,
          subcategories: [
            {
              name: 'Type',
              options: ['Gasoline', 'Diesel', 'Electric']
            }
          ]
        },
        {
          name: 'Oil',
          open: false,
          subcategories: [
            {
              name: 'Type',
              options: ['Synthetic', 'Conventional']
            },
            {
              name: 'Viscosity',
              options: ['5W-30', '10W-40', '20W-50']
            }
          ]
        },
        {
          name: 'Lights',
          open: false,
          subcategories: [
            {
              name: 'Type',
              options: ['LED', 'Halogen', 'Xenon']
            }
          ]
        },
        {
          name: 'Wheels',
          open: false,
          subcategories: [
            {
              name: 'Material',
              options: ['Alloy', 'Steel']
            },
            {
              name: 'Size',
              options: ['15"', '16"', '17"', '18"', '19"']
            }
          ]
        },
        {
          name: 'Saps',
          open: false,
          subcategories: [
            {
              name: 'Type',
              options: ['Red', 'Green', 'Blue']
            }
          ]
        },
        {
          name: 'Wings',
          open: false,
          subcategories: [
            {
              name: 'Spiciness',
              options: ['Mild', 'Medium', 'Hot']
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.categories[index].open = !this.categories[index].open;
    },
    selectSubcategory(subcategory) {
      // Handle subcategory selection
    },
    selectOption(option) {
      // Handle option selection
    }
  }
};
</script>
