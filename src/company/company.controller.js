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

