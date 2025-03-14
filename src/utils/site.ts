const site_url =
  process.env.SITE_URL || 'https://fernanda-vaz.github.io/portfolio'

export const siteConfig = {
  name: 'Fernanda Vaz | Desenvolvedora Front-end',
  description:
    'Portfólio pessoal destacando projetos e habilidades como desenvolvedora front-end',
  url: site_url,
  ogImage: `${site_url}/_static/opengraph-image.png`,
  links: {
    github: 'https://github.com/fernanda-vaz',
    linkedin: 'https://www.linkedin.com/in/vaz-fernanda',
    whatsapp: 'https://wa.link/ax1g3o',
  },
  mailSupport: 'fernandavazdev@gmail.com',
}
