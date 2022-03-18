import { Request, Response, NextFunction } from 'express'

export type HttpParams = {
  req: Request
  res: Response
  next?: NextFunction
}
