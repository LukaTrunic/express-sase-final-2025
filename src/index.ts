import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { BookRoute } from './routes/book.route'
import { configDotenv } from 'dotenv'
import { AppDataSource } from './db'
import { AuthorRoute } from './routes/author.route'
import { UserRoute } from './routes/user.route'
import { UserService } from './services/user.service'

const app = express()
app.use(express.json()) //olny accept json
app.use(cors())
app.use(morgan('tiny'))

app.use(UserService.verifyToken)
app.use('/api/books', BookRoute)
app.use('/api/author', AuthorRoute)
app.use('/api/user', UserRoute)

// app.get('*', (req, res) => {
//     res.status(404).json({
//         message: 'NOT_FOUND',
//         timestamp: new Date()
//     })
// })

configDotenv()
AppDataSource.initialize()
    .then(() => {
        console.log('Connected to database')
        const port = process.env.SERVER_PORT || 3000
        app.listen(port, () => console.log(`Application started on port ${port}`))
    })
    .catch(e => {
        console.log('Failed to connect to the database')
        console.log(e)
    })