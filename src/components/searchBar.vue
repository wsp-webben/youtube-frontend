<template>
  <div class="SearchBar">
    <input type="text" class="SearchBar__input" v-model="query">
    <search-select v-show="showSelect" :options="options"/>
  </div>
</template>

<script>
import search from '@/services/search';
import SearchSelect from '@/components/SearchSelect.vue';

export default {
  name: 'SearchBar',
  components: {
    SearchSelect,
  },
  data() {
    return {
      query: '',
      showSelect: false,
      options: [],
    };
  },
  watch: {
    query(apiQuery) {
      if (apiQuery.length > 1) {
        search(apiQuery)
          .then(this.showSearchresult)
          .catch(err => console.log(err));
      } else {
        this.showSelect = false;
      }
    },
  },
  methods: {
    showSearchresult(data) {
      this.options = data.map(item => item.snippet.title);
      this.showSelect = true;
    },
  },
};
</script>


<style lang="scss">
  .SearchBar {
    position: relative;
    max-width: 300px;
    margin: 0 auto;
  }

  .SearchBar__input {
    width: 100%;
    margin: 0 auto;
    padding: 15px 8px;
    border: 1px solid #000;
  }

  .SearchBar__select {
    // position: absolute;
    top: 100%;
    left: 0;
    padding: 5px;
  }
</style>
