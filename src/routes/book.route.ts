import { Router } from "express";
import { BookService } from "../services/book.service";
import { sendError } from "../utils";

export const BookRoute = Router()

BookRoute.get('/', async (req, res) => {
    try {
        const rsp = await BookService.getBooks()
        res.json(rsp.data.results)
    } catch (e) {
        sendError(res, e)
    }
})

BookRoute.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const rsp = await BookService.getBookById(id)
        res.json(rsp.data);
    } catch (e) {
        sendError(res, e)
    }
});