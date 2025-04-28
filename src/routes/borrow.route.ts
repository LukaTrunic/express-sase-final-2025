import { Router } from "express"
import { BorrowService } from "../services/borrow.service"
import { sendError } from "../utils"

export const BorrowRoute = Router()

BorrowRoute.get('/', async (req: any, res) => {
    try {
        res.json(await BorrowService.getBorrows(req.user.id))
    } catch (e) {
        sendError(res, e)
    }
})

BorrowRoute.get('/:id', async (req: any, res) => {
    try {
        const id = Number(req.params.id)
        res.json(await BorrowService.getBorrowById(req.user.id, id, true))
    } catch (e) {
        sendError(res, e)
    }
})

BorrowRoute.post('/', async (req: any, res) => {
    try {
        await BorrowService.createBorrow(req.user.id, req.body)
        res.status(204).send()
    } catch (e) {
        sendError(res, e)
    }
})

BorrowRoute.put('/:id/return', async (req: any, res) => {
    try {
        const id = Number(req.params.id)
        await BorrowService.makeBorrowReturned(req.user.id, id)
        res.status(204).send()
    } catch (e) {
        sendError(res, e)
    }
})

BorrowRoute.put('/:id', async (req: any, res) => {
    try {
        const id = Number(req.params.id)
        await BorrowService.updateBorrow(req.user.id, id, req.body)
        res.status(204).send()
    } catch (e) {
        sendError(res, e)
    }
})

BorrowRoute.delete('/:id', async (req: any, res) => {
    try {
        const id = Number(req.params.id)
        await BorrowService.deleteBorrow(req.user.id, id)
        res.status(204).send()
    } catch (e) {
        sendError(res, e)
    }
})