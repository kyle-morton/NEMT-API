import * as mongoose from 'mongoose';

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
