<template>
  <nav
    class="navbar navbar-expand-lg bg-primary navbar-line-bottom fixed-top navbar-transparent"
  >
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="#">
          Diab.Predict
        </a>
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
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="ontology.html"
              rel="tooltip"
              title=""
              data-placement="bottom"
              data-original-title="Diabetes Domain Knowledge"
              >Ontology</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="help.com">Help</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact us</a>
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
