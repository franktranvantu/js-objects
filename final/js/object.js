const person = {
  name: 'Frank',
  city: 'Vietnam',
  age: 29,
  isStudent: true,
  skills: ['HTML', 'CSS', 'JAVASCRIPT']
}

person.nickname = 'Tu';
const message = `
  Hi, I'm ${person.name}. 
  I live in ${person.city}. 
  Most know me as ${person.nickname}.
  My age is ${person.age + 1}.
  I have ${person.skills.length} skills: ${person.skills.join(', ')}.
`;
console.log(message);