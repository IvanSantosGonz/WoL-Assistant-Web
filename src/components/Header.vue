<template>
   <header class="section header-area">
      <div id="appo-header" class="main-header-area nav-white">
         <div class="container-fluid">
            <nav class="navbar navbar-expand-md navbar-light">
               <a class="navbar-brand" href="/">
                  <img class="logo" src="assets/img/logoHQ2.svg" alt="">
                  <span> {{ $t('navbar.title') }}</span>
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appo-menu">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="appo-menu">
                  <ul class="navbar-nav header-items ml-auto">
                     <li class="nav-item">
                        <a class="nav-link scroll" href="#home">{{ $t('navbar.homeSectionTitle') }}</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link scroll" href="#about">{{ $t('navbar.aboutSectionTitle') }}</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link scroll" href="#setup">{{ $t('navbar.setupSectionTitle') }}</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link scroll" href="#features">{{ $t('navbar.featuresSectionTitle') }}</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   </header>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "Header"
});
</script>

<style>

</style>
