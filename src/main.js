function selectTask() {
  while (true) {
    const selected = Number(
      prompt(`Please, choose number to run a program.
      1. Find the area of a rectangle;
      2. Find the circumference of a circle;
      3. Find the volume of a cylinder;
      4. Find numbers from a range that are divisible by 5;
      5. FizzBuzz till 100;
      6. Find the root of a quadratic equation.`)
    );
    if (selected === 1 || selected === 2 || selected === 3 || selected === 4 || selected === 5 || selected === 6) {
      return selected;
    }
  }
}

function runTask(selected) {
  switch (selected) {
    case 1:
      areaOfRect();
      break;
    case 2:
      circumOfCircle();
      break;
    case 3:
      volumeOfCylinder();
      break;
    case 4:
      findNumDiv5();
      break;
    case 5:
      fizzBuzz();
      break;
    case 6:
      rootOfQuEq();
      break;
    default:
      console.log('Enter number from 1 to 6!');
  }
}

function areaOfRect() {
  let RectWidth;
  let RectHeight;

  while (isNaN(RectWidth) || RectWidth <= 0) {
    RectWidth = Number(prompt('Please, enter the width of a rectangular (bigger than zero)'));
  }

  while (isNaN(RectHeight) || RectHeight <= 0) {
    RectHeight = Number(prompt('Please, enter the height of a rectangular (bigger than zero)'));
  }

  alert('Thank you! Check the console');
  const result = RectWidth * RectHeight;
  console.log('The square of a rectangle is ', result);
}

function circumOfCircle() {
  let diam;
  while (isNaN(diam) || diam <= 0) {
    diam = Number(prompt('Please, enter the diameter of a circle'));
  }

  alert('Thank you! Check the the console');
  const result = diam * 3.14;
  console.log('The circumference of a circle is ', result);
}

function volumeOfCylinder() {
  let radius;
  let height;
  while (isNaN(radius) || radius <= 0) {
    radius = Number(prompt('Please, enter the radius of a cylinder base'));
  }
  while (isNaN(height) || height <= 0) {
    height = Number(prompt('Please, enter the height of a cylinder'));
  }

  alert('Thank you! Check the console');
  const result = 3.14 * Math.sqrt(radius) * height;
  console.log('The volume of a cylinder is ', result);
}

function findNumDiv5() {
  let rangeStart;
  let rangeEnd;

  while (isNaN(rangeStart) || rangeStart < 0) {
    rangeStart = Number(prompt('Please, enter the beginning of the range (zero or positive number)'));
  }

  while (isNaN(rangeEnd) || rangeEnd < 0 || rangeEnd <= rangeStart) {
    rangeEnd = Number(prompt('Please, enter the end of the range (positive number, bigger than start of the range)'));
  }

  alert('Thank you! Check the console');
  console.log('Checking for numbers that are divisible by 5...');

  for (rangeStart; rangeStart <= rangeEnd; rangeStart++) {
    if (!(rangeStart % 5 === 0) || rangeStart === 0) {
      continue;
    } else {
      console.log(rangeStart);
    }
  }
}

function fizzBuzz() {
  alert('Check the console!');
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizz buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

function rootOfQuEq() {
  let coefA;
  let coefB;
  let coefC;
  let root1;
  let root2;

  while (isNaN(coefA) || coefA === 0) {
    coefA = Number(prompt('Please, enter the first coefficient of the quadratic equasion (not zero)'));
  }

  while (isNaN(coefB)) {
    coefB = Number(prompt('Please, enter the second coefficient of the quadratic equasion'));
  }

  while (isNaN(coefC)) {
    coefC = Number(prompt('Please, enter the free member of the quadratic equasion'));
  }

  alert('Thank you! Check the console');
  console.log('You entered:');
  console.log('Coefficient 1: ' + coefA);
  console.log('Coefficient 2: ' + coefB);
  console.log('Free member: ' + coefC);
  console.log('Looking for the roots of the quadratic equasion...');

  const discr = coefB ** 2 - 4 * coefA * coefC;

  if (discr < 0) {
    console.log('Discriminant is ' + discr);
    console.log('The discriminant is negative. There are no roots of the quadratic equasion');
  } else if (discr === 0) {
    root1 = (-1 * coefB) / (2 * coefA);
    console.log('Discriminant is ' + discr);
    console.log('The discriminant is zero. There is only one root: ' + root1);
  } else {
    root1 = (-1 * coefB + Math.sqrt(discr)) / (2 * coefA);
    root2 = (-1 * coefB - Math.sqrt(discr)) / (2 * coefA);
    console.log('Discriminant is ' + discr);
    console.log('The discriminant is positive. There are two roots: ' + root1 + ' and ' + root2);
  }
}

runTask(selectTask());
