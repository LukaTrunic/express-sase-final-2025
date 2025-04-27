import { Router } from "express";
import { AuthorService } from "../services/author.service";
import { sendError } from "../utils";

export const AuthorRoute = Router()

AuthorRoute.get('/', async (req, res) => {
    try {
        res.json(await AuthorService.getAuthors())
    } catch(e) {
        sendError(res, e)
    }
})

AuthorRoute.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        res.json(await AuthorService.getAuthorById(id))
    } catch(e) {
        sendError(res, e)
    }
})

AuthorRoute.post('/', async (req, res) => {
    try {
        await AuthorService.createAuthor(req.body)
        res.status(204).send()
    } catch(e) {
        sendError(res, e)
    }
})

AuthorRoute.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        await AuthorService.updateAuthor(id, req.body)
        res.status(204).send()
    } catch(e) {
        sendError(res, e)
    }
})

AuthorRoute.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        await AuthorService.deleteAuthor(id)
        res.status(204).send()
    } catch(e) {
        sendError(res, e)
    }
})