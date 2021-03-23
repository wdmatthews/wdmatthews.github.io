const skills = [
  'C#',
  'Unity',
  'Node.js',
  'MongoDB',
  'Vue.js',
  'Vuetify.js',
  'jQuery',
  'Bootstrap',
  'PHP',
  'MySQL',
];

const skillsSection = mq.one('#skills-list');
skills.forEach(skill => {
  const listItem = mq.new('li', skillsSection);
  listItem.text(skill);
});

const projects = [
  {
    name: 'mini-query',
    github: 'https://wdmatthews.github.io/mini-query/',
    description: 'A lightweight script to shorten code related to DOM manipulation.',
    skills: 'JavaScript',
  },
  {
    name: 'Object Pooling',
    github: 'https://github.com/wdmatthews/object-pooling',
    description: 'A simple object pooling system for the Unity game engine.',
    skills: 'Unity, C#',
  },
];
const projectsSection = mq.one('#projects-list');
projects.forEach(project => {
  const projectCard = mq.new('div', projectsSection);
  projectCard.addClass('project');
  projectCard.html(`
    <p class="project-name"><a href="${project.github}" target="_blank">${project.name}</a></p>
    <p class="project-description">${project.description}</p>
    <p class="project-skills">${project.skills}</p>
  `);
});