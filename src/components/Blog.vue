<template>
  <div class="relative body top-0 w-full h-full bg-center bg-cover">
    <span class="w-full h-full absolute blog-bg-overlay" v-bind:style="classStyle"></span>
    
    <section class="relative max-w-7xl text-gray-600 body-font overflow-hidden mx-auto" id="Blog">
      <div class="px-5 pb-20 pt-20 mx-auto" v-for="blog in blogs" :key="blog.heading">
        <div class="px-1 py-5 mx-auto flex flex-col items-center text-center w-full" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-blog-top" v-bind:style="classStyle2">{{ blog.heading }}</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-blog-top" v-bind:style="classStyle2">{{ blog.subheading }}</p>
        </div>

        <!-- The Slide -->
        <transition-group class='adefam_carousel' tag="div">
          <div class='adefam_carousel_slide flex-wrap'>
          
            <!-- First Rows -->
            <div class="p-4 md:w-1/3" v-for="blogSlide in blogSlides" :key="blogSlide.title">
              <div class="adefam-container" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <img class="lg:h-48 md:h-36 adefam-img" :src="blogSlide.src" :alt="blogSlide.alt" loading="lazy">
                <div class="p-6">
                  <p class="adefam-categories">{{blogSlide.categories}}</p>
                  <h1 class="adefam-title">{{ blogSlide.title }}</h1>
                  <p class="adefam-content">{{ blogSlide.content }}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="adefam-bp-link md:mb-2 lg:mb-0" :href="blogSlide.href">Read More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-orange mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 mt-3 border-r-2 border-gray-200">
                      <!-- <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>{{blogSlide.view}}                                             
                    </span>
                    <span class="text-orange inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>{{blogSlide.message}} -->
                        <div class="fb-like" :data-href="blogSlide.href" data-width="200" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
                    </span>
                  </div>

                  <!-- <div class="fb-comments" :data-href="blogSlide.href" data-width="200" data-numposts="5"></div> -->
                  <!-- <div class="fb-like" :data-href="blogSlide.href" data-width="200" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div> -->
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
  import jsonBlog from '../assets/jsonFile/blog.json'

export default {
    data() {
       return {
         blogs: jsonBlog.blogs,
         blogSlides: jsonBlog.blogSlides,
         hour: new Date().getHours(),
            classStyle: {
                "background-color": "#00000060"
            },
            classStyle2: {
                "color":"#32529B"
            }
      }
    },
     computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-color": "#000000"};
      return { "background-color": "#00000060" };
    },
    classStyle2() {
      if (this.hour >= 20 || this.hour <= 5) return { "color":"#ffffff" };
      return { "color":"#32529B" };
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
.body{--stripe:#ffffff;--bg:#e1e1e160;background:linear-gradient(135deg,var(--bg) 25%,transparent 25%) -50px 0,linear-gradient(225deg,var(--bg) 25%,transparent 25%) -50px 0,linear-gradient(315deg,var(--bg) 25%,transparent 25%),linear-gradient(45deg,var(--bg) 25%,transparent 25%);background-size:100px 100px;background-color:var(--stripe)}.overlay-body{height:'100%';width:'100%';background-color:'rgba(0, 0, 0,)',}h2{font-size:24px}.adefam_carousel{display:flex;justify-content:center;align-items:center;overflow:hidden}.adefam_carousel_slide{flex:0 0 100%;display:flex;justify-content:center;padding:25px;transition:.3s;margin:5px 0}.adefam_carousel_column{display:flex;flex-wrap:wrap;padding:1rem 0}.carousel-controls__button{cursor:pointer;position:absolute;display:flex;left:1%;background:tomato;border:0;color:#fff;border-radius:3px;padding:5px 10px;font-size:18px}.next{left:auto;right:1%}
</style>
