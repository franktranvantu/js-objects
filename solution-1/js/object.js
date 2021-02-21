// Use a for...in loop to log each of the property names of the composer object to the console.

const composer = {
  name: 'Edward Ellington',
  nickname: 'Duke',
  genres: ['jazz', 'swing'],
  instrument: 'piano'
};

for (const prop in composer) {
  console.log(prop);
}