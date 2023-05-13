import express from "express"
import { User } from "../models/user.js"
import {
	deleteUser,
	getAllUsers,
	getUserFromId,
	newUserCreated,
	special,
	updateUser,
} from "../controllers/user.js"

const router = express.Router()

router.post("/new", newUserCreated)
router.get("/all", getAllUsers)
router.get("/userid/special", special)

// router.get("/userid/:id", getUserFromId)
// router.put("/userid/:id", updateUser)
// router.delete("/userid/:id", deleteUser)
//Instead of this
router
	.route("/userid/:id")
	.get(getUserFromId)
	.put(updateUser)
	.delete(deleteUser)

export default router
