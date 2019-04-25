import { Request, Response } from 'express';
import { ContactRoutes } from './contact.router';

export class Routes {

    public routes(app): void {
        
        
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET SUCCESS!'
            });
        });

        // do same for rest of other routers
        new ContactRoutes().routes(app);

    }

}