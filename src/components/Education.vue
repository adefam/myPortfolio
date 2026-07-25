<template>
<div>
    <section class="overflow-hidden adefam-edu-bg" id="Qualification" v-bind:style="classStyle">
        <div class="container adefam-edu-container" v-for="education in educations" :key="education.title">

            <div class="adefam-top-header-wrapper" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h2 class="sm:text-3xl adefam-top-header text-top">{{ education.title }}</h2>
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
                            <h3 class="adefam-header">{{ educationColumn1.certificate }}</h3>
                            <p class="adefam-body">{{ educationColumn1.school }}</p>
                            <p class="adefam-body">{{ educationColumn1.year }}</p>
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/2 md:w-full lg:pl-48 mb-10 md:pr-10 md:pt-5">
                    <div class="adefam-edu-wraper" v-for="educationColumn2 in educationColumn2s" :key="educationColumn2.id">
                        <div class="inset-0 adefam-edu-vertical-line" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div :class="educationColumn2.lineConnect"></div>
                        </div>
                        <div class="adefam-edu-bg-icon" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" :d='educationColumn2.icons' />
                            </svg>
                        </div>
                        <div class="adefam-edu-spacing" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <h3 class="adefam-header">{{ educationColumn2.certificate }}</h3>
                            <p class="adefam-body">{{ educationColumn2.school }}</p>
                            <p class="adefam-body">{{ educationColumn2.year }}</p>
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
        }
    },
    computed: {
        classStyle() {
            if (this.hour >= 20 || this.hour <= 5) {
                return { "background-image": "linear-gradient(135deg, #000000, #0b1120)" };
            }
            return { "background-image": "linear-gradient(135deg, #0b3559, #061a35)" };
        }
    }
}
</script>

<style scoped>
.adefam-edu-bg { padding: 6rem 0; }

.adefam-edu-container { max-width: 72rem; margin: 0 auto; padding: 0 1.25rem; }

.adefam-top-header-wrapper { text-align: center; margin-bottom: 3.5rem; }
.adefam-top-header {
  display: inline-block; font-size: 36px; font-weight: 700;
  line-height: 1.4; letter-spacing: 0.5px; color: #ffffff;
}
.adefam-top-header::before {
  content: "Credentials"; display: block; font-size: 0.8rem; font-weight: 800;
  letter-spacing: 0.15em; text-transform: uppercase; color: #061a35;
  background: #ffb84d; padding: 0.4rem 1.1rem; border-radius: 999px;
  width: fit-content; margin: 0 auto 1rem;
}
.adefam-edu-horizontal-line { width: 4rem; height: 3px; background: #ff8c00; margin: 0 auto; border-radius: 999px; }

.adefam-edu-holder { display: flex; flex-wrap: wrap; gap: 2.5rem; }
.adefam-edu-holder > div { flex: 1 1 320px; }

.adefam-edu-wraper { position: relative; display: flex; gap: 1.25rem; padding-bottom: 2.25rem; }
.adefam-edu-wraper:last-child { padding-bottom: 0; }

.adefam-edu-vertical-line { position: absolute; top: 2.75rem; left: 1.1rem; bottom: -0.5rem; width: 2px; }
.adefam-vertical-line { background: rgba(255, 255, 255, 0.25); display: block; height: 100%; }
.adefam-edu-wraper:last-child .adefam-edu-vertical-line { display: none; }

.adefam-edu-bg-icon {
  flex-shrink: 0; width: 2.5rem; height: 2.5rem; border-radius: 50%;
  background: #ff8c00; display: flex; align-items: center; justify-content: center; z-index: 2;
}
.adefam-edu-bg-icon svg { width: 1.15rem; height: 1.15rem; color: #ffffff; }

.adefam-edu-spacing {
  background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem; padding: 1rem 1.25rem; flex: 1;
}
.adefam-header { font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 0.3rem; }
.adefam-body { font-size: 0.9rem; color: #cbd5e1; line-height: 1.5; }
.adefam-body:last-child { color: #ffb84d; font-weight: 600; margin-top: 0.15rem; }
</style>