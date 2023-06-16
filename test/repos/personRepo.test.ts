import {PersonRepo} from "../../src/repos/personRepo";
import {Person} from "../../src/models/person";

describe('PersonRepo', () => {
    let personRepo: PersonRepo;
    beforeEach(() => {
        personRepo = new PersonRepo();
    });
    describe('add', () => {
        it('should add a person to the people array', () => {
            const person: Person = {
                name: 'John',
                age: 30
            };
            personRepo.add(person);
            expect(personRepo.people).toContain(person);
        });
    });
    describe('get', () => {
        it('should return the people array', () => {
            const people = personRepo.get();
            expect(people).toBe(personRepo.people);
        });
    });
    describe('update', () => {
        it('should update a person in the people array', () => {
            const person: Person = {
                name: 'John',
                age: 30
            };
            personRepo.add(person);
            const updatedPerson: Person = {
                name: 'John',
                age: 31
            };
            personRepo.update(updatedPerson);
            expect(personRepo.people).toContainEqual(updatedPerson);
        });
        it('should throw an error if the person does not exist', () => {
            const person = {
                name: 'John',
                age: 30
            };
            expect(() => personRepo.update(person)).toThrowError('Person not found');
        });
    });
});