<template>
   <div class="seoul">
      <Scrollup />
      <div class="all-area">
         <Header />
         <Hero />
         <About />
         <Work />
         <Features />
         <Footer />
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scrollup from "@/components/Scrollup.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
   name: "Home",
   components: {
      Scrollup,
      Header,
      Hero,
      About,
      Work,
      Features,
      Footer
   }
});
</script>
