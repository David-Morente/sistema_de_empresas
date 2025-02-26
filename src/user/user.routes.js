import { Router } from "express"
import { getUserByIdValidator, updatePasswordValidator, updateUserValidator, deleteUserValidator } from "../middlewares/user-validator"
import { getUserById, getUsers, updatePassword, updateUser, deleteUser  } from "./user.controller"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)

router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser )

export default router