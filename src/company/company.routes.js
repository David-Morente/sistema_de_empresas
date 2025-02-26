import { Router } from "express"
import { registerCompany } from "./company.controller"

const router = Router()

router.post("/registerCompany", registerCompany)

export default router