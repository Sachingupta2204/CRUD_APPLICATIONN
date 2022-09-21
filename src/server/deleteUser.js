import axios from "axios";

const URL = "http://localhost:8000";

const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling deleteUser API', error)
    }
}

export default deleteUser;