import { Router } from 'express'
import { exerciseRouter } from './exercise/exerise.router'

export const api = Router()

api.use('/exercises', exerciseRouter)

