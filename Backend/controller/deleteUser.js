import User from "../models/user-schema.js"

const deleteUsers = async (request, response) => {

    try {
        await User.deleteOne({ _id:request.params.id});
        response.status(201).json("user deleted suceesfully")
    } catch (error) {
        response.status(409).json({message: error.message})
    }
}

export default deleteUsers;

 
