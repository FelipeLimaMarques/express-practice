import { Router } from 'express';

const router = Router();

router.post('/users', (_, response) => {
    return response.status(201).send();
});

export { Router };