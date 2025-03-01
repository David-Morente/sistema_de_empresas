import { Router } from "express"
import { getUserByIdValidator, updatePasswordValidator, updateUserValidator, deleteUserValidator } from "../middlewares/user-validator.js"
import { getUserById, getUsers, updatePassword, updateUser, deleteUser} from "./user.controller.js"

const router = Router()

/**
 * @swagger
 * /user/findUser/{uid}:
 *   get:
 *     summary: Get user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error retrieving user
 */
router.get("/findUser/:uid", getUserByIdValidator, getUserById)

/**
 * @swagger
 * /user/:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: limits
 *         schema:
 *           type: integer
 *         description: Number of users to return
 *       - in: query
 *         name: from
 *         schema:
 *           type: integer
 *         description: Number of users to skip
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *       500:
 *         description: Error retrieving users
 */
router.get("/", getUsers)

/**
 * @swagger
 * /user/updatePassword/{uid}:
 *   patch:
 *     summary: Update user password
 *     tags: [User]
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
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid old password
 *       500:
 *         description: Error updating password
 */
router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

/**
 * @swagger
 * /user/updateUser/{uid}:
 *   put:
 *     summary: Update user details
 *     tags: [User]
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
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       500:
 *         description: Error updating user
 */
router.put("/updateUser/:uid", updateUserValidator, updateUser)

/**
 * @swagger
 * /user/deleteUser/{uid}:
 *   delete:
 *     summary: Delete user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       500:
 *         description: Error deleting user
 */
router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser )

export default router