<template>
  <div class="SearchBar">
    <div class="SearchBar__field">
      <input type="text" class="SearchBar__input" v-model="query" placeholder="Search">
      <a class="SearchBar__button" :href="`list?q=${query}`">Search</a>
      <transition name="SearchBar__slide">
        <autosuggest class="SearchBar__autosuggest" :query="query" v-show="showSelect"/>
      </transition>
    </div>
    <span class="SearchBar__logo" v-if="isHome">YouTubeGreen</span>
    <a class="SearchBar__logo" href="/" v-else>YouTubeGreen</a>
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
      return this.query.length;
    },
    isHome() {
      return (this.$route.path === '/');
    },
  },
};
</script>


<style lang="scss">
  .SearchBar {
    display: flex;
    padding: 20px;
    text-align-last: left;
    background-color: darken(#59a080, 10%);
  }

  .SearchBar__field {
    position: relative;
    display: flex;
    flex-grow: 1;
    max-width: 500px;
  }

  .SearchBar__input {
    flex-grow: 1;
    padding: 12px 10px;
    border: 0;
    color: var(--secondary-color);

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
    top: 100%;
  }

  .SearchBar__logo {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #fff;
    text-decoration: none;
    font-size: 20px;

    transition: transform 0.3s;
    transform-origin: right;

    &[href] {
      &:hover,
      &:focus {
        transform: scale(1.3);
      }
    }
  }
</style>
