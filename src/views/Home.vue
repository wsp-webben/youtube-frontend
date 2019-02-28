<template>
  <div class="home">
    <index>
      <search-bar/>
    </index>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import Index from '@/components/Index.vue';

export default {
  name: 'home',
  components: {
    SearchBar,
    Index,
  },
};
</script>
