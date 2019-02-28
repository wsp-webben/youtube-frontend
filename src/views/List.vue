<template>
  <div class="list">
    <h1>This is a list page</h1>
    <search-bar/>
    <video-list>
      <video-list-item/>
    </video-list>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import VideoList from '@/components/VideoList.vue';
import VideoListItem from '@/components/VideoListItem.vue';

export default {
  name: 'list',
  components: {
    SearchBar,
    VideoList,
    VideoListItem,
  },
};
</script>
