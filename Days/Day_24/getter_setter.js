//------------------------------------ Day-24 5 Jan 2024 ----------------------------------------------

//-=================================== Getter and Setter ==============================================

class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email      // here _ refering to private access.. 
    } 

    set email(value){
         this._email = value
    }
/*  when you give as it is email then will thorugh RangeError: Maximum call stack size exceeded due stack limit will be full bcz
    both constructor and getter&setter both are refereing the same email and setting the value of email 
    so to avoid this error we can give diff name  like _email and one more thing method name in getter & setter should be same as constructor name 
    but while refering them using this keyword give different name.*/

    get password(){
       // return this._password       // in getter method we have to return value otherwise it will noy return any value
        return `${this._password}_Happy_New_Year`.toUpperCase()
    }
    set password(value){
        this._password = value      // in setter we cant return any value . we just set the value
    }

}

const details = new User('akshay@fb.com',2024)
console.log(details);
console.log(`email : ${details.email}`);
console.log(`password : ${details.password}`);


//----------------------------- Using Function Getter and Setter -------------------------------

function userData (email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get: function() {
            return this._password.toUpperCase()
        },
        set: function(value) {
            this._password = value
        }
    })
}

const userDetail = new userData('akshay@cg.com','Happy_New_Year')
console.log(`email : ${userDetail.email}`);
console.log(`password : ${userDetail.password}`);


//----------------------------- Using Object Getter and Setter -------------------------------

const objectgetset = {
    _email: 'hi@mumbai.com',
    _password : 'hello_password',

    get email() {
        return this._email
    },
    
    set email(value) {
        this._email = value.toUpperCase()
    },

    get password() {
        return this._password.toUpperCase()
    },
    
    set password(value) {
        this._password = value.toUpperCase()
    }
    
}

const setget = Object.create(objectgetset)      // to access object we've to create new empty object and store into a variable..
console.log(setget.email);
console.log(setget.password);


