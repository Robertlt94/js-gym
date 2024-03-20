// Arrays to store instances
const members = [];
const gymClasses = [{ name: "Trial Class", price: 0 }, { name: "Yoga", price: 10 }, { name: "CrossFit", price: 20 }, { name: "Pilates", price: 15 }];
const equipmentList = [];
const membershipFees = [30, 45, 50]; // Example fees for Task 1

// Task 1: Calculate Total Membership Fees
function calculateMembershipFees(feesOwed){
    return feesOwed.reduce((total,fee) => total + fee, 0);
};

console.log(calculateMembershipFees(membershipFees));

// Task 2: Filter Paid Gym Classes
function filterPaidClasses(classes){
    return classes.filter(gymClass => gymClass.price > 0);
};

console.log(filterPaidClasses(gymClasses));
console.log(filterFreeClasses(gymClasses));

function filterFreeClasses(classes){
    return classes.filter(gymClass => gymClass.price === 0);
};

// Task 3: Gym Member Class
class GymMember {
    constructor(firstName, lastName, membershipType){
        this.firstName = firstName;
        this.lastName = lastName
        this.membershipType = membershipType;
    };
    displayInfo(){
        return `Member Name: ${this.firstName} ${this.lastName} | Membership Type: ${this.membershipType}`;
    };
};

const mikeTyson = new GymMember("Mike Tyson", "Diamond");
console.log(mikeTyson);

// Task 4: Personal Training Client Class
class PersonalTrainerClient extends GymMember{
    constructor(firstName, lastName, membershipType, trainerName){
        super(firstName, lastName, membershipType);
        this.trainerName = trainerName;
    }
    displayInfo(){
        return`${super.displayInfo} | Trainer: ${this.trainerName}`;
    };
};

const kevinRooney = new PersonalTrainerClient("Kevin Rooney", "Staff", "Boxing Coach");
console.log(kevinRooney);

// Task 5: Gym Class Constructor

function GymClass(className, price){
    this.name = className;
    this.price = price;
}

const trialClass = new GymClass("Trial Class", 0);
console.log(trialClass);

let showPassword = false;

function passwordVisibility(showPassword){
    let pw = document.getElementById("password-input");
    showPassword = !showPassword;
    if(!showPassword){
        pw.type = "password";
    }else {
        pw.type = "text"
    };
};

document.addEventListener('DOMContentLoaded', () => {

    const displayArrayList = (array, elementId) => {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = '',
        array.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.displayInfo ? item.displayInfo() : `${item.name}, Price: $${item.price}`;
            listElement.appendChild(listItem);
        });
    };
    
    displayArrayList(members, 'all-gym-members');
    displayArrayList(filterPaidClasses(gymClasses), "paid-gym-classes");
    displayArrayList(filterFreeClasses(gymClasses), "free-gym-classes");

    document.getElementById('total-membership-fee').innerHTML = `<h4>Total Membership Fees: $${calculateMembershipFees(membershipFees)}</h4>`;

    document.getElementById('create-new-gym-member-btn').onclick = () => {
        const firstName = document.getElementById('new-member-first-name').value;
        const lastName = document.getElementById('new-member-last-name').value;
        const membershipType = document.getElementById('new-member-membership').value;
        const trainerName = document.getElementById('new-member-trainer').value;

        let member;
        if(trainerName){
            member = new PersonalTrainerClient(firstName, lastName, membershipType, trainerName)  ;  
        }else{
            member = new GymMember(firstName, lastName, membershipType);
        };

        members.push(member);
        displayArrayList(members, 'all-gym-members');
    };
    

    document.getElementById('create-new-gym-class-btn').onclick = () => {
        const className = document.getElementById('new-class-name').value;
        const classPrice = parseFloat(document.getElementById('new-class-price').value);
        console.log(className);
        let newClass = new GymClass(className, classPrice);
        console.log(newClass);
        gymClasses.push(newClass)
        
        let paidClasses = filterPaidClasses(gymClasses);
        console.log(paidClasses);
        let freeClasses = filterFreeClasses(gymClasses);
        console.log(freeClasses);
        displayArrayList(paidClasses, "paid-gym-classes");
        displayArrayList(freeClasses, "free-gym-classes");
    };
});