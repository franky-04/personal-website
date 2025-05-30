'use client'

import { Construction, Hammer, Settings, Wrench, Code, Zap } from 'lucide-react'

export default function WorkInProgressBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-2 overflow-hidden sticky top-0 z-50">
      <div className="flex items-center whitespace-nowrap animate-scroll">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-8 mr-16">
            <Construction className="w-5 h-5 animate-bounce text-white" />
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              🚧 WORK IN PROGRESS
            </span>
            <Hammer className="w-5 h-5 animate-pulse text-white" />
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Website under development
            </span>
            <Settings className="w-5 h-5 animate-spin text-white" />
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              New features coming soon!
            </span>
            <Wrench className="w-4 h-4 animate-bounce text-white" />
            <Code className="w-5 h-5 animate-pulse text-white" />
            <Zap className="w-4 h-4 animate-ping text-white" />
          </div>
        ))}
      </div>
    </div>
  )
}