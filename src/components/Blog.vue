<template>
  <div class="blog-gradient overflow-x-hidden" :style="classStyle" id="Blog">
    <section class="max-w-7xl mx-auto py-20 px-5">
      <div v-for="blog in blogs" :key="blog.heading" class="text-center mb-12">
        <span class="adefam-eyebrow">Writing</span>
        <h2 class="adefam-heading text-white mt-2">{{ blog.heading }}</h2>
        <p class="adefam-subheading mt-4 max-w-2xl mx-auto">{{ blog.subheading }}</p>
      </div>

      <div class="adefam-blog-grid">
        <div
          v-for="blogSlide in blogSlides"
          :key="blogSlide.title"
          class="adefam-container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img class="adefam-img" :src="blogSlide.src" :alt="blogSlide.alt" loading="lazy" />
          <div class="p-6">
            <p class="adefam-categories">{{ blogSlide.categories }}</p>
            <h3 class="adefam-title">{{ blogSlide.title }}</h3>
            <p class="adefam-content">{{ blogSlide.content }}</p>
            <a class="adefam-bp-link" :href="blogSlide.href" target="_blank" rel="noopener noreferrer" aria-label="Read blog post">
              {{ blogSlide.touch }}
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jsonBlog from "../assets/jsonFile/blog.json";

export default {
  data() {
    return {
      blogs: jsonBlog.blogs,
      blogSlides: jsonBlog.blogSlides,
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
.blog-gradient {
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

.adefam-blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .adefam-blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .adefam-blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.adefam-container {
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  text-align: left;
}
.adefam-img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
.adefam-categories {
  font-size: 0.78rem;
  font-weight: 600;
  color: #52a8f2;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 0.5rem;
}
.adefam-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}
.adefam-content {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.65;
}
.adefam-bp-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: #52a8f2;
  margin-top: 1.1rem;
  transition: color 0.2s ease;
}
.adefam-bp-link:hover {
  color: #ff8c00;
}
</style>