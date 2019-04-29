import {Request, Response} from 'express';
import { ContactHandler } from '../handlers/contact.handler';
import { Base } from './base.router';

export class ContactRoutes extends Base {

    private contactHandler : ContactHandler = new ContactHandler();

    public routes(app): void {
        
        app.route('/contact') 
        .get(async (req: Request, res: Response) => {
            this.handleAsync(
                res, 
                async () => { return this.contactHandler.get({}) }
            );
        })        
        .post(async(req: Request, res: Response) => { 
            this.handleAsync(
                res, 
                async () => { return this.contactHandler.create(req.body) }
            );
        })

        app.route('/contact/:contactId')
        .get(async (req: Request, res: Response) => {
            this.handleAsync(
                res, 
                async () => { return this.contactHandler.get({ _id: req.params.contactId }) }
            );
        })
        .put(async (req: Request, res: Response) => {
            this.handleAsync(
                res, 
                async () => { return this.contactHandler.update(req.params.contactId, req.body) }
            );
        })
        .delete((req: Request, res: Response) => {       
            this.handleAsync(
                res, 
                async () => { return this.contactHandler.delete(req.params.contactId) }
            );
        })
    }

}