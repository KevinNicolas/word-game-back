import { Request, Response } from 'express'

export const getWordCategories = (req: Request, res: Response) => {
  return res.status(200).send({
    categories: ['alimentos', 'animales', 'mediosComunicacion', 'profesiones', 'transporte'],
  })
}
