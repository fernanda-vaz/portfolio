interface ImageLoaderProps {
    src: string
    width: number
    quality?: number
}

export default function githubLoader({ src, width, quality }: ImageLoaderProps): string {
    return `${src}?w=${width}&q=${quality ?? 75}`
}