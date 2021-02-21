// Now that you're logging the property names, include the property values too. The console should display four lines that include both the property name and value.
// For example: 'instrument: piano'.

const composer = {
  name: 'Edward Ellington',
  nickname: 'Duke',
  genres: ['jazz', 'swing'],
  instrument: 'piano'
};

for (const prop in composer) {
  console.log(`${prop}: ${composer[prop]}`);
}