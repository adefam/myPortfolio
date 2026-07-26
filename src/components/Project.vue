<template>
  <div class="w-full py-10 bg-center bg-cover" :style="classStyle">
    <section class="max-w-7xl text-gray-600 body-font overflow-hidden mx-auto" id="Project">
      <div v-for="project in projects" :key="project.heading" class="px-5 pb-20 mx-auto adefam-project">
        <div
          class="px-1 py-5 mx-auto flex flex-col items-center text-center w-full"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{{ project.heading }}</h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">{{ project.subheading }}</p>
        </div>

        <div class="adefam-project-grid ">
          <div
            v-for="projectSlide in projectSlides"
            :key="projectSlide.title"
            class="adefam-container"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img
              class="adefam-img"
              :src="projectSlide.src"
              :alt="projectSlide.alt"
              loading="lazy"
            />

            <div class="p-6">
              <h3 class="adefam-title">{{ projectSlide.title }}</h3>
              <p v-if="projectSlide.subtitle" class="adefam-subtitle">{{ projectSlide.subtitle }}</p>

              <p class="adefam-content">{{ projectSlide.content }}</p>

              <p v-if="projectSlide.impact" class="adefam-impact">{{ projectSlide.impact }}</p>

              <div v-if="projectSlide.stack && projectSlide.stack.length" class="adefam-stack">
                <span v-for="tech in projectSlide.stack" :key="tech" class="adefam-stack-pill">{{ tech }}</span>
              </div>

              <div class="adefam-links">
                
                <a  v-if="projectSlide.link"
                  :href="projectSlide.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="adefam-bp-link"
                >
                  Live Demo
                  <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                
                <a  v-if="projectSlide.repo"
                  :href="projectSlide.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="adefam-bp-link"
                >
                  <i class="fab fa-github mr-1" aria-hidden="true"></i> View Code
                </a>
                
                 <a v-if="projectSlide.repo2"
                  :href="projectSlide.repo2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="adefam-bp-link"
                >
                  <i class="fab fa-github mr-1" aria-hidden="true"></i> Verification Repo
                </a>

                <a v-if="projectSlide.video"
                    :href="projectSlide.video"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="adefam-bp-link"
                  >
                    <i class="fab fa-youtube mr-1" aria-hidden="true"></i> Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jsonProject from "../assets/jsonFile/project.json";

export default {
  data() {
    return {
      projects: jsonProject.projects,
      projectSlides: jsonProject.projectSlides,
      hour: new Date().getHours(),
    };
  },
  computed: {
    classStyle() {
      if (this.hour >= 20 || this.hour <= 5) return { "background-color": "black" };
      return { "background-color": "#32529B" };
    },
  },
};
</script>

<style scoped>
.adefam-project {
  max-width: 95% !important;
}
.adefam-project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-top: 1rem;
}

.adefam-container {
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  text-align: left;
}

.adefam-img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.adefam-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}
.adefam-subtitle {
  font-size: 0.9rem;
  font-weight: 600;
  color: #52a8f2;
  margin-bottom: 0.5rem;
}
.adefam-content {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
  margin-top: 0.5rem;
}
.adefam-impact {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ff8c00;
  margin-top: 0.75rem;
}

.adefam-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}
.adefam-stack-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: #52a8f2;
  background: rgba(82, 168, 242, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.adefam-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.25rem;
}
.adefam-bp-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #52a8f2;
  transition: color 0.2s ease;
}
.adefam-bp-link:hover {
  color: #ff8c00;
}

@media (min-width: 640px) {
  .adefam-project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .adefam-project-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>