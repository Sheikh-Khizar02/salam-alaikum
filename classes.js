class Person{
    
    constructor(name,age){
        this.name=name
        this.age=age
    }

    data(){
        console.log("my name is " + this.name)
        console.log("my age is " + this.age)
    }
}

const person_obj = new Person("Khizar",18)
person_obj.data()