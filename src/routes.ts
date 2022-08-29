import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/', (_, response) => {
    return response.status(200).send('Good');
});

export { router };