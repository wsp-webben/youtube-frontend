<template>
  <div class="SearchBar">
    <div class="SearchBar__field">
      <input type="text" class="SearchBar__input" v-model="query" placeholder="Search">
      <a class="SearchBar__button" :href="`list?q=${query}`">Search</a>
    </div>
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

  .SearchBar__field {
    display: flex;
  }

  .SearchBar__input {
    flex-grow: 1;
    padding: 12px 10px;
    border: 1px solid var(--main-color);
    color: var(--secondary-color);
    border-right: 0;

    &:focus {
      box-shadow: inset 0 0 10px 2px var(--main-color);
      outline: 0;
    }
  }

  $size: 10px;
  .SearchBar__button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $size * 4;
    font-size: 0;
    color: #fff;
    background-color: var(--main-color);

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: $size 0 $size ($size * 1.5);
      border-color: transparent transparent transparent #fff;
      transition: transform 0.3s;
    }

    &:hover,
    &:focus {
      &::after {
        transform: scale(1.25);
      }
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
