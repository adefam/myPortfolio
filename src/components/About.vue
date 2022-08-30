<template>

  <section class="relative py-20 conic-gradient" v-bind:style="classStyle" id="About-Me">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px;">

    </div>
    <div class="container mx-auto px-4" v-for="about in abouts" :key="about.id">
      <!-- <div class="items-center flex flex-wrap"> -->
      <div class="flex flex-wrap">

        <div class="w-full lg:w-4/12 md:w-full ml-auto mr-auto px-4 mb-10 z-0" data-aos="fade-up" data-aos-offset="200"
          data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div class="relative">

            <div class="shape absolute bottom-0 skew-y-12">
            </div>
            <img :src="about.src" :alt="about.alt" class="max-w-full bottom-radius transform " loading="lazy" />

          </div>

        </div>

        <div class="w-full lg:w-5/12 md:w-full ml-auto mr-auto px-4 z-50" data-aos="fade-up" data-aos-offset="200"
          data-aos-easing="ease-in-sine" data-aos-duration="1000">
          <div class="md:pr-12">
            <div
                  class="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-2 shadow-lg rounded-full adefam-button"
                >
                  <a :href="about.cvhref" target="blank" class="">{{about.cv}}</a>
                </div>
            <h1 class="md:pt-8 text-white "> {{ about.topHead }} <br /> {{ about.downHead }} </h1>
            <p class="mt-4 leading-relaxed text-color" v-for="aboutPara in aboutParas" :key="aboutPara">
              {{ aboutPara.para }}
            </p>
          </div>
        </div>

        
      </div>
    </div>
  </section>

</template>

<script>


export default {
  props: ['abouts', 'aboutParas'],
  data() {
    return {
      about: this.abouts,
      aboutPara: this.aboutParas,
      hour: new Date().getHours(),
      classStyle: {
        "background-image": "linear-gradient(#069ce3, #0474ac)"
      }
    }

  },
  computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-image": "linear-gradient(#000000, #000000)" };
      return { "background-image": "linear-gradient(#069ce3, #0474ac)" };
    }
  }
}
</script>

<style scoped>
.conic-gradient{background-image:linear-gradient(#069ce3,#0474ac)}.text-color{color:#e2eaec;font-size:18px;line-height:1.75rem;text-align:justify}.text-white{font-size:36px;font-weight:700;line-height:1.5;letter-spacing:.5px}
</style>
