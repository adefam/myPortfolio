<template>
  <div class="adefam-gallery-bg" :style="classStyle">
    <div class="container mx-auto max-w-7xl px-5 py-20">
      <div class="flex flex-col items-center text-center mb-12">
        <span class="adefam-eyebrow">Community & Training</span>
        <h2 class="adefam-heading text-white mt-2">Gallery</h2>
        <p class="adefam-subheading mt-4 max-w-2xl">
          A few moments from the AI, Python, and web development training sessions I've led across Nigeria.
        </p>
      </div>

      <div class="adefam-gallery-grid">
        <div
          v-for="image in images"
          :key="image.id"
          class="adefam-gallery-item"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img :src="image.photo" :alt="image.content" class="adefam-gallery-img" loading="lazy" />
          <div class="adefam-gallery-caption">
            <p>{{ image.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonGallary from "../assets/jsonFile/gallary.json";

export default {
  data() {
    return {
      images: jsonGallary.images,
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
.adefam-gallery-bg {
  background-image: linear-gradient(135deg, #0b3559, #061a35);
}

.adefam-eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #061a35;
  background: #ffb84d;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(255, 184, 77, 0.35);
}
.adefam-heading {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.5px;
}
.adefam-subheading {
  color: #e2eaec;
  font-size: 1.05rem;
  line-height: 1.7;
}

.adefam-gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}
@media (min-width: 640px) {
  .adefam-gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .adefam-gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.adefam-gallery-item {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
.adefam-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.adefam-gallery-item:hover .adefam-gallery-img {
  transform: scale(1.08);
}

.adefam-gallery-caption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 2rem 1.5rem 1.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
}
.adefam-gallery-caption p {
  color: #ffffff;
  font-size: 1.05rem;
  line-height: 1.5;
  font-weight: 600;
}
</style>