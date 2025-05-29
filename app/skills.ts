interface Skill {
  name: string;
  color: string;
}

const languages:Skill[] = [
  {
    name: 'JavaScript',
    color: 'var(--mantine-color-yellow-4)',
  },
  {
    name: 'C#',
    color: 'var(--mantine-color-violet-6)',
  },
  {
    name: 'HTML/CSS',
    color: 'var(--mantine-color-orange-6)',
  },
  {
    name: 'SQL',
    color: "var(--mantine-color-blue-5)",
  },
  {
    name: 'PHP',
    color: 'var(--mantine-color-violet-4)',
  },
  {
    name: 'Java',
    color: "var(--mantine-color-blue-6)",
  },
  {
    name: 'Python',
    color: "var(--mantine-color-yellow-4)",
  },
];

const frameworks:Skill[] = [
  {
    name: 'React',
    color: 'var(--mantine-color-blue-3)',
  },
  {
    name: 'Next.js',
    color: 'var(--mantine-color-blue-7)',
  },
  {
    name: 'Vue.js',
    color: 'var(--mantine-color-teal-7)',
  },
  {
    name: 'Nuxt',
    color: 'var(--mantine-color-green-6)',
  },
];

const technologies:Skill[] = [
  {
    name: 'Firebase',
    color: 'var(--mantine-color-orange-9)',
  },
  {
    name: 'Unity',
    color: 'var(--mantine-color-dark-3)',
  },
  {
    name: 'GitHub',
    color: 'var(--mantine-color-gray-0)',
  },
  {
    name: 'Node.js',
    color: 'var(--mantine-color-lime-8)',
  },
  {
    name: 'MongoDB',
    color: 'var(--mantine-color-green-4)',
  },
  {
    name: 'Express.js',
    color: 'var(--mantine-color-white)',
  },
  {
    name: 'MySQL',
    color: 'var(--mantine-color-orange-4)',
  },
  {
    name: 'Docker',
    color: 'var(--mantine-color-blue-6)',
  },
];

export type { Skill };
export { languages, frameworks, technologies };
