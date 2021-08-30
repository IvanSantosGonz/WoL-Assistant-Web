<template>
   <footer class="section footer-area footer-bg">
      <!-- Footer Top -->
      <div class="footer-top ptb_100">
         <div class="container">
            <div class="row">
               <div class="col-12 col-sm-4 col-lg-3">
                  <!-- Footer Items -->
                  <div class="footer-items">
                     <!-- Logo -->
                     <a class="navbar-brand" href="#">
                        <img class="logo" src="assets/img/logoHQ2.svg" alt="">
                        <span>{{ $t("footer.appName") }}</span>
                     </a>
                  </div>
               </div>
               <div class="col-12 col-sm-4 col-lg-3">
                  <!-- Footer Items -->
                  <div class="footer-items">
                     <!-- Footer Title -->
                     <h3 class="footer-title text-white mb-2">{{ $t("footer.linksTitle") }}</h3>
                     <ul>
                        <li class="py-2"><a class="text-white-50" href="#home">{{ $t("footer.homeSectionTitle") }}</a>
                        </li>
                        <li class="py-2"><a class="text-white-50" href="#about">{{ $t("footer.aboutSectionTitle") }}</a>
                        </li>
                        <li class="py-2"><a class="text-white-50" href="#setup">{{ $t("footer.setupSectionTitle") }}</a>
                        </li>
                        <li class="py-2"><a class="text-white-50" href="#features">{{ $t("footer.featuresSectionTitle")
                           }}</a></li>
                        <li class="py-2"><a class="text-white-50" href="#">{{ $t("footer.contactSectionTitle") }}</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-12 col-sm-4 col-lg-3">
                  <h3 class="footer-title text-white mb-2">{{ $t("footer.legalDocumentsTitle") }}</h3>
                  <ul>
                     <li class="py-2"><a class="text-white-50" href="assets/WolAssistant-Privacy-policy-ENGLISH.pdf" target="blank">{{ $t("footer.privacyPolicyEnTitle") }}</a></li>
                     <li class="py-2"><a class="text-white-50" href="assets/WolAssistant-Privacy-policy-SPANISH.pdf" target="blank">{{ $t("footer.privacyPolicyEsTitle") }}</a></li>
                     <li class="py-2"><a class="text-white-50" href="assets/WolAssistant-Terms_of_service-ENGLISH.pdf" target="blank">{{ $t("footer.termsOfServiceEnTitle") }}</a></li>
                     <li class="py-2"><a class="text-white-50" href="assets/WolAssistant-Terms_of_service-SPANISH.pdf" target="blank">{{ $t("footer.termsOfServiceEsTitle") }}</a></li>
                  </ul>
               </div>
               <div class="col-12 col-sm-4 col-lg-3">
                  <!-- Footer Items -->
                  <div class="footer-items">
                     <!-- Footer Title -->
                     <h3 class="footer-title text-white mb-2">{{ $t("footer.downloadTitle") }}</h3>
                     <ul>
                        <li class="py-2"><a class="text-white-50"
                                            href="https://play.google.com/store/apps/details?id=wol.assistant">Google
                           Play</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Footer Bottom -->
      <div class="footer-bottom">
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <!-- Copyright Area -->
                  <div
                     class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                     <!-- Copyright Left -->
                     <div class="copyright-left text-white-50">&copy; Copyrights 2021 Iván Santos All rights reserved.
                     </div>
                     <!-- Copyright Right -->
                     <div class="copyright-right text-white-50">Made with <i class="icofont-heart-alt"></i> and <i
                        class="fas fa-mug-hot"></i> by <a class="text-white-50" href="https://ivansantosgonzalez.dev">Iván
                        Santos</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "Footer"
});
</script>

<style>

</style>
