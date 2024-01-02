//================================= Day - 22 2nd Jan 2024 ============================

//---------------------------- Class and Constructor -------------------------------

class User {
    constructor(name,email,password) {
        this.name = name
        this.email = email
        this.password = password
    }
    encryptPass(){
       return  `your password is ${this.password}abc`
    }
}

const pass = new User('Akshay','akshay@gmail.com',123)
console.log(pass.encryptPass());

//==================== Behind the Scene ============================
// if class was not present then how we code above program...

function Userdetails(name,email,password){      // here you can see ... is coming under Userdetails() that menas it can be convert into class.
    this.name = name
    this.email = email
    this.password = password

    Userdetails.prototype.encryptPassword = function(){         // see prototype.js for more understanding
        return `your password is ${this.password.toUpperCase()}2024`
    }
}

const passwrd = new Userdetails('Akshay','akshay@gmail.com','password')
console.log(passwrd.encryptPassword());


//================================ Inheritance in class =======================================

class user{
    constructor(name,company){
        this.name = name
        this.company = company
    }
    userName(){
        console.log(`${this.name} works in ${this.company}..`);
    }
}

class details extends user{
    constructor(name,company,location,job){
        super(name,company)
        //super(company)       //two times super() call will not work. here I'm getting - ReferenceError: Super constructor may only be called once
        this.location = location
        this.job = job
    }
    userDetails(){
        console.log(`Currently he lives in ${this.location}. He is a ${this.job}..`);
    }
}

const detail = new details('Akshay','Capgemini','Navi Mumbai','Senior Analyst')
detail.userName()       // this is having access...since this is child class and inheriting parent properties.....
detail.userDetails()

const ud = new user('Akshay','Capgemini')

ud.userName()
// ud.userDetails()        // this is not having access...since this is parent class...

// console.log(detail === ud);         // ans is false...
// console.log(detail === details);    // ans is false... bcz it is not equal it is instance os this...

// console.log(ud === user);           // ans is false... bcz it is not equal it is instance os this...

console.log(detail instanceof details);
console.log(detail instanceof user);        // ans is true since this is child class of parent class
console.log(ud instanceof user);
console.log(ud instanceof details);         // ans is false since this is parent class
console.log(details instanceof  user);      // ans is false



//=========================== Static Properties ========================================

class employee{
    constructor(name){
        this.name = name
    }
    employeeName(){
        return `Hello ${this.name} Good Morning..!`
    }
}


class loc extends employee{
    constructor(name,location){
        super(name)
        this.location = location
    }
    // employeeDetails(){
    //     return `Currently he lives in ${this.location}..`
    // }
    static employeeDetails(){           // after putting static it wi;; not be accessible...TypeError: empName.employeeDetails is not a function
        return `Currently he lives in ${this.location}..`
    }
}

const emp = new loc('Akshay','Airoli')
//console.log(emp.employeeDetails());

const empName = new employee('Akshay')
console.log(empName.employeeName());

//console.log(empName.employeeDetails());    // due to static restriction giving error - TypeError: empName.employeeDetails is not a function
