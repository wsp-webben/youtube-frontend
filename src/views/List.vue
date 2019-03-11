<template>
  <div class="List">
    <search-bar/>
    <h1 class="List__title">Best videos about <span class="List__query">{{ query }}</span>:</h1>
    <video-list :query="query"/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import VideoList from '@/components/VideoList.vue';

export default {
  name: 'list',
  components: {
    SearchBar,
    VideoList,
  },
  props: ['query'],
};
</script>

<style lang="scss">
  .List__title {
    font-size: 30px;
    margin-top: 0.5em;
    margin-bottom: 1em;
    padding: 0 20px;
  }

  .List__query {
    color: var(--main-color);
  }

  @media (max-width: 450px) {
    .List__title {
      font-size: 20px;
    }
  }
</style>
