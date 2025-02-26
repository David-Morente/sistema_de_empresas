import { Router } from "express"
import { registerCompany } from "./company.controller.js"

const router = Router()

router.post("/registerCompany", registerCompany)

export default router