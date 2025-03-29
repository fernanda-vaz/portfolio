export interface Portfotio {
  about: About
  social_handles: SocialHandle[]
  skills: Skill[]
  services: Service[]
  projects: Project[]
}

export interface About {
  name: string
  title: string
  subtitle: string
  description: string
  address: string
  phone: string
  email: string
  avatar: Avatar
}

export interface Avatar {
  url: string
}

export interface SocialHandle {
  id: string
  platform: string
  url: string
  image: Image
  enabled: boolean
}

export interface Image {
  url: string
}

export interface Skill {
  id: string
  enabled: boolean
  name: string
}

export interface Service {
  id: string
  name: string
  desc: string
  enabled: boolean
}

export interface Project {
  id: string
  liveurl: string
  githuburl: string
  title: string
  subtitle: string
  image: Image
  description: string
  techStack: string[]
  enabled: boolean
}
