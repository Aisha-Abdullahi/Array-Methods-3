function calculateAverageAge(persons) {
  const sum = persons.reduce((acc, person) => acc + person.age, 0);
  console.log(sum);   //218
  console.log(persons.length);  //10
  const averageAge = sum / persons.length;  //21.8
  const rounded = Math.round(averageAge);  //22

  return rounded;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
