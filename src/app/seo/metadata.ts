import { Metadata } from 'next'
import { generateOpenGraph } from './openGraph'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Fernanda Vaz',
    template: '%s | Desenvolvedora Front-end',
  },
  description:
    'Portfólio pessoal destacando projetos e habilidades como desenvolvedora front-end',
  keywords: [
    'Front-end Developer',
    'Desenvolvedora Front-end',
    'Desenvolvedor Front-end',
    'Desenvolvedora Frontend',
    'Desenvolvedor Frontend',
    'React Developer',
    'Desenvolvedora React',
    'Desenvolvedor React',
    'Desenvolvedora React.js',
    'Node.js Developer',
    'Web Developer',
    'Desenvolvedora Web',
    'Portfolio',
    'Projects',
    'Projetos',
    'Skills',
  ],
  authors: {
    name: 'Fernanda Vaz',
  },
  openGraph: generateOpenGraph(),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export const getMetadata = (customMetadata?: Metadata): Metadata => {
  return {
    ...defaultMetadata,
    ...customMetadata,
  }
}
