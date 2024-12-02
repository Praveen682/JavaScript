class student{
    constructor(name,age,school){
        this.name = name;
        this.age = age;
        this.school = school;
    }
}

class college extends student{
    constructor(name,age,school){
        super(name,age);
            this.college = "St.joseph"
    }
            slice(){
            console.log(`this name is ${this.name} and the age is ${this.age} and the college is ${this.college}` );
            }

}

const Obj = new college("arun",22,"shc");
Obj.slice();
console.log(Obj.name)