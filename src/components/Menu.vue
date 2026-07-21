<template>
  <nav id="adefam-menu" aria-label="Primary navigation">
    
     <a v-for="link in menulinks"
      :key="link.alt"
      class="adefam-menu-logo"
      :href="link.href"
      :aria-label="link.alt"
    >
      <img :src="link.src" :alt="link.alt" loading="lazy" />
    </a>

    <ul class="adefam-menu-list">
      <li v-for="menu in menus" :key="menu.title" class="adefam-menu-item">
        <a :href="menu.link" class="adefam-menu-link" :aria-label="menu.title">
          <i :class="menu.icons" aria-hidden="true"></i>
          <span class="adefam-menu-tooltip">{{ menu.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import jsonMenu from "../assets/jsonFile/menu.json";

export default {
  data() {
    return {
      menus: jsonMenu.menus,
      menulinks: jsonMenu.menulinks,
    };
  },
};
</script>

<style scoped>
#adefam-menu {
  position: fixed;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.5rem;
  background: rgba(17, 17, 17, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 999px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.adefam-menu-logo img {
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 0.375rem;
  display: block;
}

.adefam-menu-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0.5rem 0 0;
  padding: 0;
}

.adefam-menu-item {
  position: relative;
}

.adefam-menu-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  color: #e5e7eb;
  font-size: 1.1rem;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.adefam-menu-link:hover,
.adefam-menu-link:focus-visible {
  background-color: rgba(82, 168, 242, 0.9); /* your existing brand blue, #52a8f2 */
  color: #fff;
  transform: scale(1.08);
  outline: none;
}

.adefam-menu-tooltip {
  position: absolute;
  right: calc(100% + 0.75rem);
  top: 50%;
  transform: translateY(-50%) translateX(6px);
  white-space: nowrap;
  background: #111;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: 0.375rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.adefam-menu-link:hover .adefam-menu-tooltip,
.adefam-menu-link:focus-visible .adefam-menu-tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

@media screen and (max-width: 768px) {
  #adefam-menu {
    display: none;
  }
}
</style>