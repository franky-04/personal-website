'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Filter,
  Clock,
  TrendingUp,
  Code2,
  Server,
  Database,
  Settings,
  Zap,
  Users,
  Award,
  Target
} from 'lucide-react'
import { skillsData, skillStats, type SkillLevel, type SkillCategory, type Skill } from '@/data/skills'
import * as LucideIcons from 'lucide-react'

// Mapping dei livelli per la visualizzazione
const levelConfig = {
  'Beginner': { percentage: 25, color: 'bg-gray-400', textColor: 'text-gray-600' },
  'Intermediate': { percentage: 50, color: 'bg-yellow-400', textColor: 'text-yellow-600' },
  'Advanced': { percentage: 75, color: 'bg-blue-500', textColor: 'text-blue-600' },
  'Expert': { percentage: 100, color: 'bg-green-500', textColor: 'text-green-600' }
}

// Mapping dei colori per le categorie
const categoryColors = {
  'blue': 'bg-blue-100 text-blue-700 border-blue-200',
  'green': 'bg-green-100 text-green-700 border-green-200',
  'purple': 'bg-purple-100 text-purple-700 border-purple-200',
  'orange': 'bg-orange-100 text-orange-700 border-orange-200',
  'red': 'bg-red-100 text-red-700 border-red-200',
  'indigo': 'bg-indigo-100 text-indigo-700 border-indigo-200'
}

// Componente per una singola skill card
function SkillCard({ skill, categoryColor }: { skill: Skill, categoryColor: string }) {
  const levelInfo = levelConfig[skill.level as SkillLevel]
  
  // Ottieni l'icona dinamicamente
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = skill.icon && (LucideIcons as any)[skill.icon] 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? (LucideIcons as any)[skill.icon] 
    : Code2

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${categoryColor}`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {skill.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{skill.yearsOfExperience} anni</span>
            </div>
          </div>
        </div>
        
        <div className={`px-2 py-1 rounded text-xs font-medium ${levelInfo.textColor} bg-gray-50`}>
          {skill.level}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Competenza</span>
          <span className={levelInfo.textColor}>{levelInfo.percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${levelInfo.color}`}
            style={{ width: `${levelInfo.percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

// Componente per le statistiche della categoria
function CategoryStats({ category }: { category: SkillCategory }) {
  const expertSkills = category.skills.filter(s => s.level === 'Expert').length
  const advancedSkills = category.skills.filter(s => s.level === 'Advanced').length
  const avgExperience = Math.round(
    category.skills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0) / category.skills.length
  )

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-gray-900">{category.skills.length}</div>
          <div className="text-gray-600 text-sm">Tecnologie</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">{expertSkills}</div>
          <div className="text-gray-600 text-sm">Expert Level</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">{advancedSkills}</div>
          <div className="text-gray-600 text-sm">Advanced Level</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-purple-600">{avgExperience}</div>
          <div className="text-gray-600 text-sm">Anni Medi</div>
        </div>
      </div>
    </div>
  )
}

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Filtra le categorie in base alla selezione
  const filteredCategories = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(category => 
        category.title.toLowerCase().includes(selectedCategory.toLowerCase())
      )

  // Filtra per search term se presente
  const searchFilteredCategories = searchTerm 
    ? filteredCategories.map(category => ({
        ...category,
        skills: category.skills.filter(skill =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.skills.length > 0)
    : filteredCategories

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Competenze Tecniche
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Un overview completo delle tecnologie e metodologie che utilizzo per creare 
              soluzioni scalabili e performanti
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{skillStats.totalSkills}</div>
                <div className="text-gray-600">Tecnologie</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">{skillStats.expertSkills}</div>
                <div className="text-gray-600">Expert Level</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">{skillStats.yearsOfExperience}</div>
                <div className="text-gray-600">Anni Max</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">{skillStats.categories}</div>
                <div className="text-gray-600">Categorie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Tutte
                </button>
                {skillsData.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setSelectedCategory(category.title.split(' ')[0].toLowerCase())}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.title.split(' ')[0].toLowerCase()
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cerca una tecnologia..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-64"
                />
                <Filter className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {searchFilteredCategories.map((category) => (
              <div key={category.title} className="mb-16">
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[category.color as keyof typeof categoryColors]}`}>
                      {category.title.includes('Frontend') && <Code2 className="w-6 h-6" />}
                      {category.title.includes('Backend') && <Server className="w-6 h-6" />}
                      {category.title.includes('Database') && <Database className="w-6 h-6" />}
                      {category.title.includes('DevOps') && <Settings className="w-6 h-6" />}
                      {category.title.includes('Specialized') && <Zap className="w-6 h-6" />}
                      {category.title.includes('Methodologies') && <Users className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Category Stats */}
                  <CategoryStats category={category} />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard 
                      key={`${skill.name}-${skillIndex}`}
                      skill={skill} 
                      categoryColor={categoryColors[category.color as keyof typeof categoryColors]}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* No Results */}
            {searchFilteredCategories.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nessun risultato trovato
                </h3>
                <p className="text-gray-600 mb-4">
                  Prova a modificare i filtri o il termine di ricerca
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Resetta filtri
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Legend */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Legenda Livelli di Competenza
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(levelConfig).map(([level, config]) => (
                <div key={level} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full ${config.color}`}></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{level}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${config.color}`}
                      style={{ width: `${config.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {config.percentage}% di padronanza
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Learning CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sempre in Crescita
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              La tecnologia evolve rapidamente e io evolvo con lei. Dedico costantemente tempo 
              all&lsquo;apprendimento di nuovi strumenti e all&lsquo;approfondimento delle competenze esistenti.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                Vedi i Progetti
              </Link>
              
              <Link
                href="/experience"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Esperienza Dettagliata
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}