<template>
  <div class="body" v-bind:style="classStyle">
    <section class="max-w-7xl text-gray-600 body-font overflow-hidden mx-auto" id="Project">
      <div class="px-5 pb-20 mx-auto" v-for="project in projects" :key="project.heading">
        <div class="px-1 py-5 mx-auto flex flex-col items-center text-center w-full" data-aos="zoom-in"
          data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{{ project.heading }}</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">{{ project.subheading }}</p>
        </div>

        <!-- The Slide -->
        <transition-group class='adefam_carousel' tag="div">
          <div class='adefam_carousel_slide flex-wrap'>

            <!-- First Rows -->
            <div class="p-4 md:w-1/3" v-for="projectSlide in projectSlides" :key="projectSlide.title">
              <div class="adefam-container" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <img class="lg:h-48 md:h-36 adefam-img" :src="projectSlide.src" :alt="projectSlide.alt" loading="lazy">
                <div class="p-6">
                  <h1 class="adefam-title">{{ projectSlide.title }}</h1>
                  <p class="adefam-content">{{ projectSlide.content }}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="adefam-bp-link md:mb-2 lg:mb-0" :href="projectSlide.href">Read More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-orange mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 mt-3 border-r-2 border-gray-200">
                        <div class="fb-like" :data-href="projectSlide.href" data-width="200" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
  import jsonProject from '../assets/jsonFile/project.json'

export default {
    data() {
       return {
         projects: jsonProject.projects,
         projectSlides: jsonProject.projectSlides,
         hour: new Date().getHours(),
      classStyle: {
              'background-color': '#32529B'
            }
      }
    },
    computed: {
    classStyle() {
    if(this.hour >= 20 || this.hour <= 5 ) return { 'background-color' : 'black' };
      return { 'background-color' : '#32529B' };
}
  },
  methods: {
  	next() {
    	const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
  	previous() {
    	const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>

<style scoped>
.body{padding:20px;}h2{font-size:24px}.adefam_carousel{display:flex;justify-content:center;align-items:center;overflow:hidden}.adefam_carousel_slide{flex:0 0 100%;display:flex;justify-content:center;padding:25px;transition:.3s;margin:5px 0}.adefam_carousel_column{display:flex;flex-wrap:wrap;padding:1rem 0}.next{left:auto;right:1%}
</style>
