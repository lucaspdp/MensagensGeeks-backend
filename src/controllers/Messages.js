import Messages from '../models/Messages'

export default {
    async store(req, res){
        const {fase, aula, mensagem} = req.body;
        const messageExists = await Messages.findOne({
            fase,
            aula
        })
        if(messageExists){
            return res.status(400).json({error:"Mensagem já existente!"})
        }
        await Messages.create({
            fase,
            aula,
            mensagem
        })
        return res.status(200).json({
            alert:"Mensagem cadastrada com sucesso!"
        });
    },
    async index(req, res){
        const {fase} = req.query;
        const messages = await Messages.find({
            fase
        }).sort({aula: 1});
        if(messages){
            return res.status(200).json(messages)
        }

        return res.status(400).json({error: "Nenhuma mensagem encontrada"})
    },

    async update(req, res){
        const { id } = req.params
        const { mensagem } = req.body;
        const msg = await Messages.findByIdAndUpdate(id, {
            mensagem
        });
        if(!msg){
            return res.status(400).json({error: "Mensagem não encontrada"});
        }
        return res.status(200).json({alert: "Mensagem alterada com sucesso!"});
    },

    async show(req, res){
        const {id} = req.params;
        const message = await Messages.findById(id);
        if(message){
            return res.status(200).json(message)
        }

        return res.status(400).json({error: "Nenhuma mensagem encontrada"})
    },

    async delete(req, res){
        const {id} = req.params;
        const message = await Messages.findByIdAndRemove(id);

        if(message){
            return res.status(200).json({msg: "Success!"});
        }

        return res.status(400).json({msg: "Not found!"});
    }
}