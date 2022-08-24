<template>
  <div id="adefam-menu">
    <!-- container -->

    <aside class="flex flex-col h-full">
      <!-- Side Nav Bar-->

      <div class="h-16 flex items-center w-full"
          v-for="menulink in menulinks"
          :key="menulink.title"
      >
        <!-- Logo Section -->
        <a class="h-6 w-6 mx-auto" :href="menulink.href">
          <img
            class="h-6 w-6 mx-auto"
            :src="menulink.src"
            :alt="menulink.alt"
            loading="lazy"
          />
        </a>
      </div>

      <ul>
        <!-- Items Section -->
        <li
          v-for="menu in menus"
          :key="menu.title"
          :class="menu.list"
          :title="menu.title"
        >
          <a :href="menu.link" :class="menu.classLink">
            <i :class="menu.icons"></i>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import jsonMenu from "../assets/jsonFile/menu.json";

export default {
  data() {
    return {
      menus: jsonMenu.menus,
      menulinks: jsonMenu.menulinks
    };
  },
};
</script>

<style scoped>
.adefam-about,.adefam-blog,.adefam-certificate,.adefam-experience,.adefam-footer,.adefam-home,.adefam-project,.adefam-signIn,.adefam-skills{font-size:1.3rem;line-height:1.75rem}.adefam-home{color:#82c91e}.adefam-about,.adefam-skills{color:#fd7e14}.adefam-blog{color:#d8119c}.adefam-certificate,.adefam-signIn{color:#4c6ef5}.adefam-experience{color:#e91f1f}.adefam-project{color:#15aabf}.adefam-footer{color:#f783ac}.adefam-whatsapp{color:#4bca5a;font-size:1.6rem;line-height:1.75rem}.adefam :hover{color:#fff}.adefam-link{height:3rem;padding-left:1.5rem;padding-right:1.5rem;display:flex;justify-content:center;align-items:center;width:100%}#adefam-menu{background-color:#00000054;height:100vh;right:-25px;position:fixed;z-index:40;display:grid;align-content:center}#adefam-menu:hover{right:0}@media screen and (max-width:768px){#adefam-menu{display:none}}
</style>
