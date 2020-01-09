import {Router} from 'express'

import Messages from './controllers/Messages'
import User from './controllers/User';
import Fases from './controllers/Fases';

const routes = Router();

routes.post('/send', Messages.store);
routes.get('/messages', Messages.index);
routes.get('/fases', Fases.index);
routes.put('/edit/:id', Messages.update);
routes.get('/message/:id', Messages.show);
routes.delete('/message/:id', Messages.delete);

routes.post('/newcode', User.store);
routes.post('/login', User.index);


export default routes;