import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { Routes } from './routes/crm.router';

class App {
    
    public app: express.Application;
    public routeProvider: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routeProvider.routes(this.app);
        mongoose.connect(
            'mongodb://test:test123@ds121343.mlab.com:21343/nemt-api', 
            { useNewUrlParser: true }
        );
    }

    private config():void{

        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({extended:false}));

    }
}
export default new App().app;