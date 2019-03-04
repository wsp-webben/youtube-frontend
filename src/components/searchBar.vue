<template>
  <div class="SearchBar">
    <input type="text" class="SearchBar__input" v-model="query" placeholder="Search">
    <transition name="SearchBar__slide">
      <autosuggest class="SearchBar__autosuggest" :query="query" v-show="showSelect"/>
    </transition>
  </div>
</template>

<script>
import Autosuggest from '@/components/Autosuggest.vue';

export default {
  name: 'SearchBar',
  components: {
    Autosuggest,
  },
  data() {
    return {
      query: '',
    };
  },
  computed: {
    showSelect() {
      return this.query.length > 1;
    },
  },
};
</script>


<style lang="scss">
  .SearchBar {
    position: relative;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align-last: left;
    max-width: 300px;
  }

  .SearchBar__input {
    width: 100%;
    padding: 10px 8px;
    border: 1px solid var(--secondary-color);

    &:focus {
      outline: 0;
    }
  }

  .SearchBar__slide {
    &-enter-active,
    &-leave-active {
      transition: transform .2s ease-in;
    }

    &-enter,
    &-leave-to {
      transform: translateY(-50%) scaleY(0);
    }
  }

  .SearchBar__autosuggest {
    position: absolute;
  }
</style>
