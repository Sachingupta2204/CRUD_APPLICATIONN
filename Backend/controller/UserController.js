import User from "../models/user-schema.js"

exports.getUsers = async (request, response) => {
    try {
        const users = await User.find();
        console.log("all "+users)
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}
exports.addUser = async (request, response) => {
    const user = request.body;    
    const newUser = new User(user)
    try {
        await newUser.save();
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({message: error.message})
    }
}
exports.getUserById = async (request, response) => {
    try {
        const user = await User.findById({ _id:request.params.id});
        console.log("findone"+user)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}
exports.deleteUsers = async (request, response) => {

    try {
        await User.deleteOne({ _id:request.params.id});
        response.status(201).json("user deleted suceesfully")
    } catch (error) {
        response.status(409).json({message: error.message})
    }
}

exports.editUser = async (request, response) => {
    let user = request.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}