<template>
  <div class="experience-gradient overflow-x-hidden" :style="classStyle" id="Experience">
    <section class="max-w-5xl body-font mx-auto py-20 px-5">
      <span class="adefam-eyebrow">Experience</span>
      <h2 class="adefam-heading text-white mt-2 mb-12">Work Experience</h2>

      <div class="adefam-timeline">
        <div v-for="(role, index) in roles" :key="role.title" class="adefam-timeline-item">
          <div class="adefam-timeline-marker">
            <span class="adefam-timeline-dot"></span>
            <span v-if="index < roles.length - 1" class="adefam-timeline-line"></span>
          </div>

          <div class="adefam-timeline-content">
            <span class="adefam-exp-date">{{ role.period }}</span>
            <h3 class="adefam-exp-header">
              {{ role.title }}
              <span v-if="role.location" class="adefam-exp-location"> · {{ role.location }}</span>
            </h3>

            <ul class="adefam-exp-bullets">
              <li v-for="bullet in role.bullets" :key="bullet">{{ bullet }}</li>
            </ul>

            <div class="adefam-exp-links">
              <a v-if="role.link" :href="role.link" target="_blank" rel="noopener noreferrer" class="adefam-exp-link">
                {{ role.linkText || "Visit" }}
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a v-if="role.video" :href="role.video" target="_blank" rel="noopener noreferrer" class="adefam-exp-link">
                <i class="fab fa-youtube mr-1" aria-hidden="true"></i> Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="community && community.length" class="adefam-community">
        <h3 class="adefam-community-heading">Community & Mentorship</h3>
        <div class="adefam-community-grid">
          <div v-for="item in community" :key="item.title" class="adefam-community-card">
            <span class="adefam-exp-date">{{ item.period }}</span>
            <h4 class="adefam-community-title">{{ item.title }}</h4>
            <p class="adefam-community-desc">{{ item.description }}</p>
            <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer" class="adefam-exp-link">
              {{ item.linkText || "Learn more" }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jsonExperience from "../assets/jsonFile/experience.json";

export default {
  data() {
    return {
      roles: jsonExperience.roles,
      community: jsonExperience.community,
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
.experience-gradient {
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

.adefam-timeline {
  position: relative;
  max-width: 42rem;
  margin: 0 auto;
}
.adefam-timeline-item {
  display: flex;
  gap: 1.5rem;
}
.adefam-timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.adefam-timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffb84d;
  margin-top: 0.4rem;
  flex-shrink: 0;
}
.adefam-timeline-line {
  flex: 1;
  width: 2px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0.25rem 0;
}
.adefam-timeline-content {
  padding-bottom: 2.75rem;
  flex: 1;
}

.adefam-exp-date {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffcb7d;
}
.adefam-exp-header {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 0.3rem;
  margin-bottom: 0.85rem;
}
.adefam-exp-location {
  font-weight: 400;
  color: #cbd5e1;
  font-size: 1rem;
}
.adefam-exp-bullets {
  list-style: disc;
  padding-left: 1.25rem;
  color: #e2eaec;
  line-height: 1.75;
  font-size: 1.02rem;
}
.adefam-exp-bullets li + li {
  margin-top: 0.4rem;
}
.adefam-exp-links {
  display: flex;
  gap: 1.25rem;
  margin-top: 1rem;
}
.adefam-exp-link {
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  color: #ffffff;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}
.adefam-exp-link:hover {
  color: #ffb84d;
}

.adefam-community {
  margin-top: 4rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
}
.adefam-community-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1.75rem;
}
.adefam-community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.adefam-community-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  padding: 1.25rem;
}
.adefam-community-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 0.35rem;
  margin-bottom: 0.5rem;
}
.adefam-community-desc {
  font-size: 0.9rem;
  color: #e2eaec;
  line-height: 1.65;
}
</style>