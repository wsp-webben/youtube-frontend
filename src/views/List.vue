<template>
  <div class="List">
    <h1 class="List__title">This is a list page</h1>
    <search-bar/>
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
