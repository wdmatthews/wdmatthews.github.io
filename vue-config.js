new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: () => ({
    selfDescription: "I'm a software developer with experience in web and game development.",
    tab: 0,
    schools: [
      {
        name: 'Illinois Mathematics and Science Academy',
        degree: 'High School Diploma',
        start: 'August 2018',
        end: 'June 2021',
      },
      {
        name: 'Kankakee High School',
        degree: 'High School Diploma',
        start: 'August 2017',
        end: 'June 2018',
      },
    ],
    jobs: [
      {
        title: 'Web Development Intern',
        company: 'Block Bins',
        type: 'Internship',
        start: 'September 2020',
        end: 'April 2021',
      },
    ],
    skills: [
      {
        name: 'C#',
        color: 'deep-purple',
        icon: 'language-csharp',
      },
      {
        name: 'Unity',
        color: 'blue',
        icon: 'unity',
      },
      {
        name: 'Node.js',
        color: 'green darken-3',
        icon: 'nodejs',
      },
      {
        name: 'MongoDB',
        color: 'green',
        icon: 'leaf',
      },
      {
        name: 'Nuxt.js',
        color: 'teal accent-4',
        icon: 'nuxt',
      },
      {
        name: 'Vue.js',
        color: 'teal',
        icon: 'vuejs',
      },
      {
        name: 'Vuetify.js',
        color: 'light-blue',
        icon: 'vuetify',
      },
      {
        name: 'jQuery',
        color: 'blue darken-3',
        icon: 'jquery',
      },
      {
        name: 'Bootstrap',
        color: 'purple darken-2',
        icon: 'bootstrap',
      },
      {
        name: 'PHP',
        color: 'indigo',
        icon: 'language-php',
      },
      {
        name: 'MySQL',
        color: 'blue darken-2',
        icon: 'database',
      },
    ],
    contactLinks: [
      {
        icon: 'gmail',
        href: 'mailto:wdmatthews3@gmail.com',
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/wesley-matthews-004546192/',
      },
      {
        icon: 'github',
        href: 'https://github.com/wdmatthews',
      },
    ],
    projects: [
      {
        name: 'mini-query',
        github: 'https://wdmatthews.github.io/mini-query/',
        description: 'A lightweight script to shorten code related to DOM manipulation.',
        skills: [
          {
            name: 'JavaScript',
            color: 'yellow darken-3',
            icon: 'language-javascript',
          },
        ],
      },
      {
        name: 'Object Pooling',
        github: 'https://github.com/wdmatthews/object-pooling',
        description: 'A simple object pooling system for the Unity game engine.',
        skills: [
          {
            name: 'C#',
            color: 'deep-purple',
            icon: 'language-csharp',
          },
          {
            name: 'Unity',
            color: 'blue',
            icon: 'unity',
          },
        ],
      },
      {
        name: 'Event System',
        github: 'https://github.com/wdmatthews/event-system',
        description: 'A scriptable object based event system with cross scene compatability.',
        skills: [
          {
            name: 'C#',
            color: 'deep-purple',
            icon: 'language-csharp',
          },
          {
            name: 'Unity',
            color: 'blue',
            icon: 'unity',
          },
        ],
      },
      {
        name: 'UI Tweening',
        github: 'https://github.com/wdmatthews/ui-tweening',
        description: 'A tweening package for Unity, focused on UI.',
        skills: [
          {
            name: 'C#',
            color: 'deep-purple',
            icon: 'language-csharp',
          },
          {
            name: 'Unity',
            color: 'blue',
            icon: 'unity',
          },
        ],
      },
      {
        name: 'node-auth',
        github: 'https://github.com/wdmatthews/node-auth',
        description: 'A simple authentication system for Node.js, including middleware for preventing page access.',
        skills: [
          {
            name: 'Node.js',
            color: 'green darken-3',
            icon: 'nodejs',
          },
          {
            name: 'MongoDB',
            color: 'green',
            icon: 'leaf',
          },
        ],
      },
      {
        name: 'Uno',
        github: 'https://github.com/wdmatthews/uno',
        description: 'A Socket.io implementation of the classic Uno card game.',
        skills: [
          {
            name: 'Node.js',
            color: 'green darken-3',
            icon: 'nodejs',
          },
          {
            name: 'MongoDB',
            color: 'green',
            icon: 'leaf',
          },
          {
            name: 'Vue.js',
            color: 'teal',
            icon: 'vuejs',
          },
          {
            name: 'Vuetify.js',
            color: 'light-blue',
            icon: 'vuetify',
          },
        ],
      },
      {
        name: 'Falling Tiles',
        github: 'https://github.com/wdmatthews/falling-tiles',
        description: 'A game with falling tiles made in Unity that uses MongoDB to save game data.',
        skills: [
          {
            name: 'C#',
            color: 'deep-purple',
            icon: 'language-csharp',
          },
          {
            name: 'Unity',
            color: 'blue',
            icon: 'unity',
          },
          {
            name: 'Node.js',
            color: 'green darken-3',
            icon: 'nodejs',
          },
          {
            name: 'MongoDB',
            color: 'green',
            icon: 'leaf',
          },
        ],
      },
      {
        name: 'Calculator',
        github: 'https://wdmatthews.github.io/calculator/',
        description: 'A calculator made with Vue.js for unit testing practice.',
        skills: [
          {
            name: 'JavaScript',
            color: 'yellow darken-3',
            icon: 'language-javascript',
          },
          {
            name: 'Vue.js',
            color: 'teal',
            icon: 'vuejs',
          },
          {
            name: 'Vuetify.js',
            color: 'light-blue',
            icon: 'vuetify',
          },
        ],
      },
      {
        name: 'Life is Unfair',
        github: 'https://wdmatthews.github.io/life-is-unfair/',
        description: 'A simple platformer about life and joy.',
        skills: [
          {
            name: 'C#',
            color: 'deep-purple',
            icon: 'language-csharp',
          },
          {
            name: 'Unity',
            color: 'blue',
            icon: 'unity',
          },
        ],
      },
      {
        name: 'Task Dungeon',
        github: 'https://github.com/wdmatthews/task-dungeon',
        description: 'A medieval task manager that rewards you for completing tasks.',
        skills: [
          {
            name: 'Node.js',
            color: 'green darken-3',
            icon: 'nodejs',
          },
          {
            name: 'MongoDB',
            color: 'green',
            icon: 'leaf',
          },
          {
            name: 'Vue.js',
            color: 'teal',
            icon: 'vuejs',
          },
          {
            name: 'Vuetify.js',
            color: 'light-blue',
            icon: 'vuetify',
          },
        ],
      },
      {
        name: 'Centauri Engine',
        github: 'https://github.com/wdmatthews/centauri-engine',
        description: 'An experiment on the Canvas API to create a game engine.',
        skills: [
          {
            name: 'JavaScript',
            color: 'yellow darken-3',
            icon: 'language-javascript',
          },
        ],
      },
      {
        name: 'Mars Colony',
        github: 'https://wdmatthews.github.io/mars-colony/',
        description: 'A city building game made in Unity that saves to a local Vuex store.',
        skills: [
          {
            name: 'C#',
            color: 'deep-purple',
            icon: 'language-csharp',
          },
          {
            name: 'Unity',
            color: 'blue',
            icon: 'unity',
          },
          {
            name: 'Vue.js',
            color: 'teal',
            icon: 'vuejs',
          },
        ],
      },
      {
        name: 'Spearmint',
        github: 'https://github.com/wdmatthews/spearmint',
        description: 'A chat website with a NuxtJS frontend and MongoDB Realm backend.',
        skills: [
          {
            name: 'MongoDB',
            color: 'green',
            icon: 'leaf',
          },
          {
            name: 'Vue.js',
            color: 'teal',
            icon: 'vuejs',
          },
          {
            name: 'Vuetify.js',
            color: 'light-blue',
            icon: 'vuetify',
          },
          {
            name: 'Nuxt.js',
            color: 'teal accent-4',
            icon: 'nuxt',
          },
        ],
      },
    ],
  }),
});