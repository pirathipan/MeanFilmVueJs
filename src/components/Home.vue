<template>
  <section class="home">
    <header class="home__header">
      <div class="home__header-wrap">
        <h1 class="home__header-title">Film</h1>
      </div>
    </header>
    <movies-list v-for="item in listTypes" v-if="item.isCategory" :type="'component'" :mode="'collection'" :category="item.query" :shortList="true"></movies-list>
  </section>
</template>

<script>
import axios from 'axios'
import storage from '../storage.js'
import MoviesList from './MoviesList.vue'

export default {
  components: { MoviesList },
  data(){
    return {
      listTypes: storage.listTypes
    }
  },
  created(){
    document.title = 'Film';
    storage.backTitle = document.title;
  }
}
</script>


<style lang="scss">
@import "./src/scss/variables";
@import "./src/scss/media-queries";
.home{
  &__header{
    &-wrap{
      text-align: center;
      position: relative;
    }
    &-title{
      font-weight: 500;
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: $c-dark;
      margin: 0;
    }
    &-subtitle{
      display: block;
      font-size: 14px;
      font-weight: 300;
      color: $c-dark;
      margin: 5px 0;
    }
  }
  .wrapper{
    min-height: 0;
  }
  .movies__list{
    .movies__item:last-child{
      display: none;
      @include desktop-min{
        display: block;
      }
    }
  }
}
</style>
