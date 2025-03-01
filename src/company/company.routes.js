import { Router } from "express"
import { registerCompany, orderCompany, updateCompany, generateExcelCompanies } from "./company.controller.js"

const router = Router()

/**
 * @swagger
 * /company/registerCompany:
 *   post:
 *     summary: Register a new company
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *               impactLevel:
 *                 type: string
 *               trajectoryStart:
 *                 type: string
 *                 format: date
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Company registered successfully
 *       500:
 *         description: Registration failed
 */
router.post("/registerCompany", registerCompany)

/**
 * @swagger
 * /company/listCompany:
 *   get:
 *     summary: List companies with sorting options
 *     tags: [Company]
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [A-Z, Z-A, category, years]
 *         description: Sorting criteria
 *     responses:
 *       200:
 *         description: Companies listed successfully
 *       500:
 *         description: Error listing companies
 */
router.get("/listCompany", orderCompany)

/**
 * @swagger
 * /company/editCompany/{uid}:
 *   put:
 *     summary: Update company details
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *               impactLevel:
 *                 type: string
 *               trajectoryStart:
 *                 type: string
 *                 format: date
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Company updated successfully
 *       500:
 *         description: Error updating company
 */
router.put("/editCompany/:uid", updateCompany)

/**
 * @swagger
 * /company/reportCompany:
 *   get:
 *     summary: Generate an Excel report of companies
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Excel report generated successfully
 *       500:
 *         description: Error generating Excel report
 */
router.get("/reportCompany", generateExcelCompanies)

export default router