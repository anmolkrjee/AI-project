import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    pNumber: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
}, { timestamps: true })

const userData = mongoose.model("userData", userDataSchema)

export default userData