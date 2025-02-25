import { Router } from "express"
import { register, login } from "./auth.controller"
import { registerValidator, loginValidator } from "../middlewares/user-validator"

const router = Router()

router.post(
    "/register",
    registerValidator,
    register
)

router.post("/login", loginValidator, login)

export default router