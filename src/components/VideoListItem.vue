<template>
  <li class="VideoListItem">
    <a class="VideoListItem__link" :href="`/watch?video=${video.id}`">
      <img class="VideoListItem__thumbnail"
           :src="video.thumb.url"
           :alt="video.title"
           :width="video.thumb.width"
           :height="video.thumb.height">
      <div class="VideoListItem__headers">
        <h2 class="VideoListItem__title">{{ video.title }}</h2>
        <span class="VideoListItem__channel">{{ video.channel }}</span>
      </div>
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

  .VideoListItem__headers {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
  }

  .VideoListItem__title {
    flex-grow: 1;
    margin: 0;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }

  .VideoListItem__channel {
    display: block;
    margin-left: 20px;
    text-align: right;
    color: var(--main-color);
  }

  @media (max-width: 450px) {
    .VideoListItem {
      margin-bottom: 20px;
    }

    .VideoListItem__title {
      margin-bottom: 0.5em;
    }
  }
</style>
