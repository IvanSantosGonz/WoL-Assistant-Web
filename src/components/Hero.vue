<template>
   <section id="home" class="section welcome-area bg-overlay bg-inherit h-100vh">
      <div class="container">
         <div class="row justify-content-center">
            <!-- Welcome Intro Start -->
            <div class="col-12 col-md-10 col-lg-8">
               <div class="welcome-intro text-center">
                  <h1 class="text-white">{{ $t('hero.title') }}</h1>
                  <p class="text-white my-4"> {{ $t('hero.subtitle') }}</p>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-12 col-sm-8 col-md-5 mx-auto">
               <!-- Seoul Thumb -->
               <div class="seoul-thumb text-center pt-5">
                  <img src="assets/img/welcome_mockup.png" alt="">
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "Hero",
});
</script>

<style>

</style>
