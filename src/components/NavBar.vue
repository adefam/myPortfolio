<template>
  <Popover as="header" class="sticky top-0 z-30 bg-white/90 backdrop-blur-sm shadow-sm">
    <div class="relative px-4 sm:px-6 lg:px-8 py-3">
      <nav
        class="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="http://adegbitefamosa.com.ng/" aria-label="Famosa Adegbite home">
              <img
                v-for="(image, index) in navImage"
                :key="index"
                :src="image.src"
                :alt="image.alt"
                class="h-8 w-auto sm:h-10"
                loading="lazy"
              />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="mr-2 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#52A8F2]"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>

        <div class="hidden md:flex flex-grow flex-shrink-0 lg:flex-grow-0 md:ml-10 md:pr-4 items-center md:space-x-8">
          
           <a v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="inline-flex items-center gap-2 font-medium adefam-number"
          >
            <i v-if="item.icon" :class="item.icon" aria-hidden="true"></i>
            {{ item.name }}
          </a>

          
          <a  :href="cvHref"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-medium px-4 py-2 rounded-md border adefam-cv-btn transition-colors"
          >
            <i class="fas fa-file-arrow-down" aria-hidden="true"></i>
            Download CV
          </a>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                v-for="(image, index) in navImage"
                :key="index"
                :src="image.src"
                :alt="image.alt"
                class="h-8 w-auto"
                loading="lazy"
              />
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#52A8F2]"
              >
                <span class="sr-only">Close main menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          
          
          <div class="px-2 pt-2 pb-3 space-y-1">
            
            <PopoverButton  
              v-for="item in mobileNav"
              :key="item.name"
              as="a"
              :href="item.href"
              class="adefam-mobile-link flex items-center gap-3 px-3 py-3 rounded-md text-base font-semibold"
            >
              <i :class="item.icon" aria-hidden="true" class="w-6 text-center text-lg"></i>
              {{ item.name }}
            </PopoverButton>
          </div>
          
           <a :href="cvHref"
            target="_blank"
            rel="noopener noreferrer"
            class="adefam-cv-btn block w-full px-5 py-3 text-center font-semibold"
          >
            Download CV
          </a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>

import jsonAbout from "../assets/jsonFile/about.json";
import jsonNav from '../assets/jsonFile/navbar.json'

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "NavBar",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation: jsonNav.navigation,
      mobileNav: jsonNav.mobileNav,
      navImage: jsonNav.navImage,
      cvHref: jsonAbout.aboutContent[0].cvhref,
    };
  },
};
</script>

<style>
.adefam-number {
  color: #52a8f2;
}
.adefam-number:hover {
  color: orange;
}

.adefam-cv-btn {
  background-color: #ff8c00;
  color: #ffffff;
  transition: background-color 0.2s ease;
}
.adefam-cv-btn:hover {
  background-color: #52a8f2;
  color: #ffffff;
}

.adefam-mobile-link {
  color: #1f2937;
}
.adefam-mobile-link i {
  color: #52a8f2;
}

@media (hover: hover) and (pointer: fine) {
  .adefam-mobile-link:hover {
    background-color: rgba(82, 168, 242, 0.1);
    color: #52a8f2;
  }
  .adefam-mobile-link:hover i {
    color: #ff8c00;
  }
}

.adefam-mobile-link:active {
  background-color: rgba(82, 168, 242, 0.15);
  color: #52a8f2;
}
.adefam-mobile-link:active i {
  color: #ff8c00;
}
</style>