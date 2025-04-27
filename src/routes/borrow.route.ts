import { Router } from "express"
import { BorrowService } from "../services/borrow.service"
import { sendError } from "../utils"

export const BorrowRoute = Router()

BorrowRoute.get('/', async (req, res) => {
    try {
        res.json(await BorrowService.getBorrow())
    } catch (e) {
        console.log(e)
        sendError(res, e)
    }
})