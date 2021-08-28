<template>
  <v-footer
    app
    padless
  >
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="pa-2"
    >
      <v-btn
        v-for="(link, i) in links"
        :key="`link-${i}`"
        class="ma-2"
        icon
        :href="link.href"
        target="_blank"
      >
        <v-icon size="24px">
          mdi-{{ link.icon }}
        </v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: vm => ({
    links: [
      {
        icon: 'gmail',
        href: 'mailto:wdmatthews3@gmail.com',
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/wdmatthews',
      },
      {
        icon: 'github',
        href: 'https://github.com/wdmatthews',
      },
    ],
  }),
}
</script>
