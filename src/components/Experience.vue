<template>
  <div class="bg" v-bind:style="classStyle">
    <section class="max-w-7xl body-font overflow-hidden mx-auto" id="Experience">
      <div class="px-5 pb-20 pt-20 mx-auto">
        <div class="px-1 py-5 mx-auto flex items-center md:flex-row ">
          <div class="flex flex-col ml-5 md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <h1 class="md:text-3xl text-2xl font-medium title-font text-top" v-bind:style="classStyle">Work Experience</h1>
          </div>

          <!-- Bottom -->
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none carousel-controls__button"  @click="previous" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" />
              </svg>
            </button>
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none carousel-controls__button" @click="next" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- The Slide -->
        <transition-group class='adefam_carousel' tag="div" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div v-for="slide in slides" class='adefam_carousel_slide' :key="slide.id">
          
            <!-- First Rows -->
            <div>
              <div class="adefam-exp-holder md:flex-nowrap">
                <div class="md:w-64 md:mb-0 adefam-exp-date" >
                  <span class="adefam-body-date">{{slide.date1}}</span>
                </div>
                <div class="md:flex-grow" >
                  <h2 class="adefam-exp-header">{{slide.title1}}</h2>
                  <p class="adefam-body" v-bind:style="classStyle">{{slide.content1}}</p>
                  <a class="adefam-exp-link" :href="slide.href1">{{slide.link1}}
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-400"  />

            <!-- Second Row -->
            <div>
              <div class="adefam-exp-holder md:flex-nowrap">
                <div class="md:w-64 md:mb-0 adefam-exp-date" >
                  <span class="adefam-body-date">{{slide.date2}}</span>
                </div>
          
                <div class="md:flex-grow" >
                  <h2 class="adefam-exp-header">{{slide.title2}}</h2>
                  <p class="adefam-body" v-bind:style="classStyle">{{slide.content2}}</p>
                  <a class="adefam-exp-link" :href="slide.href2">{{slide.link2}}
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-400"  />
        
            <!-- Third Row -->
            <div>
              <div class="adefam-exp-holder md:flex-nowrap">
                <div class="md:w-64 md:mb-0 adefam-exp-date" >
                  <span class="adefam-body-date">{{slide.date3}}</span>
                </div>
        
                <div class="md:flex-grow" >
                  <h2 class="adefam-exp-header">{{slide.title3}}</h2>
                  <p class="adefam-body" v-bind:style="classStyle">{{slide.content3}}</p>
                  <a class="adefam-exp-link" :href="slide.href3">{{slide.link3}}
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
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

  import jsonExperience from '../assets/jsonFile/experience.json'

export default {
    data() {
       return {
         slides: jsonExperience.slides,
         hour: new Date().getHours(),
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
.bg{background:#fff}h2{font-size:24px}.adefam_carousel{display:flex;justify-content:center;align-items:center;overflow:hidden}.adefam_carousel_slide{flex:0 0 100%;display:flex;flex-direction:column;justify-content:center;padding:25px;transition:.3s;margin:5px 0}.adefam_carousel_column{display:flex;flex-wrap:wrap;padding:1rem 0}.carousel-controls__button{cursor:pointer;background:orange;border:0;color:#fff;border-radius:3px;padding:5px 10px;font-size:18px}.carousel-controls__button:hover{background:#ffa60093}
</style>
