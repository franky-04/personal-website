import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Mail, Github, MapPin, Globe, Code } from 'lucide-react'
import { personalInfo } from '@/data/cv-data'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Layout Responsive: Desktop lado a lado, Mobile stacked */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Foto Rotonda con Effetto Flip 3D */}
            <div className="flex-shrink-0 order-1 lg:order-1">
              <div className="relative">
                {/* Container per effetto 3D */}
                <div className="group perspective-1000 cursor-pointer">
                  <div className="relative w-[280px] h-[280px] transition-transform duration-300 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
                    
                    {/* FRONTE - Foto principale */}
                    <div className="absolute inset-0 backface-hidden">
                      <Image
                        src="/profile-hero.jpg"
                        alt="Giancarlo Urone - Full Stack Web Developer"
                        width={280}
                        height={280}
                        className="rounded-full object-cover border-4 border-white shadow-2xl w-full h-full"
                        priority
                        quality={85}
                      />
                    </div>

                    {/* RETRO - Seconda foto + Overlay LinkedIn */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="relative w-full h-full">
                        <Image
                          src="/profile-back.png"
                          alt="Giancarlo Urone - LinkedIn Profile"
                          width={280}
                          height={280}
                          className="rounded-full object-cover border-4 border-white shadow-2xl w-full h-full"
                          quality={85}
                        />
                        
                        {/* Overlay LinkedIn */}
                        <a 
                          href="https://www.linkedin.com/in/giancarlo-urone/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-blue-600/80 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-blue-700/90 group"
                          aria-label="View LinkedIn Profile"
                        >
                          <div className="text-center text-white">
                            <svg 
                              className="w-12 h-12 mx-auto mb-2 transition-transform group-hover:scale-110" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span className="text-sm font-semibold tracking-wide">
                              LinkedIn
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anello decorativo */}
                <div className="absolute -inset-2 rounded-full border-2 border-blue-200 opacity-50 pointer-events-none"></div>
              </div>
            </div>

            {/* Contenuto Testuale */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-600">
                {personalInfo.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-8">
                Specialized in scalable <span className="font-semibold text-blue-600">JavaScript/TypeScript</span> and <span className="font-semibold text-blue-600">Java/Spring</span> solutions with <span className="font-semibold">3+ years</span> building enterprise applications and IoT integrations
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contattami
                </Link>
                <Link
                  href="/projects"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Code className="w-5 h-5" />
                  Progetti
                </Link>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>

              {/* Location & Remote Status */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span className="text-green-600 font-semibold">Available for Remote Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}