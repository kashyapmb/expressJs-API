import { User } from "../models/user.js"

export const getAllUsers = async (req, res) => {
	const users = await User.find({})

	const keyword = req.query.keyword
	console.log(keyword)

	res.json({
		success: true,
		users: users,
	})
}

export const newUserCreated = async (req, res) => {
	const { name, email, password } = req.body
	const users = await User.create({
		name: name,
		email: email,
		password: password,
	})
	res.status(201).cookie("temp", "123456").json({
		success: true,
		message: "Sign up successfully",
	})
}

export const special = (req, res) => {
	res.json({
		success: true,
		message: "Just Joking",
	})
}

export const getUserFromId = async (req, res) => {
	const { id } = req.params
	const user = await User.findById(id)
	res.json({
		success: true,
		user: user,
	})
}

export const updateUser = async (req, res) => {
	const { id } = req.params
	const user = await User.findById(id)
	res.json({
		success: true,
		message: "Update Succesfull",
	})
}

export const deleteUser = async (req, res) => {
	const { id } = req.params
	const user = await User.findById(id)
	res.json({
		success: true,
		message: "Delete Successful",
	})
}
