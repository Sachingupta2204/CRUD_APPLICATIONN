import mongoose from "mongoose";

const Connection = async () => {
    const URL = `mongodb+srv://user:codeforinterview@crudapplication.c39964w.mongodb.net/?retryWrites=true&w=majority`;
    try {
         await mongoose.connect(URL)
        console.log('Database connected suceesfully')
    } catch (error) {
        console.log('Error while connecting with the database', error)
    }
}

export default Connection;