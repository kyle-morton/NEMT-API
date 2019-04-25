import {Request, Response} from 'express';
import { ContactHandler } from '../handlers/contact.handler';

export class ContactRoutes {

    public contactHandler : ContactHandler = new ContactHandler();

    public routes(app): void {
       
        // Contact 
        app.route('/contact') 
        // GET endpoint 
        .get((req: Request, res: Response) => {
        // Get all contacts            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })        
        // POST endpoint
        .post(async(req: Request, res: Response) => { 
            
            try {
                res.send(await this.contactHandler.create(req.body));
            } catch(ex) {
                res.send(ex);
            }

        // Create new contact         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get((req: Request, res: Response) => {
        // Get a single contact detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            })
        })
        .delete((req: Request, res: Response) => {       
        // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            })
        })


    }


}