// Import array of employees from employeeDirectory.js

import { employeeDirectory } from './employeeDirectory';

// Define a class directory that covers the following positions: staff, managers, and VIP

class staff {
    constructor(username, password, firstName, lastName, title, authorizationLevel = 0){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.authorizationLevel = authorizationLevel;
    };
};

class managers extends staff {
    constructor(username, password, firstName, lastName, title, authorizationLevel = 1){
        super(username, password, firstName, lastName, title);
        this.authorizationLevel = authorizationLevel;
    }
}

class VIP extends managers {
    constructor(username, password, firstName, lastName, title, authorizationLevel = 2){
        super(username, password, firstName, lastName, title);
        this.authorizationLevel = authorizationLevel;
    }
}

// Create a array to hold employee profiles once created and a list of arrays that define authorizationLevel

let clearanceCheck = [0, 1, 2];

// create a function that verifies the person trying to login along with any authentication errors

function





return console.log(`New Staff Created! Welcome ${this.firstName} ${this.lastName}, our new ${this.title}`)