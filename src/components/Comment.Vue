<template>
  <div class="body" v-bind:style="classStyle">
    <section class="max-w-7xl text-gray-600 body-font overflow-hidden mx-auto" id="comment">
      <div class="px-5 pb-20 mx-auto" v-for="comment in comments" :key="comment.heading">
        <div class="px-1 py-5 mx-auto flex flex-col items-center text-center w-full" data-aos="zoom-in"
          data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4" v-bind:style="classStyle2">{{ comment.heading }}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base" v-bind:style="classStyle2">{{ comment.subheading }}</p>
        </div>

        <!-- The Slide -->
        <transition-group class='adefam_carousel' tag="div">
          <div class='adefam_carousel_slide flex-wrap'>

            <!-- First Rows -->
            <div class="p-4 md:w-full">


              <div class="adefam-comment" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine"
                data-aos-duration="600">

                <div class="fb-comments" :data-href="comment.href" data-width="100%" data-numposts="10"></div>

                <!-- <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="adefam" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/adefam?trk=profile-badge">Famosa Adegbite</a></div> -->
                <!-- <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="adefam" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/adefam?trk=profile-badge">Famosa Adegbite</a></div> -->

              </div>


            </div>
          </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
import jsonComment from '../assets/jsonFile/comment.json'

export default {
  data() {
    return {
      comments: jsonComment.comments,
      hour: new Date().getHours(),
      classStyle: {
        'background-color': '#ffffff'
      },
      classStyle2: {
        "color": "#32529B"
      }
    }
  },
  computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { 'background-color': 'black' };
      return { 'background-color': '#ffffff' };
    },
    classStyle2() {
      if (this.hour >= 20 || this.hour <= 5) return { "color": "#ffffff" };
      return { "color": "#32529B" };
    }
  }
};
</script>

<style scoped>
.body {
  padding: 20px;
}

h2 {
  font-size: 24px
}

.adefam_carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}

.adefam_carousel_slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  padding: 25px;
  transition: .3s;
  margin: 5px 0
}

.adefam-comment {
  background-color: #ffffff;
}
</style>
