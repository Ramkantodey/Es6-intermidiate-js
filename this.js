class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`sleeping now ${this.name}`);
    }
    activity() {
        this.sleep();
    }

}

const kodom = new Person('Ramkanto Dey', 21);
console.log(kodom);
kodom.sleep();

const badam = new Person('kacha badam', 23);
badam.sleep();