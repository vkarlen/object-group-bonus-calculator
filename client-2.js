/* This is my second whack at it since we ran out of time 
  while our code was completely broken... turns out the 
  issue was just a capital letter. */

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
  const currentSalary = Number(employee.annualSalary);
  const bonusPercent = calculateBonusPercent(employee);
  const newObject = {
    name: employee.name,
    bonusPercentage: bonusPercent,
    totalBonus: Math.round(currentSalary * bonusPercent),
  };

  newObject.totalCompensation = currentSalary + newObject.totalBonus;

  return newObject;
} // end employeeInfo

function calculateBonusPercent(employee) {
  const rating = employee.reviewRating;
  let bonus = 0;
  console.log('Calculating bonus percent...');

  //calculate starting bonus based on rating
  if (rating < 2) {
    bonus += 0;
  } else if (rating === 3) {
    bonus += 0.04;
  } else if (rating === 4) {
    bonus += 0.06;
  } else if (rating === 5) {
    bonus += 0.1;
  }

  // check for employees who have been with the company for >15 years
  // if true, add on 5%
  if (employee.employeeNumber.length === 4) {
    bonus += 0.05;
    console.log(`${employee.name} has been with the company >15 years!`);
  }

  // checking is the salary exceeds 65000
  if (employee.annualSalary >= 65000) {
    console.log('Salary is too high.');
    bonus -= 0.01;
  }

  //check limits
  if (bonus < 0) {
    console.log(`Raising bonus from ${bonus}.`);
    bonus = 0;
  }
  if (bonus > 0.13) {
    console.log(`Lowering bonus from ${bonus}.`);
    bonus = 0.13;
  }

  return bonus;
} // end of calculateBonusPercent
