import User from "../models/user-schema.js"

const getUserById = async (request, response) => {
    try {
        const user = await User.findById({ _id:request.params.id});
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}

export default getUserById;

 
