<template>
  <div class="testimonials-bg" :style="classStyle" id="Testimonials">
    <div class="container mx-auto max-w-6xl px-5 py-24">
      <div class="flex flex-col items-center text-center mb-14">
        <span class="adefam-eyebrow">Recommendations</span>
        <h2 class="adefam-heading text-white mt-2">What People Say</h2>
        <p class="adefam-subheading mt-4 max-w-2xl">
          Verified recommendations from people I've worked with directly, via LinkedIn.
        </p>
      </div>

      <div class="adefam-testimonial-grid">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="adefam-testimonial-card"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <svg class="adefam-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.5 10c-1.933 0-3.5-1.567-3.5-3.5S4.567 3 6.5 3 10 4.567 10 6.5c0 3.5-2 6.5-5 8l-1-1.5c1.5-.833 2.5-2 3-3.5-.333.333-.667.5-1 .5zm10 0c-1.933 0-3.5-1.567-3.5-3.5S14.567 3 16.5 3 20 4.567 20 6.5c0 3.5-2 6.5-5 8l-1-1.5c1.5-.833 2.5-2 3-3.5-.333.333-.667.5-1 .5z"/>
          </svg>
          <p class="adefam-testimonial-text">{{ testimonial.text }}</p>
          <div class="adefam-testimonial-footer">
            <div class="adefam-testimonial-avatar">{{ testimonial.initials }}</div>
            <div>
              <p class="adefam-testimonial-name">{{ testimonial.name }}</p>
              <p class="adefam-testimonial-role">{{ testimonial.role }}</p>
              <p class="adefam-testimonial-context">{{ testimonial.context }}</p>
            </div>
          </div>
          
           <a v-if="testimonial.link"
            :href="testimonial.link"
            target="_blank"
            rel="noopener noreferrer"
            class="adefam-testimonial-link"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i> View on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonTestimonials from "../assets/jsonFile/testimonials.json";

export default {
  data() {
    return {
      testimonials: jsonTestimonials.testimonials,
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
.testimonials-bg {
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

.adefam-testimonial-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}
@media (min-width: 768px) {
  .adefam-testimonial-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.adefam-testimonial-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}

.adefam-quote-icon {
  width: 2rem;
  height: 2rem;
  color: #ffb84d;
  margin-bottom: 0.75rem;
}

.adefam-testimonial-text {
  color: #e2eaec;
  font-size: 0.95rem;
  line-height: 1.7;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.adefam-testimonial-footer {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  margin-bottom: 1rem;
}
.adefam-testimonial-avatar {
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: #ff8c00;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}
.adefam-testimonial-name {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
}
.adefam-testimonial-role {
  color: #ffb84d;
  font-size: 0.78rem;
  font-weight: 600;
  margin-top: 0.1rem;
}
.adefam-testimonial-context {
  color: #9ca9b8;
  font-size: 0.72rem;
  margin-top: 0.2rem;
}

.adefam-testimonial-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  transition: color 0.2s ease;
}
.adefam-testimonial-link:hover {
  color: #ffb84d;
}
</style>