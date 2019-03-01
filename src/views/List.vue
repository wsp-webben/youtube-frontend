<template>
  <div class="List">
    <h1 class="List__title">This is a list page</h1>
    <search-bar/>
    {{ query }}
    <video-list>
      <video-list-item>video 1</video-list-item>
      <video-list-item>video 2</video-list-item>
      <video-list-item>video 3</video-list-item>
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
  props: ['query'],
};
</script>
