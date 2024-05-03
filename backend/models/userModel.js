import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true
    },
    password: { 
        type: String, 
        required: true 
    },
}, {timestamps: true});

// Exporting the User model, which is a MongoDB model created with mongoose. 
// 'User' is the name of the model and userSchema is the schema used to define the structure of documents within the User collection in MongoDB.
export const User = mongoose.model('User', userSchema);