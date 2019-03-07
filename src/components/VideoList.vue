<template>
  <section class="VideoList">
    <ul class="VideoList__list">
      <video-list-item v-for="video in videos" :video="video" :key="video.id"/>
    </ul>
  </section>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue';
import search from '@/services/search';

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: ['query'],
  data() {
    return {
      videos: [],
    };
  },
  created() {
    search(this.query)
      .then((res) => {
        this.videos = res;
      });
  },
};
</script>
