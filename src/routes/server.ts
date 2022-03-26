import { Router } from 'express';
import userRoute from './user/userRoute';
import productRoute from './product/productRoute';
import orderRoute from './order/orderRoute';
import dashboardRoute from './dashboard/dashboardRoute';

const route = Router();

route.get('/', (req, res) => {
	res.send('hello world');
});

route.use('/users', userRoute);
route.use('/products', productRoute);
route.use('/orders', orderRoute);
route.use('/popularProducts', dashboardRoute);
export default route;
