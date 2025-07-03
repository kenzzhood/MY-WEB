export interface Project {
  id: number
  title: string
  description: string
  image: string
  link?: string
  github?: string
  tags: string[]
  featured?: boolean
}

export interface TechStack {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'tools'
}

export interface Experience {
  title: string
  company: string
  description: string
  duration: string
  type: 'work' | 'volunteer'
}

export interface ContactInfo {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
}

export interface SocialLink {
  href: string
  icon: React.ReactNode
  label: string
  platform: string
}