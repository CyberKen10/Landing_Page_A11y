import { useEffect } from 'react'
import { useLanguage } from '../LanguageContext'

const PageTitleUpdater = () => {
  const { t } = useLanguage()

  useEffect(() => {
    // Actualizar el título de la página cuando cambie el idioma
    document.title = t('site.title', 'A11i Detector - Web Accessibility Tool | WCAG 2.2')

    // También actualizar la meta description si existe
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('site.description', 'A11i Detector - Free web accessibility tool to detect WCAG 2.2 issues. Automatic auditing, visual evidence and compliance with European Accessibility Act (EAA).'))
    }

    // Actualizar Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', t('site.description', 'Automatically detect web accessibility issues with WCAG 2.2. Free auditing with visual evidence and practical recommendations.'))
    }

    // Actualizar Twitter description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('site.description', 'Automatically detect web accessibility issues with WCAG 2.2. Free auditing with visual evidence.'))
    }
  }, [t])

  return null // Este componente no renderiza nada
}

export default PageTitleUpdater