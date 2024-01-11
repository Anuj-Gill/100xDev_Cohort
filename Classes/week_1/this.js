let testVar = 99;

function testingThis() {
  let testVar = 100;
  console.log(this.testVar); //We are seeing undefined here because this function is defined globally, so it refers to the global context, now the variable defined in the global context is a normal variable, instead it should be a property of the global object ie --> window.testVar = 99; Then it will run properly and print 99
  
}

testingThis()