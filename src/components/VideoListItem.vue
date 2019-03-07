<template>
  <li class="VideoListItem">
    <span class="VideoListItem__title">
      {{ video.title }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
};
</script>
