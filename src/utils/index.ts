import { Metadata } from 'next'
import { siteConfig } from './site'

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
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
    authors: [
      {
        name: 'Fernanda Vaz',
      },
    ],
    creator: 'Fernanda Vaz',
    openGraph: {
      type: 'website',
      locale: 'pt-BR',
      url: siteConfig.url,
      title,
      description,
      siteName: title,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export const formatDate = (date: string) => {
  const newDate = new Date(date)

  const month = newDate.toLocaleString('pt-BR', { month: '2-digit' }) // Full month name
  const year = newDate.getFullYear()

  return { month, year }
}
