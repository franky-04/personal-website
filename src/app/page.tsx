import Link from 'next/link'
import { ArrowDown, Mail, Code, Users } from 'lucide-react'
import { personalInfo, professionalSummary, quickStats } from '@/data/cv-data'
import { topSkills, skillStats } from '@/data/skills'
import HeroSection from '@/components/sections/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        <HeroSection />
      {/* Skills Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competenze Tecniche
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tecnologie e framework con cui sviluppo soluzioni scalabili e performanti
              </p>
            </div>

            {/* Top Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {topSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <h3 className="font-semibold text-gray-900">{skill}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills CTA */}
            <div className="text-center">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Visualizza tutte le competenze
                <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Summary Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Esperienza Professionale
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {professionalSummary}
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Innonation S.r.l</h3>
                    <p className="text-gray-600">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Sviluppo di microservizi Java/SpringBoot per applicazioni IoT marine e soluzioni ERP Odoo
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">CLAN Ingegno Digitale</h3>
                    <p className="text-gray-600">Junior Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Sistema di gestione eventi per teatri con Angular, Firebase e integrazione real-time
                </p>
              </div>
            </div>

            {/* Experience CTA */}
            <div className="text-center">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Visualizza esperienza completa
                <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Statistiche
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Numeri che raccontano il mio percorso professionale
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {quickStats.experienceYears}
                </div>
                <div className="text-blue-100 font-medium">
                  Anni di Esperienza
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {skillStats.totalSkills}+
                </div>
                <div className="text-blue-100 font-medium">
                  Tecnologie
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {quickStats.projectsCompleted}
                </div>
                <div className="text-blue-100 font-medium">
                  Progetti Completati
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {quickStats.languagesSpoken}
                </div>
                <div className="text-blue-100 font-medium">
                  Lingue
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Collaboriamo Insieme
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sono sempre interessato a nuove opportunità e progetti stimolanti. 
              Contattami per discutere come posso contribuire al tuo team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Inizia una Conversazione
              </Link>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Diretta
              </a>
            </div>

            <div className="mt-8 text-gray-500">
              <p>Tempo di risposta medio: 24 ore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}