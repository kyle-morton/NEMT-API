import {Request, Response} from 'express';
import { IContactHandler } from '../../logic/handlers/contact.handler';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../infrastructure/types.symbol';
import "reflect-metadata";

export interface IContactController {
    get(req: Request, res: Response);
    create (req: Request, res: Response);
    getById (req: Request, res: Response);
    update (req: Request, res: Response);
    delete (req: Request, res: Response);
}

@injectable()
export class ContactController implements IContactController {

    private contactHandler : IContactHandler;

    constructor ( @inject(TYPES.IContactHandler) contactHandler : IContactHandler ) 
    { 
        this.contactHandler = contactHandler;
        console.log('calling controller constructor...');
    }

    public async get(req: Request, res: Response) {
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