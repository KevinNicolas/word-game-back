import { Response, Request } from 'express'
import { ResponseStructure } from '../definitions/response-structure'
import { Observable, Subscriber } from 'rxjs'
import { pluck } from 'rxjs/operators'
import { parseWord } from '../helpers'
import axios, { AxiosResponse } from 'axios'

const getRandomWord$ = new Observable((suscriber: Subscriber<ResponseStructure>) => {
  axios
    .get('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then(({ data, status, statusText }: AxiosResponse) => {
      if (status === 200) {
        suscriber.next(data)
        suscriber.complete()
      }
      suscriber.error({ error: { status, statusText } })
    })
    .catch((error) => suscriber.error({ error }))
}).pipe(pluck('body', 'Word'))

export const getRandomWord = (req: Request, res: Response) => {
  getRandomWord$.subscribe({
    next: (word: string) => res.status(200).send({ word: parseWord(word) }),

    error: (error) => {
      res.status(500).send({ error })
    },
  })
}
