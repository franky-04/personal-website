export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

export interface Skill {
  name: string
  level: SkillLevel
  yearsOfExperience: number
  icon?: string // Per lucide-react icons
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
  color: string // Tailwind color class
}

export interface Skill {
  name: string
  level: SkillLevel
  yearsOfExperience: number
  icon?: string
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Sviluppo di interfacce utente moderne e reattive',
    color: 'blue',
    skills: [
      { name: 'JavaScript', level: 'Expert', yearsOfExperience: 3, icon: 'Code2' },
      { name: 'TypeScript', level: 'Advanced', yearsOfExperience: 3, icon: 'FileType' },
      { name: 'Angular', level: 'Expert', yearsOfExperience: 3, icon: 'Zap' },
      { name: 'React', level: 'Advanced', yearsOfExperience: 2, icon: 'Atom' },
      { name: 'HTML5/CSS3', level: 'Expert', yearsOfExperience: 4, icon: 'Globe' },
      { name: 'Tailwind CSS', level: 'Advanced', yearsOfExperience: 2, icon: 'Palette' }
    ]
  },
  {
    title: 'Backend Development',
    description: 'Architetture server-side scalabili e performanti',
    color: 'green',
    skills: [
      { name: 'Node.js', level: 'Advanced', yearsOfExperience: 3, icon: 'Server' },
      { name: 'Express.js', level: 'Advanced', yearsOfExperience: 3, icon: 'Zap' },
      { name: 'Java', level: 'Advanced', yearsOfExperience: 3, icon: 'Coffee' },
      { name: 'Spring Boot', level: 'Advanced', yearsOfExperience: 2, icon: 'Leaf' },
      { name: 'Python', level: 'Intermediate', yearsOfExperience: 2, icon: 'Code' },
      { name: 'RESTful APIs', level: 'Expert', yearsOfExperience: 3, icon: 'Link' }
    ]
  },
  {
    title: 'Database & Data Management',
    description: 'Gestione e ottimizzazione di database relazionali e NoSQL',
    color: 'purple',
    skills: [
      { name: 'MongoDB', level: 'Advanced', yearsOfExperience: 3, icon: 'Database' },
      { name: 'PostgreSQL', level: 'Advanced', yearsOfExperience: 2, icon: 'Database' },
      { name: 'MySQL', level: 'Intermediate', yearsOfExperience: 2, icon: 'Database' },
      { name: 'SQL', level: 'Advanced', yearsOfExperience: 3, icon: 'Search' },
      { name: 'Data Modeling', level: 'Advanced', yearsOfExperience: 3, icon: 'GitBranch' }
    ]
  },
  {
    title: 'DevOps & Tools',
    description: 'Strumenti per sviluppo, deploy e monitoraggio',
    color: 'orange',
    skills: [
      { name: 'Linux/Shell', level: 'Intermediate', yearsOfExperience: 3, icon: 'Terminal' },
      { name: 'Git/GitHub', level: 'Advanced', yearsOfExperience: 4, icon: 'GitBranch' },
      { name: 'Docker', level: 'Intermediate', yearsOfExperience: 1, icon: 'Container' },
      { name: 'Microservices', level: 'Advanced', yearsOfExperience: 2, icon: 'Boxes' },
      { name: 'Firebase', level: 'Advanced', yearsOfExperience: 2, icon: 'Flame' }
    ]
  },
  {
    title: 'Specialized Technologies',
    description: 'Tecnologie specializzate per soluzioni enterprise',
    color: 'red',
    skills: [
      { name: 'IoT Integration', level: 'Advanced', yearsOfExperience: 1, icon: 'Wifi' },
      { name: 'Odoo ERP/CRM', level: 'Advanced', yearsOfExperience: 1, icon: 'Building' },
      { name: 'Real-time Data Processing', level: 'Advanced', yearsOfExperience: 2, icon: 'Activity' },
      { name: 'AI Prompt Engineering', level: 'Intermediate', yearsOfExperience: 1, icon: 'Bot' }
    ]
  },
  {
    title: 'Methodologies & Soft Skills',
    description: 'Metodologie di lavoro e competenze trasversali',
    color: 'indigo',
    skills: [
      { name: 'Agile/Scrum', level: 'Advanced', yearsOfExperience: 3, icon: 'Users' },
      { name: 'Remote Work', level: 'Expert', yearsOfExperience: 3, icon: 'Home' },
      { name: 'Team Collaboration', level: 'Advanced', yearsOfExperience: 3, icon: 'Users2' },
      { name: 'Problem Solving', level: 'Advanced', yearsOfExperience: 4, icon: 'Lightbulb' },
      { name: 'Project Management', level: 'Intermediate', yearsOfExperience: 2, icon: 'CheckSquare' }
    ]
  }
]

// Top 6 skills per la homepage
export const topSkills = [
  'JavaScript/TypeScript',
  'Angular & React',
  'Java/Spring Boot',
  'Node.js/Express',
  'MongoDB/PostgreSQL',
  'Microservices & IoT'
]

// Statistiche per la homepage
export const skillStats = {
  totalSkills: skillsData.reduce((acc, category) => acc + category.skills.length, 0),
  expertSkills: skillsData.reduce((acc, category) =>
    acc + category.skills.filter(skill => skill.level === 'Expert').length, 0
  ),
  yearsOfExperience: Math.max(...skillsData.flatMap(category =>
    category.skills.map(skill => skill.yearsOfExperience)
  )),
  categories: skillsData.length
}