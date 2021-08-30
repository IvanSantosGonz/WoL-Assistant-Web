<template>
   <section id="features" class="section features-area ptb_100">
      <div class="shapes-container">
         <div class="shape bg-shape"></div>
      </div>
      <div class="container">
         <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-6">
               <div class="features-text">
                  <!-- Headings -->
                  <div class="headings d-flex align-items-center mb-4">
                     <span class="text-uppercase d-none d-sm-block">Features</span>
                     <h2 class="text-capitalize">{{ $t('features.title') }}</h2>
                  </div>
                  <p class="my-3">{{ $t('features.text') }}</p>
                  <!-- Counter List -->
               </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
               <!-- Featured Items -->
               <div class="featured-items">
                  <ul>
                     <li>
                        <!-- Single Features Item -->
                        <div class="single-features media p-3">
                           <!-- Features Title -->
                           <div class="features-title mr-3">
                              <img src="assets/img/material_logo.png" alt="">
                           </div>
                           <!-- Features Text -->
                           <div class="features-text media-body">
                              <h3>{{ $t('features.1.title') }}</h3>
                              <p>{{ $t('features.1.text') }}</p>
                           </div>
                        </div>
                     </li>
                     <li class="mt-2">
                        <!-- Single Features Item -->
                        <div class="single-features media p-3">
                           <!-- Features Title -->
                           <div class="features-title mr-3">
                              <img src="assets/img/assistant.png" alt="">
                           </div>
                           <!-- Features Text -->
                           <div class="features-text media-body">
                              <h3>{{ $t('features.2.title') }}</h3>
                              <p>{{ $t('features.2.text') }}</p>
                           </div>
                        </div>
                     </li>
                     <li class="mt-4">
                        <!-- Single Features Item -->
                        <div class="single-features media p-3">
                           <!-- Features Title -->
                           <div class="features-title mr-3">
                              <img src="assets/img/infinity.svg" alt="">
                           </div>
                           <!-- Features Text -->
                           <div class="features-text media-body">
                              <h3>{{ $t('features.3.title') }}</h3>
                              <p>{{ $t('features.3.text') }}</p>
                           </div>
                        </div>
                     </li>
                     <li class="mt-4">
                        <!-- Single Features Item -->
                        <div class="single-features media p-3">
                           <!-- Features Title -->
                           <div class="features-title mr-3 mt-3">
                              <img src="assets/img/multidevice.png" alt="">
                           </div>
                           <!-- Features Text -->
                           <div class="features-text media-body">
                              <h3>{{ $t('features.4.title') }}</h3>
                              <p>{{ $t('features.4.text') }}</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
   name: "Features",
});

</script>

<style>

</style>
