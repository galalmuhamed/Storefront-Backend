import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import route from './routes/server';

const app = express();
app.use(bodyParser.json());

const port = config.PORT as unknown as number;

app.use('/', route);
app.listen(port, () => {
	console.log(`server lestion to http://localhost:${port}`);
});

export default app;
