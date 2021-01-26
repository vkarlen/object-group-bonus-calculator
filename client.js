const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// Write a declared function that takes in one Employee object (as an argument to the function), and returns a new object with the following properties:
// The name property should contain the employee's name.
// The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
// The totalBonus should be the employee's total bonus rounded to the nearest dollar.

for (i = 0; i < employees.length; i++) {
  console.log(employees[i]);
  console.log(employeeInfo(employees[i]));
}

function employeeInfo(employee) {
  const newObject = {
    name: employee.name, //setting the employee's name
  };
  console.log(calculateEmployeeBonus(employee));

  return newObject;
}

function calculateEmployeeBonus(employee) {
  const rating = employee.reviewRating;
  const salary = Number(employee.AnnualSalary);
  let bonus = 0;
  console.log('in calculate');
  if (employee.employeeNumber.length === 4) {
    bonus += salary * 0.05; // employee who has been with the company longer than 15 years.
    console.log('4 digit employee number');
  }
  if (rating < 2) {
    bonus += 0;
  } else if (rating === 3) {
    bonus += salary * 0.04;
  } else if (rating === 4) {
    bonus += salary * 0.06;
  } else if (rating === 5) {
    bonus += salary * 0.1;
  }
  return bonus;
}
// end of  employee function bonus
