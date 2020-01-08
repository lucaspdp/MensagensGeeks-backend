import Messages from '../models/Messages'

export default {
    async index(req, res){
        const fasesQuery = await Messages.find().select('fase')
        .sort({fase: 1});
        var _fases = [];
        fasesQuery.forEach(fase=>{
            _fases.push(fase.fase);
        })
        var fases = _fases.filter(function(item, pos) {
            return _fases.indexOf(item) == pos;
        })

        return res.json(fases);
    }
}