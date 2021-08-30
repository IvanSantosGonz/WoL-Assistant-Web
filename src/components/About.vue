<template>
   <section id="about" class="section about-app-area ptb_100">
      <div class="shapes-container">
         <div class="shape-1"></div>
      </div>
      <div class="container">
         <div class="row align-items-center">
            <div class="col-12 col-lg-6">
               <!-- About Text -->
               <div class="about-text">
                  <!-- Headings -->
                  <div class="headings d-flex align-items-center mb-4">
                     <span class="text-uppercase d-none d-sm-block">About</span>
                     <h2 class="text-capitalize">{{ $t('about.title') }}</h2>
                  </div>
                  <p class="my-3">{{ $t('about.paragraph1') }}</p>
                  <p class="d-none d-sm-block my-3"> {{ $t('about.paragraph2') }}</p>
                  <!-- Store Buttons -->
                  <div class="button-group store-buttons">
                     <a href="https://play.google.com/store/apps/details?id=wol.assistant" class="btn btn-bordered">
                        <i class="icofont icofont-brand-android-robot dsp-tc"></i>
                        <p class="dsp-tc">GET IT ON
                           <br> <span>Google Play</span></p>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-12 col-lg-6">
               <!-- About Thumb -->
               <div class="about-thumb text-center d-none d-lg-block">
                  <img src="assets/img/about.png" alt="">
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "About"
});
</script>

<style>

</style>
