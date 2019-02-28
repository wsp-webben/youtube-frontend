<template>
  <div>
    <input type="text" class="searchBar" v-model="query">
    <p>{{ query }}</p>
  </div>
</template>

<script>
// import showKittens from '@/services/search';

// showKittens();

export default {
  name: 'SearchBar',
  data() {
    return {
      query: '',
    };
  },
};
</script>


<style lang="scss">
  .searchBar {
    display: block;
    margin: 0 auto;
    padding: 5px;
  }
</style>
