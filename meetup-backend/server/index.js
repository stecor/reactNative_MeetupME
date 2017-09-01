import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './Config/middlewares';
import {MeetupRoutes} from './modules';

const app = express();

/**
* Database
*/
dbConfig();

/**
 * middlewares
 */
 middlewaresConfig(app);

 app.use('/api', [MeetupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err =>{
  if(err){
    console.error(err);
  }else {
    console.log(`App listen to port: ${PORT}`);
  }
});