import User from '../models/User';

export default {
    async store(req, res){
        const { codigo, sender } = req.body;
        const user = await User.findOne({
            codigo
        });
        if(user){
            return res.status(400).json({
                error: "Código já registrado!"
            })
        }

        await User.create({
            codigo,
            sender
        });

        return res.json({
            ok: true
        });
    }, 
    async index(req, res){
        const { codigo } = req.body;

        const user = await User.findOne({
            codigo
        });

        if(user){
            return res.status(200).json(user)
        }

        return res.status(400).json({
            error: 'Usuário nao encontrado!'
        })
    }
}