<template>
  <div class="watch">
    <h1>This is a watch page</h1>
    <search-bar/>
    <video-detail/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import VideoDetail from '@/components/VideoDetail.vue';

export default {
  name: 'watch',
  components: {
    SearchBar,
    VideoDetail,
  },
};
</script>
