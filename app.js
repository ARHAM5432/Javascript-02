// 🌟 Assignment 01: Alerts 🌟

// 📝 Task 01: Greeting Alert 📝
// Display a message asking for a valid password
// alert("please Enter a Valid password");

// 📝 Task 02: Welcome Message 📝
// Display a welcome message with a line break
// alert("Wlcome to JS Land \n HappyCoding!");

// 📝 Task 03: Sequential Alerts 📝
// Display messages in sequence
// alert("Welcome To JS Land");
// alert("Happy Coding!");

// 📝 Task 04: Console Alert 📝
// Display a message using the browser’s developer console
// alert("hello i can use Js through my web browser console");


// 🌟 Assignment 02: Variables for Strings 🌟

// 📝 Task 01: Variable Declaration and Alerts 📝
// Declare variables and display messages
// var username;
// var myname = "Arhum";
// var message = "Hello World";
// username = "Arhum";
// var age = "17";
// var course = "Web and App";
// alert(message);
// alert(username);
// alert(myname);
// alert(age);
// alert(course);

// 📝 Task 02: Pizza Pattern 📝
// Display a pizza pattern message
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// 📝 Task 03: Email Alert 📝
// Display an email address
// var email = "arhum@example.com";
// alert(email);

// 📝 Task 04: Book Alert 📝
// Display a message with a book title
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the " + book);


// 🌟 Assignment 03: Variables for Numbers 🌟

// 📝 Task 01: Age Alert 📝
// Display the user's age
// var age = 17;
// alert("My age is " + age);

// 📝 Task 02: Page Visits 📝
// Track and display the number of page visits
// var visit = 14;
// alert("You have visited our web " + visit);

// 📝 Task 03: Birth Year 📝
// Display the birth year
// var birthYear = 2006;
// document.write("My birth year is " + birthYear);

// 📝 Task 04: Clothing Store Receipt 📝
// Store and display shopping details
// var xyz = "XYZ clothing store";
// var visitorsName = "John Doe";
// var productTitle = "T-Shirt";
// var order = 5;
// document.write(visitorsName + " ordered " + order + " " + productTitle + "(s) on " + xyz);


// 🌟 Assignment 04: Legal & Illegal Variable Names 🌟

// 📝 Task 01: Variable Declarations 📝
// Declare variables and display rules for naming JS variables
// let abc;
// const abcd = 1;
// var abcde;

// 📝 Task 02: Variable Names 📝
// Display legal and illegal variable names
// var Geeks;
// var Geeks_for_Geeks;
// var $Geeks;
// var _Geeks;
// var Geeks123;
// // var Geeks-for-Geeks;  // Hyphens not allowed
// // var 123Geeks;  // Cannot start with numbers
// // var Geeks for Geeks;  // Spaces not allowed

// 📝 Task 03: Variable Naming Rules 📝
// Display rules for naming JS variables
// document.write("<h1>Rules for Naming JS Variables</h1>");
// document.write("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable<br>");
// document.write("Variables must begin with a letter, $, or _. For example: $name, _name, or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords");

// 🌟 Assignment 05: Math Expressions 🌟

// 📝 Task 01: Addition 📝
// Add two numbers and display the result
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " = " + result);

// 📝 Task 02: Arithmetic Operations 📝
// Perform subtraction, multiplication, division, and modulus
// var multiplication = num2 * num1;
// var addition = num1 + num2;
// var subtraction = num2 - num1;
// var division = num1 / num2;
// var modulus = num2 % num1;

// 📝 Task 03: Variable Manipulation 📝
// Perform various arithmetic operations on a variable
// var val = 5;
// document.write("Value after variable declaration is " + val + "<br>");
// val++;
// document.write("Initial value: " + val + "<br>");
// val += 7;
// document.write("Value after addition is: " + val + "<br>");
// val--;
// document.write("Value after decrement is: " + val + "<br>");
// document.write("The remainder is: " + (val % 7) + "<br>");

// 📝 Task 04: Movie Ticket Cost 📝
// Calculate the cost of buying 5 movie tickets
// var ticketPrice = 600;
// var quantity = 5;
// document.write("Total cost of buying " + quantity + " movie tickets is " + (ticketPrice * quantity) + " PKR<br>");

// 📝 Task 05: Multiplication Table 📝
// Display multiplication table of a number
// var number = 4;
// document.write("<h2>Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// 📝 Task 06: Temperature Converter 📝
// Convert Celsius to Fahrenheit and vice versa
// var celsius = 25;
// var fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheitFromCelsius.toFixed(2) + "°F<br>");

// var fahrenheit = 77;
// var celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C<br>");

// 📝 Task 07: Shopping Cart Checkout 📝
// Calculate total cost of items in a shopping cart
// var priceOfItem1 = 15.99;
// var priceOfItem2 = 29.99;
// var quantityOfItem1 = 3;
// var quantityOfItem2 = 2;
// var shippingCharges = 5.99;

// var totalCostOfItem1 = priceOfItem1 * quantityOfItem1;
// var totalCostOfItem2 = priceOfItem2 * quantityOfItem2;
// var subtotal = totalCostOfItem1 + totalCostOfItem2;
// var totalCost = subtotal + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("Item 1: $" + priceOfItem1.toFixed(2) + " x " + quantityOfItem1 + " = $" + totalCostOfItem1.toFixed(2) + "<br>");
// document.write("Item 2: $" + priceOfItem2.toFixed(2) + " x " + quantityOfItem2 + " = $" + totalCostOfItem2.toFixed(2) + "<br>");
// document.write("Subtotal: $" + subtotal.toFixed(2) + "<br>");
// document.write("Shipping Charges: $" + shippingCharges.toFixed(2) + "<br>");
// document.write("Total Cost: $" + totalCost.toFixed(2) + "<br>");

// 📝 Task 08: Percentage Calculation 📝
// Calculate and display percentage
// var totalMarks = 500;
// var marksObtained = 375;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h2>Result</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

// 📝 Task 09: Currency Converter 📝
// Convert USD and SAR to Pakistani Rupees
// var usdToPkrRate = 104.80;
// var sarToPkrRate = 28;
// var amountInUsd = 10;
// var amountInSar = 25;

// var totalInPkr = (amountInUsd * usdToPkrRate) + (amountInSar * sarToPkrRate);
// document.write("Total in Pakistani Rupees: " + totalInPkr + "<br>");

// 📝 Task 10: Arithmetic Sequence 📝
// Perform arithmetic operations on a variable
// var initialNumber = 20;
// var result = (((initialNumber + 5) * 10) / 2);
// document.write("<h2>Result: " + result + "</h2>");

// 📝 Task 11: Age Calculator 📝
// Calculate possible ages based on birth year
// var currentYear = 2024;
// var birthYear = 1990;

// var ageIfBirthdayHasOccurred = currentYear - birthYear;
// var ageIfBirthdayHasNotOccurred = ageIfBirthdayHasOccurred - 1;

// document.write("<h2>They are either " + ageIfBirthdayHasOccurred + " or " + ageIfBirthdayHasNotOccurred + " years old</h2>");

// 📝 Task 12: Circle Properties 📝
// Calculate circumference and area of a circle
// var radius = 10;
// var pi = Math.PI;

// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("<h2>Circumference of Circle: " + circumference.toFixed(2) + "</h2>");
// document.write("<h2>Area of Circle: " + area.toFixed(2) + "</h2>");

// 📝 Task 13: Lifetime Supply Calculator 📝
// Calculate lifetime supply of snacks
// var favoriteSnack = "chocolate chip cookies";
// var currentAge = 25;
// var estimatedMaxAge = 70;
// var snacksPerDay = 3;

// var totalSnacks = (estimatedMaxAge - currentAge) * 365 * snacksPerDay;
// document.write("<h2>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the age of " + estimatedMaxAge + "</h2>");
