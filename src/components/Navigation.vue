<template>
  <nav class="nav">
    <router-link class="nav__logo" :to="{name: 'home'}" exact title="Home">
      Home
    </router-link>
    <ul class="nav__list">
      <li class="nav__item" v-for="item in listTypes" v-if="item.isCategory">
        <router-link class="nav__link" :to="{name: 'home-category', params: {category: item.query}}">
          <div class="nav__link-wrap">
            <span class="nav__link-title">{{ item.shortTitle }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import storage from '../storage.js'

export default {
  data(){
    return {
      listTypes: storage.listTypes,
      userLoggedIn: storage.sessionId ? true : false
    }
  },
  methods: {
    setUserStatus(){
      this.userLoggedIn = storage.sessionId ? true : false;
    },
    requestToken(){
      eventHub.$emit('requestToken');
    },
    toggleNav(){
      document.querySelector('.nav__hamburger').classList.toggle('nav__hamburger--active');
      document.querySelector('.nav__list').classList.toggle('nav__list--active');
    }
  },
  created(){
    eventHub.$on('setUserStatus', this.setUserStatus);
  }
}
</script>

<style lang="scss">
@import "./src/scss/variables";
@import "./src/scss/media-queries";
.nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: $c-white;
  display: flex;
  z-index: 10;
  @include tablet-min{
    display: block;
    width: 95px;
    height: 100vh;
  }
  &__logo{
    display: block;
    width: 55px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $c-dark;
    @include tablet-min{
      width: 95px;
      height: 75px;
    }
    &-image{
      width: 35px;
      height: 31px;
      fill: $c-green;
      transition: transform 0.5s ease;
      @include tablet-min{
        width: 45px;
        height: 40px;
      }
    }
    &:hover &-image{
      transform: scale(1.04);
    }
  }
  &__list{
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0;
    top: 50px;
    background: rgba($c-white, 0.98);
    border-top: 1px solid $c-light;
    @include mobile-only{
      font-size: 0;
      opacity: 0;
      visibility: hidden;
      height: calc(100vh - 50px);
      transition: all 0.5s ease;
      text-align: left;
      &--active{
        opacity: 1;
        visibility: visible;
      }
    }
    @include tablet-min{
      display: flex;
      background: transparent;
      position: relative;
      display: block;
      width: 100%;
      border-top: 0;
      top: 0;
    }
  }
  &__item{
    @include mobile-only{
      display: inline-block;
      text-align: center;
      width: 50%;
      border-bottom: 1px solid $c-light;
      &:nth-child(odd){
        border-right: 1px solid $c-light;
      }
    }
    @include tablet-min{
      width: 100%;
      border-bottom: 1px solid $c-light;
      &--profile{
        position: fixed;
        right: 0;
        top: 0;
        width: 75px;
        height: 75px;
        border-bottom: 0;
        border-left: 1px solid $c-light;
      }
    }
  }
  &__link{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba($c-dark, 0.7);
    transition: color 0.5s ease, background 0.5s ease;
    position: relative;
    cursor: pointer;
    @include mobile-only{
      font-size: 10px;
      padding: 20px 0;
    }
    @include tablet-min{
      width: 95px;
      height: 95px;
      font-size: 9px;
      &--profile{
        width: 75px;
        height: 75px;
        background: $c-white;
      }
    }
    &-icon{
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
      fill: rgba($c-dark, 0.7);
      transition: fill 0.5s ease;
      @include tablet-min{
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }
    }
    &-title{
      display: block;
      width: 100%;
    }
    &:hover{
      color: $c-dark;
    }
    &:hover &-icon{
      fill: $c-dark;
    }
    &.is-active{
      color: $c-dark;
      background: $c-light;
    }
    &.is-active &-icon{
      fill: $c-dark;
    }
  }
}
</style>
