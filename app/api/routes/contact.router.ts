import { Base } from './base.router';
import { ContactController } from '../controllers/contact.controller';

export class ContactRoutes extends Base {

    private contactController : ContactController = new ContactController();

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