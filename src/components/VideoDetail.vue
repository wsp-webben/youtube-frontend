<template>
  <div class="VideoDetail">
    <h2 class="VideoDetail__title">{{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: ['id'],
};
</script>
