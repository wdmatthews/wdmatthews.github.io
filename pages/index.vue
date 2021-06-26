<template>
  <v-tabs-items
    v-model="tab"
    style="background: none;"
  >
    <v-tab-item>
      <div>
        <h1 class="text-center text-h4 mt-4">
          Hello, I'm Wesley Matthews
        </h1>
        <h2 class="text-center text-body-1 my-4">
          I'm a software developer with experience in web and game development.
        </h2>
      </div>
      <h5 class="text-center text-h6">
        Skills
      </h5>
      <v-row
        justify="center"
        class="ma-2"
      >
        <v-col
          cols="12"
          md="6"
          class="pa-0"
        >
          <SkillChip
            v-for="(skill, i) in skills"
            :key="`skill-${i}`"
            class="ma-2"
            :skill="skill"
          />
        </v-col>
      </v-row>
      <h5 class="text-center text-h6">
        Experience
      </h5>
      <v-row
        class="ma-2"
        style="flex-direction: column;"
      >
        <v-col
          v-for="(job, i) in experience"
          :key="`school-${i}`"
          cols="12"
          md="6"
          class="pa-2 mx-auto"
        >
          <v-card>
            <v-card-title
              class="pa-4"
              v-text="job.company"
            />
            <v-card-subtitle class="px-4 py-0">
              <p class="mb-0">
                {{ job.title }}, {{ job.type }}
              </p>
              <p class="mb-0">
                {{ job.start }} - {{ job.end }}
              </p>
            </v-card-subtitle>
            <v-card-text
              class="pa-4"
              v-text="job.description"
            />
          </v-card>
        </v-col>
      </v-row>
      <h5 class="text-center text-h6">
        Education
      </h5>
      <v-row
        class="ma-2"
        style="flex-direction: column;"
      >
        <v-col
          v-for="(school, i) in education"
          :key="`school-${i}`"
          cols="12"
          md="6"
          class="pa-2 mx-auto"
        >
          <v-card>
            <v-card-title v-text="school.name" />
            <v-card-subtitle>
              <p class="mb-0">
                {{ school.degree }}
              </p>
              <p class="mb-0">
                {{ school.start }} - {{ school.end }}
              </p>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <h5 class="text-center text-h6">
        Resume
      </h5>
      <div class="text-center my-4">
        <v-btn
          color="primary"
          href="/resume.pdf"
          target="_blank"
        >
          Download
        </v-btn>
      </div>
    </v-tab-item>
    <v-tab-item>
      <v-row
        no-gutters
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
          class="pa-0"
        >
          <v-autocomplete
            v-model="projectFilter"
            label="Search by skills"
            item-text="name"
            item-value="name"
            multiple
            outlined
            hide-details
            class="mx-4 mt-4"
            :items="skills"
          />
          <v-card
            v-for="(project, i) in filteredProjects"
            :key="`project-${i}`"
            class="ma-4"
          >
            <v-card-title
              class="pa-4"
              v-text="project.name"
            />
            <v-card-text class="px-4 py-0">
              <p v-text="project.description" />
              <div class="ma-n2">
                <SkillChip
                  v-for="(skill, j) in project.skills"
                  :key="`project-skill-${j}`"
                  :skill="skillsByName[skill]"
                  class="ma-2"
                />
              </div>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-btn color="primary" :href="project.github" target="_blank">
                <v-icon left>
                  mdi-github
                </v-icon>
                Github
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
import education from '~/assets/data/education.js'
import experience from '~/assets/data/experience.js'
import skills from '~/assets/data/skills.js'
import projects from '~/assets/data/projects.js'

export default {
  data: vm => ({
    tab: 0,
    education,
    experience,
    skills,
    projects,
    projectFilter: [],
  }),
  computed: {
    skillsByName() {
      const skills = {}
      this.skills.forEach((skill) => {
        skills[skill.name] = skill
      })
      return skills
    },
    filteredProjects() {
      if (this.projectFilter.length === 0) { return this.projects }
      return this.projects.filter(project => project.skills.some(skill => this.projectFilter.includes(skill)))
    },
  },
}
</script>
