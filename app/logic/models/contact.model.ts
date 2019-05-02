import * as mongoose from 'mongoose';
import { IContact } from 'logic/interfaces/contact.interface';

const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
