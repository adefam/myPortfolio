<template>
<div v-bind:style="classStyle">

  <div class="container mx-auto" >
    <div class="flex flex-wrap w-full mb-4 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blog-top" v-bind:style="classStyle">
          Gallary
      </h1>

    </div>
    <div class="flex flex-wrap">
        <div class="relative w-full lg:w-1/3 overflow-hidden" v-for="image in images" :key="image.id">
        <img :src="image.photo" :alt="image.alt" class="object-cover w-full h-full" loading="lazy"/>
        <span class="w-full h-full absolute bottom-0 inset-x-0 adefam-gallary-overlay">
            
            </span>
            <div class="absolute text-white text-base text-center leading-6 adefam-gallary-text subpixel-antialiased tracking-wide">
                {{image.content}}
                
            </div> 
         
      </div>
    </div>
  </div>

  </div>
</template>
<script>
import jsonGallary from '../assets/jsonFile/gallary.json'

export default {
  data() {
    return {
      images: jsonGallary.images,
       hour: new Date().getHours(),
            classStyle: {
                "background-color": "#ffffff",
                "color":"#32529B"
            }
    };
  },
  computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-color": "#000000", "color":"#ffffff" };
      return { "background-color": "#ffffff", "color":"#32529B" };
    }
  }
};
</script>
