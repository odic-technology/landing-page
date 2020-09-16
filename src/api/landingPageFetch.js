const URL_BASE = 'https://landing-page-api-289313.ue.r.appspot.com'

export default function landingPageFetch (url, options) {
  const defaultHeader = { headers: { 'Content-Type': 'application/json' } }

  options = { ...defaultHeader, ...options }
  const fetchUrl = URL_BASE + url
  return fetch(fetchUrl, options)
    .then(async response => {
      const result = ({ error: !response.ok, data: options.headers['Content-Type'] === 'application/json' ? await response.json() : await response.text(), response, request: { url, options } })
      return result
    })
}

export function postApi (url, bodyData) {
  const options = {
    method: 'POST',
    body: JSON.stringify(bodyData)
  }

  return landingPageFetch(url, options)
    .then(({ data }) => {
      return data
    })
    .catch(error => {
      return error
    })
}
