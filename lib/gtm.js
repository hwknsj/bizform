export const GTM_ID = 'GTM-PQHVC4J'

export const pageview = url => {
  window.dataLayer.push({
    event: 'pageview',
    page: url
  })
}
