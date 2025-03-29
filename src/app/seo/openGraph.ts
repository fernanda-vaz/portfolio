// src/app/seo/openGraph.ts
type OpenGraphImage = {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: string
}

type OpenGraphMetadata = {
  title: string
  description: string
  url: string
  type?:
    | 'website'
    | 'article'
    | 'book'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
  siteName?: string
  locale?: string
  images?: OpenGraphImage[]
}

export const defaultOpenGraph: OpenGraphMetadata = {
  type: 'website',
  title: 'Fernanda Vaz | Portfólio',
  description: 'Desenvolvedora Front-end',
  url: 'https://fernanda-vaz.github.io/portfolio',
  siteName: 'Fernanda Vaz',
  images: [
    {
      url: 'https://raw.githubusercontent.com/fernanda-vaz/portfolio-assets/main/og-image.png',
      width: 1200,
      height: 630,
    },
  ],
  locale: 'pt-BR',
}

export const generateOpenGraph = (
  customOg?: Partial<OpenGraphMetadata>
): OpenGraphMetadata => {
  return {
    ...defaultOpenGraph,
    ...customOg,
  }
}
