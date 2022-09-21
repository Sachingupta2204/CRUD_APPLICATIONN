import axios from "axios";

const URL = "http://localhost:8000";

const addUser = async (user) => {
    try {   
        return await axios.post(`${URL}/add`, user)
    } catch (error) {
        console.log("error while calling add user api", error)
    }
}

export default addUser;

