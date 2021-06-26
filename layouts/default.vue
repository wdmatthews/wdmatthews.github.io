<template>
  <v-app>
    <TheAppBar @tab-changed="setTab" />
    <v-main>
      <nuxt ref="page" />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  methods: {
    setTab(tab) {
      this.$refs.page.$children[0].tab = tab
    },
  },
}
</script>
