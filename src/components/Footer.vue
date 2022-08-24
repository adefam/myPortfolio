<template>
  <footer
    v-for="footer in footers"
    :key="footer"
    id="Footer"
    class="relative pb-6 top-0 w-full h-full bg-center bg-cover"
    style="
      background-image: url('https://www.vhv.rs/dpng/d/511-5112019_outline-world-map-sticker-hd-png-download.png?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=60');
    "
  >
    <span class="w-full h-full absolute opacity-95 " v-bind:style="classStyle"></span>
    
    <div
      class="relative container mx-auto pt-8 px-4"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div class="flex flex-wrap mt-20 mb-20">
        <div class="w-full lg:w-6/12 px-4 lg:px-12">
          <div class="mt-6">
            <h4 class="text-3xl font-semibold pb-1 text-white">
              {{ footer.emailheader }}
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-400">
              <a :href="footer.emailhref">
                {{ footer.email }}
              </a>
            </h5>
          </div>

          <div class="mt-6">
            <h4 class="text-3xl font-semibold pb-1 text-white">
              {{ footer.phoneheader }}
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-400">
              <a :href="footer.phonehref">
                {{ footer.phone }}
              </a>
            </h5>
          </div>

          <div class="mt-6 mb-8">
            <h4 class="text-3xl font-semibold pb-4 text-white">
              {{ footer.followheader }}
            </h4>
            <Link :links="Buttonlink" />
          </div>

          
        </div>

        <div class="w-full lg:w-6/12 px-4 lg:px-12">
          <div class="flex-auto">
            <h4 class="text-gray-400">{{ footer.message }}</h4>
            <h4
              class="
                leading-relaxed
                mt-1
                mb-4
                font-semibold
                text-2xl text-white
              "
            >
              {{ footer.messageheader }}
            </h4>
            <div class="relative w-full mb-3 mt-4">
              <label
                class="block uppercase text-gray-400 text-xs font-bold mb-2"
                for="full-name"
                >Your Name</label
              ><input
                type="text"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-gray-400
                  text-gray-700
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  opacity-75
                "
                placeholder="Your Name"
                style="transition: all 0.15s ease 0s"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-400 text-xs font-bold mb-2"
                for="email"
                >Email</label
              ><input
                type="email"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-gray-400
                  text-gray-700
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  opacity-75
                "
                placeholder="Email"
                style="transition: all 0.15s ease 0s"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-400 text-xs font-bold mb-2"
                for="message"
                >Message</label
              ><textarea
                rows="4"
                cols="80"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-gray-400
                  text-gray-700
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  opacity-75
                "
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="mt-6">
              <button
                class="
                  adefam-button
                  active:bg-gray-700
                  text-sm
                  font-bold
                  uppercase
                  px-6
                  py-3
                  rounded
                  shadow
                  hover:shadow-lg
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                "
                type="button"
                style="transition: all 0.15s ease 0s"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-400 font-semibold py-1">
            Copyright © {{ date }} | Coded by
            <a
              :href="footer.namehref"
              class="text-gray-400 hover:text-gray-700"
              >{{ footer.name }}</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Link from "@/components/Link.vue";
import jsonLink from "../assets/jsonFile/link.json";
import jsonFooter from "../assets/jsonFile/footer.json";

export default {
  components: {
    Link,
  },
  data() {
    return {
      Buttonlink: jsonLink.Buttonlink,
      footers: jsonFooter.footers,
      date: new Date().getFullYear(),
      hour: new Date().getHours(),
      classStyle: {
              'background-color': 'black'
            }
    };
  },
  computed: {
    classStyle() {
    if(this.hour >= 20 || this.hour <= 5 ) return { 'background-color' : 'black' };
      return { 'background-color' : 'black' };
}
  },
};
</script>
