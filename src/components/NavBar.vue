<template>
  <Popover>
    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav class="
          relative
          flex
          items-center
          justify-between
          sm:h-10
          lg:justify-start
        " aria-label="Global">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <img v-for="image in navImage" :key="image.id" :src="image.src" :alt="image.alt"
                class="h-8 w-auto sm:h-10" loading="lazy" />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton class="
                  mr-2
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2 focus:ring-inset focus:#52A8F2
                ">
                <span class="sr-only">Open main menu</span>
                <MenuIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>

        <div class="hidden flex flex-grow flex-shrink-0 lg:flex-grow-0  md:block md:ml-10 md:pr-4 md:space-x-8">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="inline-flex font-medium adefam-number">{{ item.name }}</a>
        </div>

      </nav>
    </div>

    <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        ">
        <div class="
            rounded-lg
            shadow-md
            bg-white
            ring-1 ring-black ring-opacity-5
            overflow-hidden
            
          ">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img v-for="image in navImage" :key="image.id" :src="image.src" :alt="image.alt" class="h-8 w-auto" loading="lazy" />
            </div>
            <div class="-mr-2">
              <PopoverButton class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2 focus:ring-inset focus:#52A8F2
                ">
                <span class="sr-only">Close main menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a v-for="item in mobileNav" :key="item.name" :href="item.href" class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-skyblue
                hover:text-orange
                hover:bg-gray-50
              ">
              <i :class="item.icon"></i>
              {{ item.name }}

            </a>
          </div>
          <a href="#" class="
              block
              w-full
              px-5
              py-3
              text-center
              font-medium
              text-skyblue
              bg-gray-50
              hover:bg-gray-100
            ">
            Log in
          </a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
// import ModeButton from "../components/ModeButton.vue";
import jsonNav from '../assets/jsonFile/navbar.json'

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "NavBar",
  components: {
    // ModeButton,
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
      navImage: jsonNav.navImage
    };
  },
};
</script>

<style>
.adefam-number{color:#52a8f2}.adefam-number:hover{color:orange}
</style>
