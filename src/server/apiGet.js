import axios from "axios";

const URL = "http://localhost:8000";

const getUser = async (id) => {
    try {
        if(id!== undefined){
            return await axios.get(`${URL}/${id}`)
        }
        else{
            return await axios.get(`${URL}`)
        }
    } catch (error) {
        console.log('Error while calling getUsers API', error)
    }
} 

export default getUser;