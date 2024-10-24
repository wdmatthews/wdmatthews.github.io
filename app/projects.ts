import { Skill } from './skills';
import { languages, frameworks, technologies } from './skills';

interface Project {
  name: string;
  description: string;
  skills: (Skill|undefined)[];
  liveLink: string;
  repoLink: string;
}

const projects:Project[] = [
  {
    name: 'Course Viewer',
    description: 'A live weekly schedule for school courses. Includes alerts for the start of class, 5 minutes before the end, and the end of class. Designed for actual use.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      frameworks.find(skill => skill.name === 'Vue.js'),
      frameworks.find(skill => skill.name === 'Nuxt'),
    ],
    liveLink: 'https://wdmatthews.github.io/course-viewer/',
    repoLink: 'https://github.com/wdmatthews/course-viewer',
  },
  {
    name: 'Periodic Table',
    description: 'A basic periodic table with multiple views for different characteristics of elements. Designed for actual use.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      frameworks.find(skill => skill.name === 'Vue.js'),
      frameworks.find(skill => skill.name === 'Nuxt'),
    ],
    liveLink: 'https://wdmatthews.github.io/periodic-table/',
    repoLink: 'https://github.com/wdmatthews/periodic-table',
  },
  {
    name: 'Gem Swap',
    description: 'A simple match-three game inspired by Bejeweled. Controlled with WASD/arrow keys and the space bar. Designed to learn new game mechanics and develop another finished game.',
    skills: [
      languages.find(skill => skill.name === 'C#'),
      technologies.find(skill => skill.name === 'Unity'),
    ],
    liveLink: 'https://wdmatthews.github.io/gem-swap/',
    repoLink: 'https://github.com/wdmatthews/gem-swap',
  },
  {
    name: 'Simple Platformer',
    description: 'A simple 2D platformer game with the goal of making a finished, test driven game.',
    skills: [
      languages.find(skill => skill.name === 'C#'),
      technologies.find(skill => skill.name === 'Unity'),
    ],
    liveLink: 'https://wdmatthews.github.io/simple-platformer/',
    repoLink: 'https://github.com/wdmatthews/simple-platformer',
  },
  {
    name: 'Joyfully Cooked',
    description: 'An experiment with graphic design in Vuetify and state in Vue. No database connection but everything works.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      frameworks.find(skill => skill.name === 'Vue.js'),
      frameworks.find(skill => skill.name === 'Nuxt'),
    ],
    liveLink: 'https://wdmatthews.github.io/joyfully-cooked/',
    repoLink: 'https://github.com/wdmatthews/joyfully-cooked',
  },
  {
    name: 'squared',
    description: 'A short prototype based on 2048 to experiment with artistic design and puzzle making.',
    skills: [
      languages.find(skill => skill.name === 'C#'),
      technologies.find(skill => skill.name === 'Unity'),
    ],
    liveLink: 'https://wdmatthews.github.io/squared/',
    repoLink: 'https://github.com/wdmatthews/squared',
  },
  {
    name: 'Level Up Audio',
    description: 'A graphic design experiment in Vuetify, especially to learn audio in JavaScript.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      frameworks.find(skill => skill.name === 'Vue.js'),
      frameworks.find(skill => skill.name === 'Nuxt'),
    ],
    liveLink: 'https://wdmatthews.github.io/level-up-audio/',
    repoLink: 'https://github.com/wdmatthews/level-up-audio',
  },
  {
    name: 'Kindly',
    description: 'A graphic design and education experiment in Vuetify, using Chart.js.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      frameworks.find(skill => skill.name === 'Vue.js'),
      frameworks.find(skill => skill.name === 'Nuxt'),
    ],
    liveLink: 'https://wdmatthews.github.io/kindly/',
    repoLink: 'https://github.com/wdmatthews/kindly',
  },
  {
    name: 'PVZ',
    description: 'A Plants vs Zombies style game to learn new game mechanics and experiment with basic art.',
    skills: [
      languages.find(skill => skill.name === 'C#'),
      technologies.find(skill => skill.name === 'Unity'),
    ],
    liveLink: 'https://wdmatthews.github.io/pvz/',
    repoLink: 'https://github.com/wdmatthews/pvz',
  },
  {
    name: 'Vue Charts',
    description: 'An experiment with reactive charts from Chart.js using the Vue store.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      frameworks.find(skill => skill.name === 'Vue.js'),
      frameworks.find(skill => skill.name === 'Nuxt'),
    ],
    liveLink: 'https://wdmatthews.github.io/vue-charts/',
    repoLink: 'https://github.com/wdmatthews/vue-charts',
  },
  {
    name: 'Mars Colony',
    description: 'A city building game based in Mars used as a visual experiment to learn new game mechanics and saving data in the browser.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      languages.find(skill => skill.name === 'C#'),
      technologies.find(skill => skill.name === 'Unity'),
    ],
    liveLink: 'https://wdmatthews.github.io/mars-colony/',
    repoLink: 'https://github.com/wdmatthews/mars-colony',
  },
  {
    name: 'Life is Unfair',
    description: 'A short platformer game for experimenting with game settings and saving data in the browser.',
    skills: [
      languages.find(skill => skill.name === 'JavaScript'),
      languages.find(skill => skill.name === 'C#'),
      technologies.find(skill => skill.name === 'Unity'),
    ],
    liveLink: 'https://wdmatthews.github.io/life-is-unfair/',
    repoLink: 'https://github.com/wdmatthews/life-is-unfair',
  },
];

export default projects;
