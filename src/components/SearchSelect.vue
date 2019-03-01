<template>
  <ul class="SearchSelect">
    <li class="SearchSelect__item" v-for="item in options" :key="item.key">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'SearchSelect',
  props: ['options'],
};
</script>

<style lang="scss">
  .SearchSelect {
    width: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid #000;
    border-top: 0;
    list-style: none;

    font-size: 16px;
  }

  .SearchSelect__item {
    padding: 8px;
    border-bottom: 1px solid #000;;
    text-align: left;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: rgba(#444, .3);
    }

    &:last-child {
      border-bottom: 0;
    }
  }
</style>
