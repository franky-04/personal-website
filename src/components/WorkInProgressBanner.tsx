'use client'

import { Construction, Hammer, Settings, Wrench, Code, Zap } from 'lucide-react'

export default function WorkInProgressBanner() {
  return (
    <div style={{
      background: 'linear-gradient(to right, #fbbf24, #f97316, #ef4444)',
      color: 'white',
      padding: '8px 0',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999
    }}>
      <div className="flex items-center whitespace-nowrap animate-scroll">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-8 mr-16">
            <Construction className="w-5 h-5 animate-bounce" style={{ color: 'white' }} />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              color: 'white'
            }}>
              🚧 WORK IN PROGRESS
            </span>
            <Hammer className="w-5 h-5 animate-pulse" style={{ color: 'white' }} />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              color: 'white'
            }}>
              Website under development
            </span>
            <Settings className="w-5 h-5 animate-spin" style={{ color: 'white' }} />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              color: 'white'
            }}>
              New features coming soon!
            </span>
            <Wrench className="w-4 h-4 animate-bounce" style={{ color: 'white' }} />
            <Code className="w-5 h-5 animate-pulse" style={{ color: 'white' }} />
            <Zap className="w-4 h-4 animate-ping" style={{ color: 'white' }} />
          </div>
        ))}
      </div>
    </div>
  )
}