import {Schema, model} from 'mongoose'

const MessageSchema = new Schema({
    fase:{
        type: Number,
        required: true
    },
    aula:{
        type: Number,
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