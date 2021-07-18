import request from 'superagent'
const contactUrl = '/api/v1/contact/'
const faqUrl = '/api/v1/faq/'
const faqSearchUrl = '/api/v1/faq/search/'

export function sendContactFormMessage (contactForm) {
  return request.post(contactUrl)
    .send(contactForm)
    .then(res => {
      return null
    })
}
// add error handling

export function getFaqs () {
  return request.get(faqUrl)
    .then(res => {
      return res.body
    })
}

export function getFaqBySearchString (search) {
  return request
    .get(faqSearchUrl + search)
    .then(response => {
      return response.body
    })
}
