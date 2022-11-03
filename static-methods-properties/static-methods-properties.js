class Governor {
    static doSomething1(){
      console.log('hi')
    }
    static doAnother(){
      console.log('yo')
    }
    static veto(){
      console.log('hey')
    }
  }
  Governor.veto()
  Governor.doSomething1()
  Governor.doAnother()
class Person {
    constructor(prop1, prop2, prop3){
      this.prop1 = prop1
      //... more of the same
    }
    //methods
    aMethod(){
      console.log('ima method')
    }
  }
  class PostalWorker extends Person {
    constructor(a,b,c,d){
      super(a,b,c)
      this.d = d
    }
    newMethod(){
    }
  }
  class Chef extends Person {
    constructor(a,b,c,d){
      super(a,b,c)
      this.d = d
    }
    newMethod(){
    }
  }  