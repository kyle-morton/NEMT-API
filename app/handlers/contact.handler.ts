import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/contact.model';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactHandler {

    public async create (body: any) {

        const newContact = new Contact(body);

        await newContact.save();      

        return newContact;

    }
    
};