export interface Portfolio {
  id: string;
  social_handles: SocialHandle[];
  about: About;
  skills: Skill[];
  services: Service[];
  projects: Project[];
  email: string;
}

export interface About {
  name: string
  title: string
  subTitle: string
  description: string
  address: string
  phoneNumber: string
  avatar: Avatar
}

export interface Avatar {
  url: string
}

export interface Image {
  url: string
}

export interface SocialHandle {
  id: string
  platform: string
  url: string
  image: Image
  enabled: boolean
}

export interface Skill {
  id: string;
  enabled: boolean;
  name: string;
}

export interface Service {
  id: string;
  name: string;
  desc: string;
  enabled: boolean;
}

export interface Project {
  id: string;
  liveurl: string;
  githuburl: string;
  title: string;
  subtitle: string;
  image: Image;
  description: string;
  techStack: string[];
  enabled: boolean;
}
