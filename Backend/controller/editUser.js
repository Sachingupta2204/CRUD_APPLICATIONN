import User from "../models/user-schema.js"

const editUser = async (request, response) => {
    let user = request.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export default editUser;

 
