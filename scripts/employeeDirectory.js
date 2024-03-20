// establish a array to hold all employee profiles
let employeeDirectory = [];

// Define a class directory that covers the following positions: staff, managers, and VIP

class Staff {
    constructor(username, password, firstName, lastName, title){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
    };
};

class Managers extends Staff {
    constructor(username, password, firstName, lastName, title, authorizationLevel = 1){
        super(username, password, firstName, lastName, title);
        this.authorizationLevel = authorizationLevel;
    }
}

class VeryImportantPerson extends Managers {
    constructor(username, password, firstName, lastName, title, authorizationLevel = 2, secret = 'VIP0NLY'){
        super(username, password, firstName, lastName, title);
        this.authorizationLevel = authorizationLevel;
        this.secret = secret;
    }
}

    const robertThao = new VeryImportantPerson('Owner', 'password', 'Robert', 'Thao', 'Owner', this.authorizationLevel, 'VIP0NLY');
    console.log(robertThao);

// create a admin function to add employee profiles to employeeDirectory




// create a admin function to delete employee profiles
function terminateEmployee(employee) {

};