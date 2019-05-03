import Contact from '../../logic/models/contact.model';
import { IContact } from 'logic/interfaces/contact.interface';
import { injectable } from 'inversify';
import "reflect-metadata";


export interface IContactRepository {
    create (data: any);
    get (filter: any);
    update (id: string, body: any);
    delete (id: string);
}

@injectable()
export class ContactRepository implements IContactRepository {
    
    async create(contact: IContact) {
        const newContact = new Contact(contact);
        await newContact.save();      
        return newContact;
    }    
    async get(filter: any) {
        return await Contact.find(filter);
    }
    async update(id: string, model: IContact) {
        return await Contact.findOneAndUpdate(
            { _id: id },
            model,
            { new: true }
        );
    }
    async delete(id: string) {
        return await Contact.findOneAndDelete(
            { _id: id}
        );
    }


}