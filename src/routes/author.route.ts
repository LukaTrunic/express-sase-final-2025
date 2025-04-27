import { Router } from "express";
import { AuthorService } from "../services/author.service";

export const AuthorRoute = Router()

AuthorRoute.get('/', async (req, res) => {
    res.json(await AuthorService.getAuthor())
})