import axios from "axios";

const URL = "http://localhost:8000";

const editUser = async (id, user) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log('Error while calling editUser API', error)
    }
}

export default editUser;