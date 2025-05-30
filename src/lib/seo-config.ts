export const siteConfig = {
  name: 'Giancarlo Urone',
  title: 'Giancarlo Urone - Full Stack Web Developer',
  description: 'Full Stack Web Developer specializzato in JavaScript/TypeScript e Java/Spring con oltre 3 anni di esperienza in applicazioni scalabili e soluzioni IoT.',
  url: 'https://giancarlourone.dev',
  author: {
    name: 'Giancarlo Urone',
    email: 'giancarlourone4@gmail.com',
    github: 'https://github.com/franky-04',
    linkedin: 'https://linkedin.com/in/giancarlo-urone',
  },
  keywords: [
    'Full Stack Web Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Angular Developer',
    'React Developer',
    'Java Spring Boot Developer',
    'Remote Developer Italy',
    'IoT Applications Developer',
    'Palermo Developer'
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: 'en_US',
    siteName: 'Giancarlo Urone - Portfolio',
  }
}

export const generateMetadata = (
  title?: string,
  description?: string,
  image?: string
) => ({
  title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
  description: description || siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  openGraph: {
    ...siteConfig.openGraph,
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    url: siteConfig.url,
    images: image ? [{ url: image }] : [],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    images: image ? [image] : [],
  },
  robots: 'index, follow',
})