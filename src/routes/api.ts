import { Router } from 'express'
import { exerciseRouter } from './exercise/exerise.router'
import { equipmentRouter } from './equipment/equipment.router'
import { gymRouter } from './gym/gym.router'

export const api = Router()

api.use('/exercises', exerciseRouter)
api.use('/equipment', equipmentRouter)
api.use('/gyms', gymRouter)
