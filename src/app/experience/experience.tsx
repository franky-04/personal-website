'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Briefcase,
  GraduationCap,
  Heart,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Building,
  Award,
  Users,
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
  Filter,
  Star,
  Globe
} from 'lucide-react'
import { workExperience, education, volunteering} from '@/data/cv-data'

type ExperienceType = 'all' | 'work' | 'education' | 'volunteer'

// Combine all experiences with type
const allExperiences = [
  ...workExperience.map(exp => ({ ...exp, type: 'work' as const, icon: Briefcase, color: 'blue' })),
  ...education.map(edu => ({ ...edu, type: 'education' as const, icon: GraduationCap, color: 'green' })),
  ...volunteering.map(vol => ({ ...vol, type: 'volunteer' as const, icon: Heart, color: 'red' }))
].sort((a, b) => {
  // Sort by start date (most recent first)
  const getYear = (period: string) => {
    const match = period.match(/(\d{4})/g)
    return match ? parseInt(match[match.length - 1]) : 0
  }
  return getYear(b.period) - getYear(a.period)
})

// Component for expandable experience card
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ExperienceCard({ experience}: { experience: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent = experience.icon
  
  const isPresent = experience.period.includes('presente')
  
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-4 top-8 w-4 h-4 rounded-full border-4 border-white shadow-md z-10 ${
        experience.color === 'blue' ? 'bg-blue-500' :
        experience.color === 'green' ? 'bg-green-500' : 'bg-red-500'
      }`}></div>
      
      <div className="ml-16 mb-12">
        <div 
          className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Card Header */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  experience.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  experience.color === 'green' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {experience.position || experience.title || experience.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">
                        {experience.company || experience.institution || experience.organization}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                      {isPresent && (
                        <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          Attuale
                        </span>
                      )}
                    </div>
                  </div>

                  {experience.type && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'work' ? 'bg-blue-100 text-blue-700' :
                        experience.type === 'education' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {experience.type === 'work' ? 'Lavoro' :
                         experience.type === 'education' ? 'Formazione' : 'Volontariato'}
                      </span>
                      
                      {experience.type === 'work' && experience.type && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {experience.type}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Preview description */}
                  <p className="text-gray-600 line-clamp-2">
                    {Array.isArray(experience.description) 
                      ? experience.description[0] 
                      : experience.description}
                  </p>
                </div>
              </div>
              
              <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6">
                {/* Full Description */}
                {Array.isArray(experience.description) ? (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Responsabilità e Risultati:</h4>
                    <ul className="space-y-2">
                      {experience.description.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Tecnologie Utilizzate:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech: string, i: number) => (
                        <span 
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Info for Education */}
                {experience.type === 'education' && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">Tipo:</span>
                      <span>{experience.type}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Stats component
function ExperienceStats() {
  const workYears = workExperience.length > 0 ? 3 : 0 // Based on your 3+ years
  const totalEducation = education.length
  const volunteerOrgs = volunteering.length
  const totalExperiences = allExperiences.length

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">{workYears}+</div>
        <div className="text-gray-600">Anni di Lavoro</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
        <div className="text-3xl font-bold text-green-600 mb-2">{totalEducation}</div>
        <div className="text-gray-600">Percorsi Formativi</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
        <div className="text-3xl font-bold text-red-600 mb-2">{volunteerOrgs}</div>
        <div className="text-gray-600">Volontariato</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
        <div className="text-3xl font-bold text-purple-600 mb-2">{totalExperiences}</div>
        <div className="text-gray-600">Esperienze Totali</div>
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  const [filter, setFilter] = useState<ExperienceType>('all')

  const filteredExperiences = filter === 'all' 
    ? allExperiences 
    : allExperiences.filter(exp => exp.type === filter)

  const filterButtons = [
    { key: 'all' as const, label: 'Tutte', icon: Globe },
    { key: 'work' as const, label: 'Lavoro', icon: Briefcase },
    { key: 'education' as const, label: 'Formazione', icon: GraduationCap },
    { key: 'volunteer' as const, label: 'Volontariato', icon: Heart }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Esperienza Professionale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Il mio percorso professionale attraverso lavoro, formazione e contributi alla comunità
            </p>

            {/* Quick Stats */}
            <ExperienceStats />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {filterButtons.map(({ key, label, icon: IconComponent }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    filter === key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    filter === key ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {key === 'all' ? allExperiences.length :
                     key === 'work' ? workExperience.length :
                     key === 'education' ? education.length : volunteering.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredExperiences.length > 0 ? (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Timeline Esperienze
                  </h2>
                  <p className="text-gray-600">
                    {filter === 'all' && 'Tutte le mie esperienze in ordine cronologico'}
                    {filter === 'work' && 'Il mio percorso lavorativo professionale'}
                    {filter === 'education' && 'La mia formazione accademica e professionale'}
                    {filter === 'volunteer' && 'I miei contributi alla comunità'}
                  </p>
                </div>

                <div className="relative">
                  {filteredExperiences.map((experience, index) => (
                    <ExperienceCard 
                      key={`${experience.type}-${index}`}
                      experience={experience} 
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nessuna esperienza trovata
                </h3>
                <p className="text-gray-600 mb-4">
                  Prova a selezionare un filtro diverso
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Focus Attuale
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Attualmente lavoro come <strong>Full Stack Developer</strong> presso Innonation S.r.l, 
              specializzandomi in microservizi Java/Spring Boot e soluzioni IoT per applicazioni marine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Code className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="font-semibold text-white mb-2">Microservizi</h3>
                <p className="text-blue-100 text-sm">Java/Spring Boot per applicazioni scalabili</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Zap className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="font-semibold text-white mb-2">IoT Integration</h3>
                <p className="text-blue-100 text-sm">Sistemi di monitoraggio real-time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Building className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="font-semibold text-white mb-2">ERP Solutions</h3>
                <p className="text-blue-100 text-sm">Personalizzazione Odoo per diversi settori</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skills"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                Vedi le Competenze
              </Link>
              
              <Link
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Progetti Realizzati
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Work Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Remote Work Expert
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Con oltre 3 anni di esperienza in team distribuiti, ho sviluppato competenze 
                  eccellenti nella comunicazione asincrona, metodologie agile e collaborazione remota.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">Remote Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
                    <div className="text-gray-600">Anni in Team Distribuiti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">Multiple</div>
                    <div className="text-gray-600">Progetti Cross-Timezone</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  <Users className="w-5 h-5" />
                  Collaboriamo Insieme
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}