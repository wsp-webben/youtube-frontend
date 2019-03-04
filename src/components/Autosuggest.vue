<template>
  <ul class="Autosuggest">
    <li class="Autosuggest__option" v-for="item in options" :key="item.key">
      <a class="Autosuggest__link" :href="`list?q=${item}`">{{ item }}</a>
    </li>
  </ul>
</template>

<script>
import suggest from '@/services/suggest';

export default {
  name: 'Autosuggest',
  props: ['query'],
  data() {
    return {
      options: [],
    };
  },
  watch: {
    query() {
      suggest(this.query, (result) => {
        this.options = result;
      });
    },
  },
};
</script>


<style lang="scss">
  $bottom_border_radius: 10px;
  .Autosuggest {
    width: 100%;
    margin: 0;
    padding: 0;
    opacity: .8;
    list-style: none;

    font-size: 16px;
    border-bottom-left-radius: $bottom_border_radius;
    border-bottom-right-radius: $bottom_border_radius;
  }

  .Autosuggest__option {
    border: 1px solid #000;
    border-top: 0;
    border-bottom: 1px solid #000;;
    text-align: left;
    background-color: #fff;

    &:last-child {
      border-bottom-left-radius: $bottom_border_radius;
      border-bottom-right-radius: $bottom_border_radius;
    }
  }

  .Autosuggest__link {
    display: block;
    padding: 8px;
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--main-color);
    }
  }
</style>
