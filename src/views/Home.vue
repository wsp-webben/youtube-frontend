<template>
  <div class="home">
    <searchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import searchBar from '@/components/searchBar.vue';

export default {
  name: 'home',
  components: {
    searchBar,
  },
};
</script>
