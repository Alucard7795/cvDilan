export interface Profile {
  readonly name: string;
  readonly shortName: string;
  readonly role: string;
  readonly secondaryRole: string;
  readonly location: string;
  readonly email: string;
  readonly linkedin: string;
  readonly github: string;
}

export interface ExpertiseItem {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface ExperienceItem {
  readonly title: string;
  readonly company: string;
  readonly dates: string;
  readonly points: readonly string[];
  readonly technologies: readonly string[];
}

export interface EducationItem {
  readonly degree: string;
  readonly school: string;
  readonly dates: string;
}

export interface LanguageItem {
  readonly language: string;
  readonly level: string;
}

export const profile = {
  name: 'Dilan Mauricio García Cuellar',
  shortName: 'Dilan García',
  role: 'Full-Stack Developer',
  secondaryRole: 'Systems Engineer',
  location: 'Cali, Colombia',
  email: 'dilan-garciac@outlook.com',
  linkedin: 'https://www.linkedin.com/in/dilan-mauricio-garcia-472aab209',
  github: 'https://github.com/Alucard7795',
} satisfies Profile;

export const summary: readonly string[] = [
  'Systems Engineer and Full-Stack Developer with more than seven years of experience building web and mobile applications.',
  'Experienced with React, React Native, Node.js, TypeScript, GraphQL, AWS, and SQL and NoSQL databases across banking, e-commerce, streaming, API, microservice, and native mobile solutions.',
  'A collaborative and adaptable engineer accustomed to working in Agile and Scrum teams and delivering reliable experiences across web, iOS, and Android.',
];

export const expertise: readonly ExpertiseItem[] = [
  {
    title: 'Full-stack development',
    description: 'Web applications, APIs, and microservices built across modern JavaScript and cloud ecosystems.',
    tags: ['React', 'Node.js', 'GraphQL'],
  },
  {
    title: 'Mobile development',
    description: 'Cross-platform React Native applications with native Android and iOS integrations when required.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    title: 'Cloud solutions',
    description: 'Cloud-backed applications and serverless workloads using AWS services and Lambda functions.',
    tags: ['AWS', 'Lambda', 'Microservices'],
  },
  {
    title: 'Product delivery',
    description: 'Collaborative delivery of secure, maintainable software in Agile and Scrum environments.',
    tags: ['Git', 'Agile', 'Scrum'],
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    title: 'React Native Developer',
    company: 'Takeoffmedia',
    dates: 'August 20, 2024 - September 18, 2026',
    points: [
      'Developed and maintained mobile applications with React Native, using Redux for predictable state management and Git for team collaboration.',
      'Implemented native Android and iOS patches and platform-specific solutions to address compatibility, integration, and technical requirements.',
    ],
    technologies: ['React Native', 'TypeScript', 'Redux', 'iOS', 'Android', 'macOS'],
  },
  {
    title: 'Software Engineer II',
    company: 'VOV Solutions Inc',
    dates: 'May 25, 2022 - August 15, 2024',
    points: [
      'Developed, enhanced, and tested web applications, microservices, and AWS Lambda functions.',
      'Built React applications and marketplace integrations, including Shopify.',
      'Developed and maintained APIs with Node.js, Express, Sequelize, and GraphQL for data management, services, and integrations.',
    ],
    technologies: ['React', 'Node.js', 'React Native', 'AWS', 'GraphQL', 'macOS'],
  },
  {
    title: 'Intermediate Software Developer',
    company: 'PersonalSoft',
    dates: 'August 12, 2021 - May 24, 2022',
    points: [
      'Developed, enhanced, and tested web applications and microservices for the banking sector using the AWS SDK and cloud services.',
      'Delivered secure and reliable online banking solutions with an efficient user experience.',
    ],
    technologies: ['Angular', 'Node.js', 'AWS', 'Windows'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Synapsys Tech.',
    dates: 'December 1, 2018 - August 11, 2021',
    points: [
      'Developed and maintained Java APIs and web and mobile applications for iOS and Android.',
      'Built cross-platform solutions with React Native and Android-specific functionality with Java.',
      'Created React web applications for the administration, management, and control of commercial platforms and services.',
    ],
    technologies: ['React', 'React Native', 'Redux', 'Java', 'macOS'],
  },
];

export const skills: readonly string[] = [
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React', 'React Native',
  'Node.js', 'Express', 'GraphQL', 'Redux', 'Angular', 'Java', 'AWS',
  'SQL', 'NoSQL', 'Git',
];

export const education: readonly EducationItem[] = [
  { degree: 'Systems Engineer', school: 'Universidad Antonio José Camacho', dates: '2023 - 2026' },
  { degree: 'Technologist Degree', school: 'Corporación Universitaria Minuto de Dios', dates: '2012 - 2016' },
  { degree: "Bachelor's Degree", school: 'Institución Educativa Agustín Nieto Caballero', dates: '2006 - 2011' },
];

export const languages: readonly LanguageItem[] = [
  { language: 'Spanish', level: 'Native' },
  { language: 'English', level: 'B2' },
];

export const hobbies = 'I enjoy solving puzzles such as the Rubik\'s Cube. In my free time, I take development courses to keep my skills current and continue learning.';
