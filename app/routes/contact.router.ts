import {Request, Response} from 'express';
import { ContactHandler } from '../handlers/contact.handler';

export class ContactRoutes {

    public contactHandler : ContactHandler = new ContactHandler();

    public async handleResponse(res: Response, func: Function) {
        try {
            res.send(await func());
        }catch(ex) {
            res.status(500).send(ex);
        } 
    }

    public routes(app): void {
       
        // Contact 
        app.route('/contact') 
        // GET endpoint 
        .get(async (req: Request, res: Response) => {
            this.handleResponse(
                res, 
                async () => { return this.contactHandler.get({})
            });
        })        
        // POST endpoint
        .post(async(req: Request, res: Response) => { 
            this.handleResponse(
                res, 
                async () => { return this.contactHandler.create(req.body) 
            });
        })

        app.route('/contact/:contactId')
        .get(async (req: Request, res: Response) => {
            this.handleResponse(
                res, 
                async () => { return this.contactHandler.get({ _id: req.params.contactId }) 
            });
        })
        .put(async (req: Request, res: Response) => {
            this.handleResponse(
                res, 
                async () => { return this.contactHandler.update(req.params.contactId, req.body) 
            });
        })
        .delete((req: Request, res: Response) => {       
            this.handleResponse(
                res, 
                async () => { return this.contactHandler.delete(req.params.contactId) 
            });
        })


    }


}