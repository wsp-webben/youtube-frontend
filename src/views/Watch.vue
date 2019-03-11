<template>
  <div class="watch">
    <search-bar/>
    <video-detail :id="videoId"/>
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
  props: ['videoId'],
};
</script>
