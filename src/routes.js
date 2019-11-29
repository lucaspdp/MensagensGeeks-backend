import {Router} from 'express'

import Messages from './controllers/Messages'
import User from './controllers/User';

const routes = Router();

routes.post('/send', Messages.store);
routes.get('/messages', Messages.index);
routes.put('/edit/:id', Messages.update);
routes.get('/message/:id', Messages.show);

routes.post('/newcode', User.store);
routes.post('/login', User.index);


export default routes;