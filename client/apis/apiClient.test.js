import nock from 'nock'

import { sendContactFormMessage } from './apiClient'

describe('sendContactFormMessage is working', () => {
  const contactForm = {
    email: 'leilaniheather@gmail.com',
    subject: 'Hello',
    text: 'Laura\nleilaniheather@gmail.com\nWould you like some work?',
    message: 'Laura<br>leilaniheather@gmail.com<br>Would you like some work?'
  }
  const scope = nock('http://localhost:80')
    .post('/api/v1/contact/', contactForm)
    .reply(201)
  test('sendContactFormMessage is POSTING an email address to api/v1/contact', () => {
    expect.assertions(1)

    return sendContactFormMessage(contactForm)
      .then((response) => {
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

// what happens if the server doesnt send the email 500 / error message
