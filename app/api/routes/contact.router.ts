import { ContactController, IContactController } from '../controllers/contact.controller';
import { TYPES } from '../../infrastructure/types.symbol';
import { inject } from 'inversify';
import "reflect-metadata";

export class ContactRoutes {

    private contactController : IContactController

    constructor ( @inject(TYPES.IContactController) contactController : IContactController ) 
    { 
        console.log('calling router constructor: ' + contactController);
        this.contactController = contactController;
    }

    public routes(app): void {
        
        app.route('/contact') 
            .get((req, res) => { this.contactController.get(req, res) })    
            .post((req, res) => {this.contactController.create(req, res) });

        app.route('/contact/:contactId')
            .get((req, res) => {this.contactController.getById(req, res) })
            .put((req, res) => {this.contactController.update(req, res) })
            .delete((req, res) => {this.contactController.delete(req, res) });

    }

}