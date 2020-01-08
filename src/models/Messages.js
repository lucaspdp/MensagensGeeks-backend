import {Schema, model} from 'mongoose'

const MessageSchema = new Schema({
    fase:{
        type: String,
        required: true
    },
    aula:{
        type: String,
        required: true
    },
    mensagem:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model('Message', MessageSchema);