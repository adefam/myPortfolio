<template >
<div>
  <!-- <Menu /> -->
  <Main />
  <About :abouts='aboutContent' :aboutParas='aboutParagraph' />
  <Education :educations='education' :educationColumn1s='educationColumn1' :educationColumn2s='educationColumn2' />
  <Experience />
  <Blog />
  <Skill />
  <Gallary />
  <Project />
  <Comment />

</div>
</template>

<script>
import Main from "@/components/Main.vue"
import About from "@/components/About.vue"
import Education from "@/components/Education.vue"
import Experience from "@/components/Experience.vue"
import Blog from "@/components/Blog.vue"
import Skill from "@/components/Skill.vue"
import Project from "@/components/Project.vue"
import Gallary from "@/components/Gallary.vue"
import Comment from "@/components/Comment.vue"

import jsonEducation from '@/assets/jsonFile/education.json'
import jsonAbout from '@/assets/jsonFile/about.json'

export default {
  name: "Home",
  components: {
    Main,
    About,
    Education,
    Experience,
    Blog,
    Skill,
    Project,
    Gallary,
    Comment,
    // Menu
  },

  data() {
    return {
      education: jsonEducation.education,
      educationColumn1: jsonEducation.educationColumn1,
      educationColumn2: jsonEducation.educationColumn2,
      aboutContent: jsonAbout.aboutContent,
      aboutParagraph: jsonAbout.aboutParagraph,
    }
  },
};

</script>
