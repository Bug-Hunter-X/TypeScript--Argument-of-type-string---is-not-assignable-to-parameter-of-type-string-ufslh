function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(", ");
}

let user = ["Jane User", "John Smith"];

console.log(greeterArray(user));
console.log(greeter(user[0])); // Accessing first element