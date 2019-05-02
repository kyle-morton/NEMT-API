import Contact from '../models/contact.model';
import { IContactRepository, ContactRepository } from '../../data/repositories/contact.repository';
import { IContact } from 'logic/interfaces/contact.interface';


export class ContactHandler {

    private repo : IContactRepository; 

    constructor() {
        this.repo = new ContactRepository();
    }

    /**
     * Create new contact document
     * @param body 
     */
    public async create (body: any) {
        return await this.repo.create(body as IContact);
    }

    /**
     * get contact document(s) based on filter
     * @param filter 
     */
    public async get (filter: any) {
        return await this.repo.get(filter);
    }

    /**
     * update contact
     * @param id 
     * @param body 
     */
    public async update (id: string, body: any) {
        return await this.repo.update(id, body as IContact);
    }

    public async delete (id: string) {
        return await this.repo.delete(id);
    }
    
};