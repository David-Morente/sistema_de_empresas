import { Router } from "express"
import { registerCompany, orderCompany, updateCompany, generateExcelCompanies } from "./company.controller.js"

const router = Router()

router.post("/registerCompany", registerCompany)

router.get("/listCompany", orderCompany)

router.put("/editCompany/:uid", updateCompany)

router.get("/reportCompany", generateExcelCompanies)

export default router