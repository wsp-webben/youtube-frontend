<template>
  <div class="SearchBar">
    <div class="SearchBar__wrapper">
      <div class="SearchBar__field">
        <input type="text" class="SearchBar__input" v-model="query" placeholder="Search">
        <a class="SearchBar__button" :href="query?`list?q=${query}`:'/'">Search</a>
        <transition name="SearchBar__slide">
          <autosuggest class="SearchBar__autosuggest" :query="query" v-show="showSelect"/>
        </transition>
      </div>
      <span class="SearchBar__logo" v-if="isHome">YouTubeGreen</span>
      <a class="SearchBar__logo" href="/" v-else>YouTubeGreen</a>
    </div>
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
    background-color: darken(#59a080, 10%);
  }

  .SearchBar__wrapper {
    display: flex;
    max-width: var(--wrapper-width);
    margin: 0 auto;
    padding: 20px;
    text-align-last: left;
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
    z-index: 1;
    top: 100%;
  }

  .SearchBar__logo {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 20px;
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

  @media (max-width: 450px) {
    .SearchBar__input {
      width: 120px;
      padding: 7px;
    }

    .SearchBar__button {
      width: 30px;

      &::after {
        border-width: 7px 0 7px 10px;
      }
    }

    .SearchBar__logo {
      font-size: 16px;
    }
  }
</style>
