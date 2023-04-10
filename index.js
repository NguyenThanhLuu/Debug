// Check age

const checkAge = (age) => {
  let a = 4;
  let b = 2;
  let sum = a + b;

  console.log(`Sum a + b is: ${sum}`);
  let arrayDemo = [
    { age: 25, name: "Luu" },
    { age: 24, name: "Minh" },
  ];

  let newArray = arrayDemo.map((obj) => {
    return {
      age: obj.age + 10,
      name: `Nguyen Thanh ${obj.name}`,
      gender: obj.name === "Luu" ? "Male" : "Female",
    };
  });

  console.log(newArray);
  if (age) {
    if (age > 6 && age <= 11) {
      console.log("ban hoc cap 1");
    } else if (age >= 12 && age <= 15) {
      console.log("ban hoc cap 2");
    } else if (age > 16 && age <= 18) {
      console.log("ban hoc cap 3");
    } else {
      console.log("ban hoc dai hoc hoac qua gia!");
    }
  } else {
    console.log("No value in function");
  }
};

checkAge(12);

// Reduce

let arrayReduce = [1, 3, 4, 2];
let arrayResult = arrayReduce.reduce((previous, current) => {
  return previous - current;
}, 19);

console.log("arrayResult:", arrayResult);
