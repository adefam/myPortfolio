<template>
  <p class="adefam-typed" aria-hidden="true">
    <span>{{ displayText }}</span><span class="adefam-cursor">|</span>
  </p>
  <span class="sr-only">{{ srText }}</span>
</template>

<script>
export default {
  name: "TypedRoles",
  props: {
    phrases: { type: Array, required: true },
    typingSpeed: { type: Number, default: 70 },
    deletingSpeed: { type: Number, default: 35 },
    pauseAfterType: { type: Number, default: 1400 },
    pauseAfterDelete: { type: Number, default: 300 },
    loop: { type: Boolean, default: true },
  },
  data() {
    return {
      displayText: "",
      phraseIndex: 0,
      charIndex: 0,
      isDeleting: false,
      timer: null,
    };
  },
  computed: {
    srText() {
      return this.phrases.join(" · ");
    },
  },
  mounted() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      this.displayText = this.phrases[0]; // show final text instantly, no animation
      return;
    }
    this.tick();
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  methods: {
    tick() {
      const current = this.phrases[this.phraseIndex];
      this.charIndex += this.isDeleting ? -1 : 1;
      this.displayText = current.substring(0, this.charIndex);

      let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

      if (!this.isDeleting && this.charIndex === current.length) {
        const isLast = this.phraseIndex === this.phrases.length - 1;
        if (isLast && !this.loop) return; // settle on final phrase, stop
        delay = this.pauseAfterType;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        delay = this.pauseAfterDelete;
      }

      this.timer = setTimeout(this.tick, delay);
    },
  },
};
</script>

<style scoped>
.adefam-typed {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 600;
  color: #52a8f2;
  min-height: 1.75rem;
  margin: 0;
}
.adefam-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: adefam-blink 1s step-end infinite;
}
@keyframes adefam-blink {
  50% { opacity: 0; }
}
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>