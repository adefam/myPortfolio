<template>
  <div class="bg" v-bind:style="classStyle">
    <section class="max-w-7xl body-font overflow-hidden mx-auto" id="Experience">
      <div class="px-5 pb-20 pt-20 mx-auto">
        <div class="px-1 py-3 mx-auto flex items-center md:flex-row ">
          <div class="flex flex-col ml-5 md:pr-10 md:mb-0 mb-4 pr-0 w-full md:w-auto md:text-left" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <h1 class="md:text-3xl text-2xl font-medium title-font text-top" v-bind:style="classStyle">Work Experience</h1>
          </div>

          <!-- Bottom -->
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none carousel-controls__button"  @click="previous" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="left" aria-label="left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" />
              </svg>
            </button>
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none carousel-controls__button" @click="next" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="right" aria-label="right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
              </svg>
            </button>
          </div>
        </div>


         <!-- Dynamic Slides -->
         <transition-group
          class="adefam_carousel"
          tag="div"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          @mouseenter="pauseAutoSlide" 
          @mouseleave="startAutoSlide"
        >
          <!-- Loop through slides -->
          <div v-for="slide in slides" class="adefam_carousel_slide" :key="slide.id">
            <!-- Loop through entries in each slide -->
            <div
              v-for="(entry, index) in slide.entries"
              class="my-2"
              :key="entry.title"
            >
              <div class="adefam-exp-holder md:flex-nowrap">
                <div class="md:w-64 md:mb-0 adefam-exp-date">
                  <span class="adefam-body-date">{{ entry.date }}</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="adefam-exp-header">{{ entry.title }}</h2>
                  <p class="adefam-body" v-bind:style="classStyle">{{ entry.content }}</p>
                  <a class="adefam-exp-link" v-if="entry.link" :href="entry.link.url">
                    {{ entry.link.text }}
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Conditional HR -->
              <hr
                v-if="index < slide.entries.length - 1"
                class="my-3 border-gray-400"
              />
            </div>
          </div>
        </transition-group>
  
    
    
    
    
      </div>
    </section>  

  </div>
</template>

<script>

  import jsonExperience from '../assets/jsonFile/experience.json'

export default {
    data() {
       return {
         slides: jsonExperience.slides,
         hour: new Date().getHours(),
         autoSlideInterval: null,
      classStyle: {
        "background-color": "#ffffff",
                "color":"#000000"
      }
        }
    },
    computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-color": "#000000", "color":"#ffffff" };
      return { "background-color": "#ffffff", "color":"#000000" };
    }
  },
  mounted() {
    this.startAutoSlide(); // Start the auto-slide when the component mounts
  },
  beforeDestroy() {
    this.stopAutoSlide(); // Stop the auto-slide timer when the component is destroyed
  },
  methods: {
  	next() {
    	const first = this.slides.shift();
      this.slides = this.slides.concat(first);
      this.restartAutoSlide();
    },
  	previous() {
    	const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
      this.restartAutoSlide();
    },

    // Automatically slide to the next item at random intervals
    startAutoSlide() {
      this.stopAutoSlide();
      const randomTime = this.getRandomInterval();
      this.autoSlideInterval = setTimeout(() => {
        this.startAutoSlide(); // Restart the auto-slide with a new random interval
        this.next(); // Slide to the next item
      }, randomTime);
    },

    pauseAutoSlide() {
    this.stopAutoSlide(); // Clear the interval to stop sliding
  },

    // Stop the automatic sliding
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearTimeout(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },

    // Restart the auto-slide after manual interaction
    restartAutoSlide() {
      this.stopAutoSlide();
      this.startAutoSlide();
    },

    // Generate a random interval between 3 and 7 seconds
    getRandomInterval() {
      return Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000;
    },


  }
};
</script>

<style scoped>
.bg{background:#fff}h2{font-size:24px}.adefam_carousel{display:flex;justify-content:center;align-items:center;overflow:hidden}.adefam_carousel_slide{flex:0 0 100%;display:flex;flex-direction:column;justify-content:center;padding:25px;transition:.3s;margin:5px 0}.adefam_carousel_column{display:flex;flex-wrap:wrap;padding:1rem 0}.carousel-controls__button{cursor:pointer;background:orange;border:0;color:#fff;border-radius:3px;padding:5px 10px;font-size:18px}.carousel-controls__button:hover{background:#ffa60093}
</style>
