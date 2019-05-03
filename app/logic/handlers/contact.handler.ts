import { IContactRepository, ContactRepository } from '../../data/repositories/contact.repository';
import { IContact } from 'logic/interfaces/contact.interface';
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from '../../infrastructure/types.symbol';


export interface IContactHandler {
    create (body: any);
    get (filter: any);
    update (id: string, body: any);
    delete (id: string);
}

@injectable()
export class ContactHandler implements IContactHandler {

    private repo : IContactRepository; 

    constructor ( @inject(TYPES.IContactRepository) repo : IContactRepository ) 
    { 
        console.log('calling handler constructor...');
        this.repo = repo; 
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