<template>
  <div class="VideoDetail">
    <div class="VideoDetail__container">
      <iframe class="VideoDetail__player" :src="`http://www.youtube.com/embed/${id}`" frameborder="0"/>
    </div>
    <div class="VideoDetail__headers">
      <h2 class="VideoDetail__title">{{ video.title }}</h2>
      <span class="VideoDetail__channel">{{ video.channelTitle }}</span>
    </div>
    <p class="VideoDetail__description">{{ video.description }}</p>
  </div>
</template>

<script>
import getVideo from '@/services/getVideo';

export default {
  name: 'VideoDetail',
  props: ['id'],
  data() {
    return {
      video: {},
    };
  },
  created() {
    getVideo(this.id)
      .then((res) => {
        this.video = res;
        console.log(res);
      });
  },
};
</script>

<style lang="scss">
  .VideoDetail {
    max-width: var(--wrapper-width);
    margin: 0 auto;
    padding: 20px;
  }

  .VideoDetail__container {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
  }

  .VideoDetail__player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .VideoDetail__headers {
    display: flex;
    justify-content: space-between;
    margin-top: .5em;
    margin-bottom: 1em;
  }

  .VideoDetail__title {
    margin: 0;
  }

  .VideoDetail__channel {
    align-self: center;
    color: var(--main-color);
  }

  .VideoDetail__description {
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
  }

   @media (max-width: 450px) {
    .VideoDetail__title {
      font-size: 18px;
    }

    .VideoDetail__channel {
      font-size: 14px;
    }

    .VideoDetail__description {
      font-size: 14px;
    }
  }
</style>
