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