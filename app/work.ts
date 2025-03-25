interface Job {
  id: number;
  name: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string[];
}

const work:Job[] = [
  {
    id: 3,
    name: 'Computer Science Teaching Assistant',
    company: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    start: 'January 2024',
    end: 'December 2024',
    description: [
      'Collaborated with other teaching assistants in helping students to understand assignments and prepare for exams, taking students from confused and overwhelmed to learning content and passing exams',
      'Taught fundamental computer science concepts, the C language and debugging, to help prepare students for upcoming lectures and labs',
      'Created handouts for quick reference when working on labs, leading to students finding answers and solving labs',
    ],
  },
  {
    id: 2,
    name: 'Online Grocery Pickup Associate',
    company: 'Walmart',
    location: 'Bourbonnais, IL',
    start: 'June 2023',
    end: 'August 2023',
    description: [
      'Collected customer orders from the online shopping portal and distributed orders to customers’ cars',
      'Trained new associates how to use equipment for online grocery orders',
    ],
  },
  {
    id: 1,
    name: 'Junior Web Developer',
    company: 'Block Bins',
    location: 'Chicago, IL (Remote)',
    start: 'June 2021',
    end: 'August 2023',
    description: [
      'Developed a new website from scratch along with the CEO and initially a few interns, using modern web frameworks',
      'Maintained and adapted code based on user feature requests and code reviews',
    ],
  },
  {
    id: 0,
    name: 'Web Development Intern',
    company: 'Block Bins',
    location: 'Chicago, IL (Remote)',
    start: 'September 2020',
    end: 'April 2021',
    description: [
      'Initiated the design of a new website based on an old prototype, together with fellow interns',
      'Discussed alternative solutions in database design',
      'Researched emerging web technologies',
    ],
  },
];

export default work;
