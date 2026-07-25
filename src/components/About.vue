<template>
  <section class="relative py-20 conic-gradient overflow-x-hidden" :style="classStyle" id="About-Me">
    <div v-for="about in abouts" :key="about.id" class="container mx-auto px-4 max-w-6xl">
      <div
        class="adefam-content"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <div class="adefam-photo-cell">
          <img
            :src="about.src"
            :alt="`${about.alt} - Software Engineer (Frontend)`"
            class="adefam-photo"
            loading="lazy"
          />
        </div>

        <span class="adefam-eyebrow">About Me</span>

        <h2 class="adefam-heading text-white mt-2">
          {{ about.topHead }} <br /> {{ about.downHead }}
        </h2>

        <p
          v-for="aboutPara in aboutParas"
          :key="aboutPara.para"
          class="mt-4 leading-relaxed text-color break-words text-justify adefam-paragraph"
        >
          {{ aboutPara.para }}
        </p>

        <div class="adefam-stats-cell">
          <div class="grid grid-cols-3 gap-4 max-w-md">
            <div class="text-center">
              <p class="adefam-stat-number">6+</p>
              <p class="adefam-stat-label">Years Experience</p>
            </div>
            <div class="text-center">
              <p class="adefam-stat-number">40+</p>
              <p class="adefam-stat-label">APIs Integrated</p>
            </div>
            <div class="text-center">
              <p class="adefam-stat-number">10k+</p>
              <p class="adefam-stat-label">Users Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["abouts", "aboutParas"],
  data() {
    return {
      hour: new Date().getHours(),
    };
  },
  computed: {
    classStyle() {
    if (this.hour >= 20 || this.hour <= 5) {
      return { "background-image": "linear-gradient(135deg, #000000, #0b1120)" };
    }
    return { "background-image": "linear-gradient(135deg, #0b3559, #061a35)" };
  },
  },
};
</script>

<style scoped>
.conic-gradient {
  background-image: linear-gradient(#069ce3, #0474ac);
}
.text-color {
  color: #e2eaec;
  font-size: 18px;
  line-height: 1.75rem;
}
.adefam-heading {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.5px;
}

/* Contrast-safe label — dark chip behind text, readable on both black and blue backgrounds */
.adefam-eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffb84d;
  background: rgba(0, 0, 0, 0.55);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
}

.adefam-stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffb84d;
  margin: 0;
}

.adefam-stat-label {
  font-size: 0.8rem;
  color: #e2eaec;
  margin-top: 0.25rem;
}

/* Photo: border only, no background box */
.adefam-photo {
  display: block;
  width: 100%;
  max-width: 20rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top;
  border-radius: 1rem;
  border: 5px solid #ffffff;
}

/* Mobile & tablet: simple centered stack, no float */
.adefam-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
}
.adefam-content .text-color {
  text-align: left;
  width: 100%;
}
.adefam-stats-cell {
  display: flex;
  justify-content: center;
  width: 100%;
}

.adefam-paragraph {
  text-align: justify !important;
  text-justify: inter-word;
  word-wrap: break-word;
  hyphens: auto;
  font-size: 1.1rem;
  width: 97% !important;
}

/* Desktop: photo floats left, heading + paragraphs wrap around it,
   and once text clears the photo's height it naturally spans full width */
@media (min-width: 1024px) {
  .adefam-content {
    display: block;
    text-align: left;
  }
  .adefam-content::after {
    content: "";
    display: table;
    clear: both;
  }
  .adefam-photo-cell {
    float: left;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
  .adefam-stats-cell {
    clear: both;
    justify-content: flex-start;
    padding-top: 1rem;
  }
}
</style>