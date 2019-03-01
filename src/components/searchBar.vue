<template>
  <div class="SearchBar">
    <input type="text" class="SearchBar__input" v-model="query" placeholder="Search">
    <transition name="SearchBar__slide">
      <ul class="SearchBar__select" v-show="showSelect">
        <li class="SearchBar__option" v-for="item in options" :key="item.key">
          <a class="SearchBar__link" :href="`list/${item.id}`">{{ item.title }}</a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
// import search from '@/services/search';

export default {
  name: 'SearchBar',
  data() {
    return {
      query: '',
      showSelect: false,
      options: [
        {
          title: 'gfksdd',
          id: '1',
        },
        {
          title: 'advsccx',
          id: '2',
        },
        {
          title: 'qwr1r412',
          id: '3',
        },
      ],
    };
  },
  watch: {
    query(apiQuery) {
      if (apiQuery.length > 1) {
        this.showSelect = true;
        // search(apiQuery)
        //   .then(this.showSearchresult)
        //   .catch(err => console.log(err));
      } else {
        this.showSelect = false;
      }
    },
  },
  methods: {
    showSearchresult() {
      this.showSelect = true;
    },
  },
};
</script>


<style lang="scss">
  $bottom_border_radius: 10px;

  .SearchBar {
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
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

  .SearchBar__select {
    width: 100%;
    margin: 0;
    padding: 0;
    opacity: .8;
    list-style: none;

    font-size: 16px;
    border-bottom-left-radius: $bottom_border_radius;
    border-bottom-right-radius: $bottom_border_radius;
  }

  .SearchBar__option {
    border: 1px solid #000;
    border-top: 0;
    border-bottom: 1px solid #000;;
    text-align: left;

    &:last-child {
      border-bottom-left-radius: $bottom_border_radius;
      border-bottom-right-radius: $bottom_border_radius;
    }
  }

  .SearchBar__link {
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
