import { Container } from 'inversify';
import "reflect-metadata";
import { TYPES } from './types.symbol';
import { IContactHandler, ContactHandler } from '../logic/handlers/contact.handler';
import { IContactRepository, ContactRepository } from '../data/repositories/contact.repository';
import { IContactController, ContactController } from '../api/controllers/contact.controller';

const container = new Container();
container.bind<IContactRepository>(TYPES.IContactRepository).to(ContactRepository);
container.bind<IContactHandler>(TYPES.IContactHandler).to(ContactHandler);
container.bind<IContactController>(TYPES.IContactController).to(ContactController);

export { container };