import { Response, Request } from 'express'
import { Observable, Subscriber } from 'rxjs'
import { parseWord } from '../../helpers'
import * as words from '../../assets/json'

const getRandomOfAllCategories = (): string => {
  const index: number = Math.floor(Math.random() * Object.keys(words).length)

  const wordsArray: string[] = Object.values(words)[index]
  return wordsArray[Math.floor(Math.random() * wordsArray.length)]
}

const getRandomWord$ = (category?: string) =>
  new Observable((suscriber: Subscriber<string>) => {
    if (!category) {
      suscriber.next(getRandomOfAllCategories())
      suscriber.complete()
    }
    const wordsOfCategory: string[] = (words as Record<string, string[]>)[category ?? '']
    if (!wordsOfCategory) {
      suscriber.next(getRandomOfAllCategories())
      suscriber.complete()
    }

    suscriber.next(wordsOfCategory[Math.floor(Math.random() * wordsOfCategory.length)])
    suscriber.complete()
  })

export const getRandomWord = (req: Request, res: Response) => {
  const { category } = req.query
  getRandomWord$(category?.toString()).subscribe({
    next: (word: string) => res.status(200).send({ word: parseWord(word) }),

    error: (error) => {
      res.status(500).send({ error })
    },
  })
}
