import express from 'express'
import morgan from 'morgan'
import { api } from './routes/api'

export const app = express()

app.use(morgan('common'))
app.use(express.json())

app.use('/v1', api)
