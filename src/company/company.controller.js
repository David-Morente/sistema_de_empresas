import Company from "./company.model.js"
import ExcelJS from "exceljs"
import { fileURLToPath } from "url"
import fs from "fs"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const registerCompany = async (req, res) => {
    try {
        const data = req.body

        const company = await Company.create(data)
        return res.status(201).json({
            message: "Empresa registrada",
            company
        })

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: "Fallo al registrar la empresa",
            error: err.message
        })
    }
}

export const orderCompany = async (req, res) => {
    try {
        const { sortBy } = req.query

        let order
        switch (sortBy) {
            case 'A-Z':
                order = { companyName: 1 }
            break;
            case 'Z-A':
                order = { companyName: -1 }
            break;
            case 'category':
                order = { category: 1 }
            break;
            case 'years':
                order = { trajectoryStart: 1}
            break;
            default:
                order = {};
        }

        const listCompanies = await Company.find().sort(order)

        return res.status(200).json({
            message: "Empresas listadas con éxito",
            listCompanies
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: "Fallo al listar las empresas",
            error: err.message
            
        })
    }
}

export const updateCompany = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;

        const company = await Company.findByIdAndUpdate(uid, data, { new: true })

        res.status(200).json({
            succes: true,
            message: "Empresa actualizada",
            company
        })
    } catch (err) {
        res.status(500).json({
            succes: false,
            message: "Error al actualizar la empresa",
            error: err.message
        })
    }
}

export const generateExcelCompanies = async (req, res) => {
    try {
        const obtain = await Company.find()
        if (!obtain || obtain.length === 0) {
            return res.status(404).json({
                message: "Empresas no encontradas"
            })
        }

        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet("Empresas reporte")

        worksheet.columns = [
            { header: "Nombre de la Empresa", key: "companyName", width: 25 },
            { header: "Nivel de Impacto", key: "impactLevel", width: 25 },
            { header: "Fecha de Inicio", key: "trajectoryStart", width: 25 },
            { header: "Categoría", key: "category", width: 30 }
        ];

        obtain.forEach(obtain => {
            worksheet.addRow({
                companyName: obtain.companyName,
                impactLevel: obtain.impactLevel,
                trajectoryStart: obtain.trajectoryStart.toISOString().split("T")[0], // Formato YYYY-MM-DD
                category: obtain.category
            });
        })

        const dir = path.join(__dirname, 'generar reportes');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        const filePath = path.join(dir, `empresas_reporte.xlsx`);
        await workbook.xlsx.writeFile(filePath);
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: "Error al generar el excel",
            error: err.message
        })
    }
}