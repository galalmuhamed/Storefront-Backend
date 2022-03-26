import { Router } from 'express';
import { popularProducts } from '../../handlers/dashboardHandler';

const dashboardRoute = Router();

dashboardRoute.get('/', popularProducts);

export default dashboardRoute;
