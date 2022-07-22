// Code language: JavaScript (javascript)

// When a function creates and returns a new object, it is called a factory function

function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }
  
  let person1 = createPerson('John', 'Doe');
  let person2 = createPerson('Jane', 'Doe');
  
  console.log(person1.firstName);
  console.log(person2.getFullName());