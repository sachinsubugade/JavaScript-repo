'use strict';
/*
// Constructor function and 'new' Operator
const Person = function (firstName, birthYear) {
    //Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const sachin = new Person('Sachin', 1997);
console.log(sachin);    

// 1. New {} is created
// 2. function is called
// 3. {} linked to prototype
// 4. function automatically return {}

const viraj = new Person('Viraj', 2015);
console.log(viraj);   

console.log(viraj instanceof Person);


// Prototypes   
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear);
};

sachin.calcAge();
viraj.calcAge(); 
// This prototype is of Objects
console.log(sachin.__proto__);
console.log(sachin.__proto__ === Person.prototype);  //true
console.log(Person.prototype.isPrototypeOf(sachin)); //true
// This prototype is not of Constructor Function (here Person)
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.location = 'Pune';
console.log(sachin.location, viraj.location);   
console.log(sachin.hasOwnProperty('firstName'));      
console.log(sachin.hasOwnProperty('location'));  

console.log(sachin.__proto__);
// Object.prototype (top of prototype chain)
console.log(sachin.__proto__.__proto__);
console.log(sachin.__proto__.__proto__.__proto__);


const arr = [1, 2, 5, 8, 7, 9, 9, 5];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);    


// CODING CHALLENGE #1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.make, this.speed);
}

Car.prototype.break = function () {
    this.speed -= 5
    console.log(this.make, this.speed);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.break();
bmw.accelerate();

mercedes.accelerate();
mercedes.break();
mercedes.break();
mercedes.break();
mercedes.accelerate();




// ES6 Classes

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    clacAge () {
        console.log(2021 - this.birthYear);
    }

    greet () {
        console.log(`Hello ${this.firstName} , How are You !`);4
    }

    get age() {
        return 2021 - this.birthYear;
    }
    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        // else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const rajveer = new PersonCl('Rajveer', 2015);
console.log(rajveer);
rajveer.clacAge();
rajveer.greet();
console.log(rajveer.age);
rajveer.fullName;


const me = new PersonCl('Me', 1997);


const account = {
    owner: 'Sachin',
    movements: [100, 300, 250, 550, 1000],

    get latest () {
        return this.movements.slice(-1).pop()
    },

    set latest (mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);
account.latest = 500;
console.log(account.movements);




const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    }
};

const sachin = Object.create(PersonProto);
console.log(sachin)
sachin.name = 'Sachin';
sachin.birthYear = 1997;
sachin.calcAge();


// CODING CHALLENGE #2

class Car {
constructor(make, speed) {
    this.make = make;
    this.speed = speed;
}

accelerate () {
    this.speed += 10;
    console.log(this.make, this.speed);
}

break () {
    this.speed -= 5
    console.log(this.make, this.speed);
}

get speedUS () {
    return this.speed / 1.6;
}

set speedUS (speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
}

}

const ford = new Car('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.break();
ford.speedUS = 50;



// Inheritance between Classes : Constructor Function

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My Name is ${this.firstName} and I study ${this.course}.`);
};

const sachin = new Student('Sachin',1997,'Computer Engineering');
sachin.introduce();
sachin.calcAge();

console.log(sachin.__proto__);
console.log(sachin.__proto__.__proto__);
console.log(sachin.__proto__.__proto__.__proto__);
console.log(sachin.__proto__.__proto__.__proto__.__proto__);

console.log(sachin instanceof Student);
console.log(sachin instanceof Person);
console.log(sachin instanceof Object);

Student.prototype.constructor = Student;  
console.dir(Student.prototype.constructor);



// CODING CHALLENGE #3

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
     
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

Car.prototype.break = function () {
    this.speed -= 5
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1; 
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
// tesla.chargeBattery(20);
tesla.break();
tesla.accelerate();
tesla.break();



// Inheritance between Classes : ES6 Classes

class Personcl {
    constructor (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    clacAge () {
        console.log(2021 - this.birthYear);
    }

    greet () {
        console.log(`Hello ${this.firstName} , How are You !`);4
    }

    get age() {
        return 2021 - this.birthYear;
    }
    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        // else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

}

class Studentcl extends Personcl {
    constructor (firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    introduce () {
        console.log(`My Name is ${this.firstName} and I study ${this.course}.`);
    }

}

const sachin = new Studentcl('Sachin', 1997, 'CS');
sachin.introduce();
sachin.clacAge();



// Inheritance between Classes : Object.create

const PersonProto = {
    calcAge () {
        console.log(2021 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear; 
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init =function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My Name is ${this.firstName} and I study ${this.course}.`);
}

const sachin = Object.create(StudentProto);
sachin.init('Sachin', 1997, 'CS');
sachin.introduce(); 
sachin.calcAge();


// Another class Example

//Public Fields
//Private Fields
//Public Methods
//Private Methods
// (there is also the static version)

class Account {
    // Declaration Of Public Fields (instances)
    locale = navigator.language;

    // Declaration of Private Fields
    
    #movements = [];
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected Property
        this._pin = pin;
        // this.#movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
         }
    // Public Interface 
    getMovements () {
        return this.#movements;
    }
    deposit (val) {
        this.#movements.push(val);
        return this;
    }

    withdraw (val) {
        this.deposit(-val);
        return this;
    }

    _approveLoan (val) {
        return true;
        return this;
    }

    requestLoan (val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved of ${val}₹ `);
            return this;
        }
    }

    static helper () {
        console.log('Helper...');
    }
}


const acc1 = new Account('Sachin', '₹', 1234);

// acc1.movements.push(300);
// acc1.movements.push(-100);
acc1.deposit(350);
acc1.withdraw(180);

acc1.requestLoan(1000);
console.log(acc1);
Account.helper(); 

// console.log(acc1.#movements);

// Chaining Methods

acc1.deposit(250).deposit(150).withdraw(300).requestLoan(100000).withdraw(100000);

console.log(acc1.getMovements());   

*/

// CODING CHALLENGE #4


class Carcl {

constructor (make, speed) {
    this.make = make;
    this.speed = speed;
}

accelerate () {
    this.speed += 10;
     
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
    return this;
}

break () {
    this.speed -= 5
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
}

}

class EVcl extends Carcl { 
    #charge;
constructor (make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
}


accelerate () {
    this.speed += 20;
    this.#charge -= 1; 
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
    return this;
}

chargeBattery (chargeTo) {
    this.#charge = chargeTo;
    console.log(this.#charge);
    return this;
}
}

const rivian = new EVcl('Rivian', 120, 23);
rivian.accelerate();
rivian.break();
rivian.chargeBattery(99);
rivian.accelerate();

rivian.accelerate().break().chargeBattery(80).accelerate().accelerate().break();