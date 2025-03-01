import {Schema, model} from "mongoose";

const companySchema = Schema({
    companyName:{
        type: String,
        required: [true, "Company name is required"],
        maxLength:[25, "Company name cannot exceed 25 characters"]
    },
    impactLevel:{
        type: String,
        required: [true, "Impact level is required"],
        enum: ["Alto", "Medio", "Bajo"]
    },
    trajectoryStart:{
        type: Date,
        required: true,
    },
    category:{
        type: String,
        required: [true, "The category is requerid"],
        enum: [
            "Tecnología",
            "Salud",
            "Energía",
            "Finanzas",
            "Educación",
            "Comercio",
            "Automotriz",
            "Entretenimiento",
            "Agricultura",
            "Logística",
            "Otra categoría"
        ]
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Company", companySchema)