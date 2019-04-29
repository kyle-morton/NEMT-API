import { expect } from 'chai';
import Contact from '../../app/models/contact.model';

describe('Contact validation', () => {

    //first test -> should be invalid if no first name
    it('should be invalid if first name is empty', (done) => {
        const m = new Contact();

        m.validate((err) => {
            expect(err.errors.firstName).to.exist;
            done();
        })
    })

    //second test -> should be invalid if no last name
    it('should be invalid if last name is empty', (done) => {
        const m = new Contact();

        m.validate((err) => {
            expect(err.errors.lastName).to.exist;
            done();
        })
    })

    it('should be valid if first/last name are filled', (done) => {
        const m = new Contact();
        m.firstName = 'Test';
        m.lastName = 'User';

        m.validate((err) => {
            expect(err).to.be.null;
            done();
        })
    })
});