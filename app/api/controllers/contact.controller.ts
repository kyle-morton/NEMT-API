import {Request, Response} from 'express';
import { ContactHandler } from '../../logic/handlers/contact.handler';

export class ContactController {

    private contactHandler : ContactHandler = new ContactHandler();

    public async get(req: Request, res: Response) {
        console.log('this: ' + this);
        try {
            res.send(await this.contactHandler.get({}));
        }catch(ex) {
            console.error('error: ' + ex);
            res.status(500).send(ex);
        } 
    }

    public async create (req: Request, res: Response) { 
        try {
            res.send(await this.contactHandler.create(req.body));
        }catch(ex) {
            console.error('error: ' + ex);
            res.status(500).send(ex);
        } 
    }

    public async getById (req: Request, res: Response) {
        try {
            res.send(await this.contactHandler.get({ _id: req.params.contactId }));
        }catch(ex) {
            console.error('error: ' + ex);
            res.status(500).send(ex);
        } 
    }

    public async update (req: Request, res: Response) {
        try {
            res.send(await this.contactHandler.update(req.params.contactId, req.body));
        }catch(ex) {
            console.error('error: ' + ex);
            res.status(500).send(ex);
        } 
    }

    public async delete (req: Request, res: Response) {   
        try {
            res.send(await this.contactHandler.delete(req.params.contactId));
        }catch(ex) {
            console.error('error: ' + ex);
            res.status(500).send(ex);
        }
    }
    
}