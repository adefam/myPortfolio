<template>
<div>
    <section class="overflow-hidden adefam-edu-bg" id="Qualification" v-bind:style="classStyle">
        <div class="container adefam-edu-container" v-for=" education in educations" :key="education.title">

            <div class="adefam-top-header-wrapper" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 class="sm:text-3xl adefam-top-header text-top" v-bind:style="classStyle"> {{ education.title }}</h1>
                <div class="mt-3">
                    <div class="adefam-edu-horizontal-line"></div>
                </div>
            </div>

            <div class="adefam-edu-holder">
                <div class="lg:w-1/2 md:w-full lg:pl-48 mb-10 md:pr-10 md:pt-5">
                    <div class="adefam-edu-wraper" v-for="educationColumn1 in educationColumn1s" :key="educationColumn1.id">
                        <div class="inset-0 adefam-edu-vertical-line" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div :class="educationColumn1.lineConnect"></div>
                        </div>
                        <div class="adefam-edu-bg-icon" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" :d='educationColumn1.icons' />
                            </svg>
                        </div>
                        <div class="adefam-edu-spacing" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <h2 class="adefam-header" v-bind:style="classStyle">{{educationColumn1.certificate}}</h2>
                            <p class="adefam-body" v-bind:style="classStyle">{{educationColumn1.school}}</p>
                            <p class="adefam-body" v-bind:style="classStyle">{{educationColumn1.year}}</p>
                        </div>

                    </div>
                </div>

                <div class="lg:w-1/2 md:w-full lg:pl-48 mb-10 md:pr-10 md:pt-5 ">
                    <div class="adefam-edu-wraper" v-for=" educationColumn2 in educationColumn2s" :key="educationColumn2.id">
                        <div class="inset-0 adefam-edu-vertical-line" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div :class="educationColumn2.lineConnect"></div>
                        </div>
                        <div class="adefam-edu-bg-icon" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" :d='educationColumn2.icons' />
                            </svg>
                        </div>
                        <div class="adefam-edu-spacing" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <h2 class="adefam-header" v-bind:style="classStyle">{{educationColumn2.certificate}}</h2>
                            <p class="adefam-body" v-bind:style="classStyle">{{educationColumn2.school}}</p>
                            <p class="adefam-body" v-bind:style="classStyle">{{educationColumn2.year}}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    props: ['educations', 'educationColumn1s', 'educationColumn2s'],
    data() {
        return {
            education: this.educations,
            educationColumn1: this.educationColumn1s,
            educationColumn2: this.educationColumn2s,
            hour: new Date().getHours(),
            classStyle: {
                "background-color": "#e9e9ebdc",
                "color":"#000000"
            }
        }
    },
    computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-color": "#000000", "color":"#ffffff" };
      return { "background-color": "#e9e9ebdc", "color":"#000000" };
    }
  }
}
</script>
