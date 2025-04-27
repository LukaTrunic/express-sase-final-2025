import { Router } from "express";
import { BookService } from "./book.service";

export const BookRoute = Router()

BookRoute.get('/', async (req, res) => {
    const rsp = await BookService.getBooks()
    res.json(rsp.data.results)
})

BookRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const rsp = await BookService.getBookById(id)
    res.json(rsp.data);
});