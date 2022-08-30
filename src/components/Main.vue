<template>

  <div v-for="mainSlide in mainValue" :key="mainSlide.id" class="relative bg-white overflow-hidden" v-bind:style="classStyle" id="Home">
    <div class="max-w-7xl mx-auto" >
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32" v-bind:style="classStyle">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" >
          <polygon points="50,0 100,0 50,100 0,100" v-bind:style="classStyle"/>
        </svg>

        <Navbar />

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="text-center sm:text-center lg:text-left">

            <img class="w-32 h-32 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 lg:hidden" :src="mainSlide.image" :alt="mainSlide.alt" loading="lazy" >

            <div class="adefam xl:inline py-5" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              <span class="adefam-greetings text-gray-900 text-2xl xl:text-4xl sm:text-xl md:text-3xl">{{ mainSlide.greetings }}</span>
              <span class="adefam-myName text-3xl xl:text-6xl sm:text-4xl md:text-5xl">{{ mainSlide.myName }}</span>
            </div>

            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0 pb-6 adefam-status" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              {{ mainSlide.status }}
            </p>

            <div class="mt-5 mb-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              <Link :links='Buttonlink' /> 
            </div>

          </div>
        </main>

      </div>
    </div>

    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sr-only lg:not-sr-only">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="mainSlide.image" :alt="mainSlide.alt" loading="lazy" />
    </div>

  </div>

</template>

<script>
import Navbar from "@/components/NavBar.vue"
import Link from "@/components/Link.vue"
import jsonLink from "../assets/jsonFile/link.json";
import jsonMain from "../assets/jsonFile/main.json";

export default {
    components: {
      Navbar,
      Link
    },
  data() {
    return {
      Buttonlink: jsonLink.Buttonlink,
      mainValue: jsonMain.mainValue,
      hour: new Date().getHours(),
      classStyle: {
        "background-color": "#ffffff",
        "fill": "#ffffff"
      }
    }
  },
   computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-color": "#000000", "fill":"#000000" };
      return { "background-color": "#ffffff", "fill":"#ffffff" };
    }
  }
}
</script>

<style scoped>
.adefam,.adefam-myName{letter-spacing:-.025em}.adefam{display:block}.adefam-greetings{color:#52a8f2;font-weight:700;padding-right:.8rem}.adefam-myName{font-family:Adinda\ Melia;text-transform:capitalize;color:orange;font-weight:800}.adefam-status{line-height:1.8}@media screen and (max-width:768px){.adefam-status{padding-left:10px;padding-right:10px}}
</style>
