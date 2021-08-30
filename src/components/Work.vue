<template>
   <section id="setup" class="section work-area ptb_100">
      <div class="work-wrapper d-none d-md-block">
         <div class="section-heading text-center">
            <h2 class="text-capitalize">{{ $t('setup.section_title') }}</h2>
         </div>
         <div class="work-slider-wrapper" data-aos="zoom-in">
            <!-- Work Slider -->
            <ul class="work-slider owl-carousel">
               <li class="slide-item">
                  <img src="assets/img/screenshot_1.png" alt="">
               </li>
               <li class="slide-item">
                  <img src="assets/img/screenshot_3.png" alt="">
               </li>
               <li class="slide-item">
                  <img src="assets/img/screenshot_4.png" alt="">
               </li>
               <li class="slide-item">
                  <img src="assets/img/screenshot_3.png" alt="">
               </li>
            </ul>
         </div>
      </div>
      <div class="container">
         <!-- Work Content -->
         <div class="row justify-content-end justify-content-lg-between work-content" id="work-slider-pager">
            <div class="col-12 col-sm-6">
               <a href="#" class="pager-item active">
                  <!-- Single Work -->
                  <div class="single-work d-inline-block text-center p-4">
                     <h3 class="mb-2">{{ $t('setup.1.title') }}</h3>
                     <p>{{ $t('setup.1.text') }}</p>
                  </div>
               </a>
            </div>
            <div class="col-12 col-sm-6">
               <a href="#" class="pager-item">
                  <!-- Single Work -->
                  <div class="single-work d-inline-block text-center p-4">
                     <h3 class="mb-2">{{ $t('setup.2.title') }}</h3>
                     <p>{{ $t('setup.2.text') }}</p>
                  </div>
               </a>
            </div>
            <div class="col-12 col-sm-6">
               <a href="#" class="pager-item">
                  <!-- Single Work -->
                  <div class="single-work d-inline-block text-center p-4">
                     <h3 class="mb-2">{{ $t('setup.3.title') }}</h3>
                     <p>{{ $t('setup.3.text') }}</p>
                  </div>
               </a>
            </div>
            <div class="col-12 col-sm-6">
               <a href="#" class="pager-item">
                  <!-- Single Work -->
                  <div class="single-work d-inline-block text-center p-4">
                     <h3 class="mb-2">{{ $t('setup.4.title') }}</h3>
                     <p>{{ $t('setup.4.text') }}</p>
                  </div>
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "Work",
});
</script>

<style>

</style>
