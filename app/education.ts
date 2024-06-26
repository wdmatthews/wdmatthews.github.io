interface School {
  name: string;
  location: string;
  degree: string;
  gpa?: number;
  graduation: string;
}

const education:School[] = [
  {
    name: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    degree: 'B.S. Computer Engineering',
    gpa: 4,
    graduation: 'May 2025',
  },
];

export default education;
