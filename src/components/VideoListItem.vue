<template>
  <li class="VideoListItem">
    <a class="VideoListItem__link" :href="`/watch?video=${video.id}`">
      <img class="VideoListItem__thumbnail"
           :src="video.thumb.url"
           :alt="video.title"
           :width="video.thumb.width"
           :height="video.thumb.height">
      <h2 class="VideoListItem__title">{{ video.title }}</h2>
      <span class="VideoListItem__channel">{{ video.channel }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
};
</script>

<style lang="scss">
  .VideoListItem__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--secondary-color);
    text-decoration: none;

    transition: opacity 0.3s;

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }

  .VideoListItem__thumbnail {
    width: 100%;
    height: auto;
  }

  .VideoListItem__title {
    margin-top: 0.5em;
    margin-bottom: 1em;

    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }

  .VideoListItem__channel {
    display: block;
    margin-top: auto;
    text-align: left;
    color: var(--main-color);
  }
</style>
