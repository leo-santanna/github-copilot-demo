import {Person} from "../models/person";

export class PersonRepo {
    people: Person[];
    constructor() {
        this.people = [];
    }
    add(person: Person) {
        this.people.push(person);
    }
    get() {
        return this.people;
    }

    update(person: Person): void {
        if (!this.people.length) {
            throw new Error('Person not found');
        }

        const indexToUpdate = this.people.findIndex((p) => p.name === person.name);

        if (indexToUpdate > -1) {
            this.people[indexToUpdate].age = person.age;
        } else {
            throw new Error('Person not found');
        }
    }

    delete(person: Person): void {
        if (!this.people.length) {
            throw new Error('Person not found');
        }

        const indexToDelete = this.people.findIndex((p) => p.name === person.name);

        if (indexToDelete > -1) {
            this.people.splice(indexToDelete, 1);
        } else {
            throw new Error('Person not found');
        }
    }
}