<template>
  <div class="col-sm mx-2 border border-secondary rounded">
    <h5>{{ title }}</h5>
    <b-table :fields="fields" :items="items">
      <template v-slot:cell(exp)="data">
        {{ exp_names[data.item.exp] }}
      </template>
      <template v-slot:cell(year)="data">
        {{ data.item.year > 0 ? data.item.year + "年" : "1年未満" }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    file: {
      type: String
    }
  },
  data() {
    return {
      items: [],
      fields:[
        { key: "name",  label: "名称" },
        { key: "exp",   label: "経験" },
        { key: "year",  label: "年数" }
      ],
      exp_names: ["趣味", "実務"]
    }
  },
  created: function() {
    this.items = require('@/assets/skills/' + this.file + '.json')
  }
}
</script>

<style scoped>
  h5 {
    margin: 15px;
    font-weight: bold;
  }
</style>