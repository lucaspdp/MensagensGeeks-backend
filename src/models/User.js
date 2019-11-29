import {Schema, model} from 'mongoose'

const UserSchema = new Schema({

    codigo:{
        type: String,
        required: true
    },

    sender:{
        type: Boolean,
        default: false
    }

},{
    timestamps: true
});

export default model('User', UserSchema);