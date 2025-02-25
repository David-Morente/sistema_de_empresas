import { body, param } from "express-validator"
import { existEmail, userExist } from "../helpers/db-validator"
import { validarCampos } from "./validar-campos"

export const registerValidator = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("surname", "El surname es obligatorio").not().isEmpty(),
    body("email", "El email es obligatorio").not().isEmpty(),
    body("email", "Ingrese un email valido").isEmail(),
    body("email").custom(existEmail),
    validarCampos
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Ingrese un correo válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    validarCampos
]