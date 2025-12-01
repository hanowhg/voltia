import { watch } from 'vue'

export function usePageMeta(metaData) {
  const updateMeta = () => {
    // Update title
    if (metaData.title) {
      document.title = metaData.title
    }

    // Update meta description
    if (metaData.description) {
      updateMetaTag('name', 'description', metaData.description)
      updateMetaTag('property', 'og:description', metaData.description)
      updateMetaTag('property', 'twitter:description', metaData.description)
    }

    // Update meta keywords
    if (metaData.keywords) {
      updateMetaTag('name', 'keywords', metaData.keywords)
    }

    // Update Open Graph title
    if (metaData.title) {
      updateMetaTag('property', 'og:title', metaData.title)
      updateMetaTag('property', 'twitter:title', metaData.title)
    }

    // Update canonical URL
    if (metaData.canonical) {
      updateCanonicalLink(metaData.canonical)
      updateMetaTag('property', 'og:url', metaData.canonical)
      updateMetaTag('property', 'twitter:url', metaData.canonical)
    }
  }

  const updateMetaTag = (attribute, key, content) => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`)
    if (element) {
      element.setAttribute('content', content)
    } else {
      element = document.createElement('meta')
      element.setAttribute(attribute, key)
      element.setAttribute('content', content)
      document.head.appendChild(element)
    }
  }

  const updateCanonicalLink = (url) => {
    let link = document.querySelector('link[rel="canonical"]')
    if (link) {
      link.setAttribute('href', url)
    } else {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      link.setAttribute('href', url)
      document.head.appendChild(link)
    }
  }

  // Update meta on mount
  updateMeta()

  return {
    updateMeta
  }
}
