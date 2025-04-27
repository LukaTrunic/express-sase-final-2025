import { Router } from "express"
import { BorrowService } from "../services/borrow.service"
import { sendError } from "../utils"

export const BorrowRoute = Router()

BorrowRoute.get('/', async (req: any, res) => {
    try {
        console.log(req.user)
        res.json(await BorrowService.getBorrowsByUserId(req.user.id))
    } catch (e) {
        console.log(e)
        sendError(res, e)
    }
})