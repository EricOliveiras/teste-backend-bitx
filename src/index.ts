import 'express-async-errors';
import { app } from './config/server';
import { port } from './config/vars';

app.listen(port, () =>
  console.log(`🚀: Server listening at port: ${port}`)
);
