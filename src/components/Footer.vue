<template>
  <footer
    v-for="footer in footers"
    :key="footer.email"
    id="Footer"
    class="relative pb-6 w-full"
    :style="classStyle"
  >
    <div
      class="relative container mx-auto pt-8 px-4 max-w-6xl"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div class="flex flex-wrap mt-16 mb-16 gap-y-12">
        <div class="w-full lg:w-6/12 px-4 lg:px-12">
          <div class="mt-6">
            <h4 class="text-2xl font-semibold pb-1 text-white">{{ footer.emailheader }}</h4>
            <a :href="footer.emailhref" class="adefam-footer-link">{{ footer.email }}</a>
          </div>

          <div class="mt-6">
            <h4 class="text-2xl font-semibold pb-1 text-white">{{ footer.phoneheader }}</h4>
            <div class="flex flex-wrap gap-x-6 gap-y-1">
              
              <a  v-for="phone in footer.phones"
                :key="phone.number"
                :href="phone.href"
                target="_blank"
                rel="noopener noreferrer"
                class="adefam-footer-link inline-flex items-center gap-2"
              >
                <i v-if="phone.whatsapp" class="fab fa-whatsapp" aria-hidden="true"></i>
                {{ phone.label }}
              </a>
            </div>
          </div>

          <div class="mt-6 mb-8">
            <h4 class="text-2xl font-semibold pb-4 text-white">{{ footer.followheader }}</h4>
            <Link :links="Buttonlink" />
          </div>
        </div>

        <div class="w-full lg:w-6/12 px-4 lg:px-12">
          <div class="flex-auto">
            <p class="adefam-footer-sub">{{ footer.message }}</p>
            <h4 class="leading-relaxed mt-1 mb-4 font-semibold text-2xl text-white">
              {{ footer.messageheader }}
            </h4>

            <form @submit.prevent="sendMessage">
              <div class="relative w-full mb-3 mt-4">
                <label class="block uppercase text-gray-300 text-xs font-bold mb-2" for="footer-name">Your Name</label>
                <input
                  id="footer-name"
                  v-model="form.name"
                  type="text"
                  required
                  class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Your Name"
                />
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-300 text-xs font-bold mb-2" for="footer-email">Email</label>
                <input
                  id="footer-email"
                  v-model="form.email"
                  type="email"
                  required
                  class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                />
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-300 text-xs font-bold mb-2" for="footer-message">Message</label>
                <textarea
                  id="footer-message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..."
                ></textarea>
              </div>

              <p v-if="status === 'success'" class="text-green-400 text-sm mb-3">Message sent — thanks! I'll reply soon.</p>
              <p v-if="status === 'error'" class="text-red-400 text-sm mb-3">Something went wrong — please try emailing me directly.</p>

              <div class="mt-6">
                <button
                  type="submit"
                  :disabled="status === 'sending'"
                  class="adefam-button text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none disabled:opacity-60"
                >
                  {{ status === 'sending' ? 'Sending...' : 'Submit' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-600" />
      <div class="flex flex-wrap items-center justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-400 font-semibold py-1">
            Copyright © {{ date }} |
            <a :href="footer.namehref" class="text-gray-400 hover:text-white">{{ footer.name }}</a>
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
import emailjs from "@emailjs/browser";

export default {
  components: { Link },
  data() {
    return {
      Buttonlink: jsonLink.Buttonlink,
      footers: jsonFooter.footers,
      date: new Date().getFullYear(),
      hour: new Date().getHours(),
      form: { name: "", email: "", message: "" },
      status: "",
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
  methods: {
    sendMessage() {
      this.status = "sending";

      const combinedMessage =
        `New message from portfolio contact form\n\n` +
        `Name: ${this.form.name}\n` +
        `Email: ${this.form.email}\n\n` +
        `Message:\n${this.form.message}`;

      emailjs
        .send(
          "service_2zi8nm5",
          "template_3mrpsb5",
          {
            from_name: this.form.name,
            from_email: this.form.email,
            reply_to: this.form.email,
            message: combinedMessage,
          },
          "LGv2QST6Y30rYQfBI"
        )
        .then(() => {
          this.status = "success";
          this.form = { name: "", email: "", message: "" };
        })
        .catch(() => {
          this.status = "error";
        });
    },
  },
};
</script>

<style scoped>
.footer-gradient {
  background-image: linear-gradient(135deg, #0b3559, #061a35);
}
.adefam-footer-link {
  display: block;
  color: #cbd5e1;
  font-size: 1.05rem;
  transition: color 0.2s ease;
}
.adefam-footer-link:hover {
  color: #ffb84d;
}
.adefam-footer-sub {
  color: #9ca9b8;
  font-size: 0.95rem;
}
</style>