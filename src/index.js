import app from './app.js';
import { connectionDB } from './db.js';

connectionDB();
app.listen(3000);
console.log('server on port', 3000);