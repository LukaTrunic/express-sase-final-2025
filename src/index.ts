import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { BookRoute } from './flight.route'

const app = express()
app.use(cors())
app.use(morgan('tiny'))

app.use('/api/books', BookRoute)

app.listen(3000, () => console.log('app started'))