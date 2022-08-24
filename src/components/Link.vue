<template>
  <a
    v-for="link in links"
    :key="link.id"
    :class="link.color"
    :href="link.to"
    type="button"
    target="blank"
  >
     <i :class="link.icon "></i>
  </a>       
</template>

<script>
export default {
    props: ['links'],
    data() {
        return {
            link: this.links
        }
    },
}
</script>

<style scoped>
 .adefam-link-button{font-weight:400;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;text-align:center;border-radius:9999px;outline:transparent solid 2px;outline-offset:2px;margin-right:.5rem;padding:.75rem}.adefam-linkedIn-color{background-color:rgba(10,102,194);color:rgba(255,255,255)}.adefam-facebook-color{background-color:rgba(24,119,242);color:#fff}.adefam-twitter-color{background-color:rgba(29,161,242);color:rgba(255,255,255)}.adefam-dev-color{background-color:rgba(244,114,182);color:rgba(255,255,255)}.adefam-github-color{background-color:#3a3d42;color:rgba(255,255,255)}.adefam-instagram-color{background-image:linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);color:rgba(255,255,255)}.adefam-github-white-color{background-color:#fff;color:#0a0a0a}.adefam-whatsapp-color{background-color:#4bca5a;color:#fff}
</style>
