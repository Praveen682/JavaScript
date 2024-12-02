class test{
    constructor(name,age,school){
        this.name = name;
        this.age = age;
        this.school = school;
    }
}

class open extends test{
    constructor(name,age,school){
        super(name,age,school);
        this.type = "good";
    }
    function(){
        console.log(this.name+this.age+this.type);
    }
}

const obj = new test("josh",20,"shc");
const newobj = new open("josh",20,"shc");
newobj.function();