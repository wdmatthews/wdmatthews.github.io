<template>
  <v-app-bar app>
    <v-tabs
      v-model="tab"
      centered
    >
      <v-tab>About</v-tab>
      <v-tab>Projects</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data: vm => ({
    tab: 0,
  }),
  watch: {
    tab() {
      this.$emit('tab-changed', this.tab)
    },
  },
}
</script>
