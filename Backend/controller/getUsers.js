import User from "../models/user-schema.js"

const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}

export default getUsers;

 
