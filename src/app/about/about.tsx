import { Metadata } from 'next'
import Link from 'next/link'
import { 
  GraduationCap, 
  Heart, 
  Globe, 
  Users, 
  Lightbulb, 
  Code2,
  MapPin,
  Calendar,
  Mail,
  Github,
  Target,
  Rocket,
  Coffee
} from 'lucide-react'
import { personalInfo, professionalSummary, education, languages, volunteering } from '@/data/cv-data'
import { generateMetadata } from '@/lib/seo-config'

export const metadata: Metadata = generateMetadata(
  'About Me',
  'Scopri di più su Giancarlo Urone: il mio background, la mia filosofia di sviluppo e il mio approccio al lavoro in team distribuiti.',
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Chi sono
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {professionalSummary}
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Ubicazione</h3>
                </div>
                <p className="text-gray-600">{personalInfo.location}</p>
                <p className="text-green-600 font-medium mt-1">🌍 Remote Available</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Esperienza</h3>
                </div>
                <p className="text-gray-600">3+ anni</p>
                <p className="text-gray-500 text-sm mt-1">Full Stack Development</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Lingue</h3>
                </div>
                <div className="space-y-1">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{lang.name}</span>
                      <span className="text-gray-500">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Il Mio Percorso
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Da studente di Ingegneria Informatica a sviluppatore full-stack professionale
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Dal Codice alla Passione
                </h3>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Il mio viaggio nel mondo dello sviluppo software è iniziato durante gli studi in 
                    <strong className="text-gray-900"> Ingegneria Informatica</strong> all&apos;Università di Palermo, 
                    dove ho scoperto non solo i fondamenti teorici della programmazione, ma anche la passione 
                    per creare soluzioni che abbiano un impatto reale.
                  </p>
                  <p>
                    Dopo la laurea, ho deciso di specializzarmi ulteriormente attraverso master intensivi, 
                    prima con <strong className="text-gray-900">Java e Spring Framework</strong>, 
                    poi con un corso full-stack completo in <strong className="text-gray-900">JavaScript/TypeScript</strong>. 
                    Questa formazione continua mi ha permesso di entrare nel mondo professionale con competenze solide e versatili.
                  </p>
                  <p>
                    Oggi, con oltre 3 anni di esperienza, mi specializzo nello sviluppo di 
                    <strong className="text-gray-900"> applicazioni scalabili</strong> e 
                    <strong className="text-gray-900"> microservizi</strong>, lavorando principalmente 
                    in team distribuiti e abbracciando pienamente la filosofia del remote work.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Focus Attuale
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Microservizi & IoT</div>
                      <div className="text-gray-600 text-sm">Integrazione di sistemi distribuiti per applicazioni marine</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Enterprise Solutions</div>
                      <div className="text-gray-600 text-sm">Personalizzazione ERP Odoo per diversi settori</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Real-time Processing</div>
                      <div className="text-gray-600 text-sm">Elaborazione dati in tempo reale da sensori</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                La Mia Filosofia di Lavoro
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Come affronto lo sviluppo software e la collaborazione in team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clean Code</h3>
                <p className="text-gray-600">
                  Credo nel valore del codice pulito e ben documentato. Ogni riga deve essere 
                  comprensibile non solo oggi, ma anche tra sei mesi.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Team First</h3>
                <p className="text-gray-600">
                  Il successo di un progetto dipende dalla collaborazione. Comunico attivamente, 
                  condivido conoscenze e supporto sempre i colleghi.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  La tecnologia evolve rapidamente. Dedico tempo costante all&apos;apprendimento 
                  di nuovi strumenti e metodologie per rimanere sempre aggiornato.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results Driven</h3>
                <p className="text-gray-600">
                  Mi concentro sui risultati concreti. Ogni funzionalità deve aggiungere valore 
                  reale al business e migliorare l&apos;esperienza degli utenti.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-600">
                  Non faccio compromessi sulla qualità. Testing, code review e refactoring 
                  sono parte integrante del mio processo di sviluppo.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Native</h3>
                <p className="text-gray-600">
                  Con 3+ anni di lavoro remoto, ho perfezionato le metodologie per essere 
                  produttivo e collaborativo indipendentemente dalla distanza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Growth */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formazione e Crescita
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Il percorso educativo che ha formato le mie competenze tecniche
              </p>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                        <div className="text-blue-600 font-semibold mb-1">{edu.institution}</div>
                        <div className="text-gray-500 text-sm flex items-center gap-4">
                          <span>{edu.location}</span>
                          <span>•</span>
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span className="bg-gray-200 px-2 py-1 rounded text-xs">{edu.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering & Personal Interests */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Oltre il Codice
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Le esperienze che arricchiscono la mia prospettiva professionale
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Volunteering */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white">Volontariato</h3>
                </div>
                {volunteering.map((vol) => (
                  <div key={vol.id} className="mb-6">
                    <div className="text-white font-semibold mb-2">{vol.role}</div>
                    <div className="text-blue-100 mb-2">{vol.organization}</div>
                    <div className="text-blue-200 text-sm mb-3">{vol.period}</div>
                    <ul className="space-y-2">
                      {vol.description.map((desc, i) => (
                        <li key={i} className="text-blue-100 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Personal Interests */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Coffee className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white">Interessi Personali</h3>
                </div>
                <div className="space-y-6 text-blue-100">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Tecnologia & Innovation</h4>
                    <p>Appassionato di nuove tecnologie, AI e prompt engineering. Sperimento costantemente con nuovi framework e strumenti.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Community & Networking</h4>
                    <p>Attivo in comunità di sviluppatori online e interessato a condividere conoscenze attraverso blog e discussioni tecniche.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Crescita Professionale</h4>
                    <p>Sempre alla ricerca di nuove sfide che mi permettano di crescere come sviluppatore e come membro di team distribuiti.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Facciamo Conoscenza
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interessato a collaborare o semplicemente a fare una chiacchierata tecnica? 
              Sono sempre aperto a nuove connessioni e opportunità.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contattami
              </Link>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>

            <div className="text-gray-500">
              <p>Rispondo solitamente entro 24 ore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}