import Company from "./company.model.js"

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

        const listCompanies = await company.find().sort(order)

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
