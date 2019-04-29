import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/contact.model';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactHandler {

    /**
     * Create new contact document
     * @param body 
     */
    public async create (body: any) {

        const newContact = new Contact(body);
        await newContact.save();      
        return newContact;

    }

    /**
     * get contact document(s) based on filter
     * @param filter 
     */
    public async get (filter: any) {
        return await Contact.find(filter)
    }

    /**
     * update contact
     * @param id 
     * @param body 
     */
    public async update (id: string, body: any) {
        return await Contact.findOneAndUpdate(
            { _id: id },
            body,
            { new: true }
        );
    }

    public async delete (id: string) {
        return await Contact.findOneAndDelete(
            { _id: id}
        );
    }
    
};