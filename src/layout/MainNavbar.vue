<template>
  <nav
    class="navbar navbar-expand-lg bg-primary navbar-line-bottom fixed-top navbar-transparent"
  >
    <div class="container">
      <div class="navbar-translate">
        <router-link class="navbar-brand" to="/">
          Diab.Predict
        </router-link>
        <button
          class="navbar-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar top-bar"></span>
          <span class="navbar-toggler-bar middle-bar"></span>
          <span class="navbar-toggler-bar bottom-bar"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navigation"
        data-nav-image="./assets/img/blurred-image-1.jpg"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ontology">Ontology</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav></template
>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/landing.scss';
</style>
