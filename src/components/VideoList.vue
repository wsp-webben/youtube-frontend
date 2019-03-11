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

<style lang="scss">
  $gap: 20px;

  .VideoList__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: $gap;
    grid-row-gap: $gap * 2;
    max-width: var(--wrapper-width);
    margin: 0 auto;
    padding: $gap;
    padding-top: 0;

    list-style: none;
  }

  @media (max-width: 900px) {
    .VideoList__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 450px) {
    .VideoList__list {
      display: block;
    }
  }
</style>
