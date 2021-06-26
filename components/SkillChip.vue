<template>
  <v-chip :color="skill.color">
    <v-icon left class="ml-0">
      mdi-{{ skill.icon }}
    </v-icon>
    {{ skill.name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
