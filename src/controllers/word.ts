import { Response, Request } from 'express'
import { ResponseStructure } from '../definitions/response-structure'
import { Observable, Subscriber } from 'rxjs'
import { pluck } from 'rxjs/operators'
import https from 'https'

const getRandomWord$ = new Observable((observer: Subscriber<ResponseStructure>) => {
  const req = https.request(
    {
      hostname: 'palabras-aleatorias-public-api.herokuapp.com',
      path: '/random',
      method: 'GET',
    },
    (response) => {
      response.on('data', (bufferRes: Buffer) => {
        observer.next(JSON.parse(bufferRes.toString()))
        observer.complete()
      })

      response.on('error', (error) => {
        observer.error({ error })
      })
    }
  )
  req.end()
}).pipe(pluck('body', 'Word'))

export const getRandomWord = (req: Request, res: Response) => {
  getRandomWord$.subscribe({
    next: (word: string) => res.status(200).send({ word }),

    error: (error) => {
      res.status(500).send({ error })
    },
  })
}
