<template>
  <div id="edublink-preloader">
    <div class="loading-spinner">
      <div class="preloader-spin-1"></div>
      <div class="preloader-spin-2"></div>
    </div>
  </div>
  <header class="edu-header header-style-1 header-fullwidth no-topbar" id="home">
    <div id="edu-sticky-placeholder"></div>
    <div class="header-mainmenu">
      <div class="container-fluid">
        <div class="header-navbar">
          <div class="header-brand">
            <div class="logo">
              <a href="#">
                <img class="logo-light" src="/assets/images/mebellogo.png" alt="Corporate Logo" width="100">
                <img class="logo-dark" src="/assets/images/mebellogo.png" alt="Corporate Logo">
              </a>
            </div>
          </div>
          <div class="header-mainnav">
            <nav class="mainmenu-nav">
              <ul class="mainmenu">
                <li><a href="#home">Home</a>
                </li>
                <li><a href="#product">Product</a>
                </li>
                <li><a href="#about">About</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header-right">
            <ul class="header-action">
              <li class="header-btn">
                <a href="https://drive.google.com/file/d/1nwYW4upkyWs-SX8ou6sNhrZFGjDs_V1R/view?usp=drivesdk" class="edu-btn btn-medium btn-gradient">Daftar</a>
              </li>
              <li class="mobile-menu-bar d-block d-xl-none">
                <button class="hamberger-button" @click="toogleMenu()">
                  <i class="icon-54"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-mobile-menu">
      <div class="inner">
        <div class="header-top">
          <div class="logo">
            <a href="index.html">
              <img class="logo-light" src="/assets/images/mebellogo.png" alt="Corporate Logo">
              <img class="logo-dark" src="/assets/images/mebellogo.png" alt="Corporate Logo">
            </a>
          </div>
          <div class="close-menu">
            <button class="close-button" @click="toogleMenu()">
              <i class="icon-73"></i>
            </button>
          </div>
        </div>
        <ul class="mainmenu">
          <li><a href="#home" @click="toogleMenu()">Home</a>
          </li>
          <li><a href="#product" @click="toogleMenu()">Product</a>
          </li>
          <li><a href="#about" @click="toogleMenu()">About</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Start Search Popup  -->
    <div class="edu-search-popup">
      <div class="content-wrap">
        <div class="site-logo">
          <img class="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo">
          <img class="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo">
        </div>
        <div class="close-button">
          <button class="close-trigger" @click="toogleMenu()"><i class="icon-73"></i></button>
        </div>
        <div class="inner">
          <form class="search-form" action="#">
            <input type="text" class="edublink-search-popup-field" placeholder="Search Here...">
            <button class="submit-button"><i class="icon-2"></i></button>
          </form>
        </div>
      </div>
    </div>
    <!-- End Search Popup  -->
  </header>
</template>
<script lang="ts">
declare const document: any;
</script>
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  setTimeout(() => {
    document.getElementById('edublink-preloader').style.display = 'none';
  }, 1000);
});

function toogleMenu() {
  document.querySelector('.popup-mobile-menu').classList.toggle('active');
}
</script>