//  Using the validator package from npm
//  Last Updated: 2023-09-27
//  Author: Michael Bennett

/* 
    Task 1 Step 2.a - Say how module would be used.
    In this file we use the validator package to validate email 
    addresses, urls, and numeric strings
*/


/* ---------------------------------------------------------------------------------------------- */
/*                                      VALIDATE EMAILS                                           */
/* ---------------------------------------------------------------------------------------------- */


const validator = require('validator'); // Import the validator package


const email = 'default@email.com'; // Create a valid email to test
const invalidEmail = 'invalidEmail.com' // Create an invalid email to test

// Check if email is valid
if (validator.isEmail(email)) {
    console.log(`The email ${email} is a valid email address`);
} else {
    console.log(`The email ${email} is not a valid email address`)
}

// Check to see if the invalid email properly fails
if (validator.isEmail(invalidEmail)) {
    console.log(`The email ${invalidEmail} is a valid email address`);
} else {
    console.log(`The email ${invalidEmail} is not a valid email address`)
}

/* ---------------------------------------------------------------------------------------------- */
/*                                      VALIDATE URLS                                             */
/* ---------------------------------------------------------------------------------------------- */


const url = 'https://www.w3schools.com'; // Create a valid url to test
const invalidUrl = 'https:/invalidUrlcom'; // Create an invalid url to test

// Check if the url is valid
if (validator.isURL(url)) {
    console.log(`The url ${url} is a valid url`);
} else {
    console.log(`The url ${url} is not a valid url`);
}

// Check if the invalid url properly fails
if (validator.isURL(invalidUrl)) {
    console.log(`The url ${invalidUrl} is a valid url`);
} else {
    console.log(`The url ${invalidUrl} is not a valid url`);
}


/* ---------------------------------------------------------------------------------------------- */
/*                                      VALIDATE NUMBERS                                          */
/* ---------------------------------------------------------------------------------------------- */



const numericString = '12345'; // Create a valid numeric string to test
const invalidNumericString = '123e4'; // Create an invalid numeric string to test

// Check if the numeric string is valid
if (validator.isNumeric(numericString)) {
  console.log(`The numeric string ${numericString} is a valid numeric value`);
} else {
  console.log(`The numeric string ${numericString} is not a valid numeric value`);
}

// Check if the invalid numeric string properly fails
if (validator.isNumeric(invalidNumericString)) {
  console.log(`The numeric string ${invalidNumericString} is a valid numeric value`);
} else {
    console.log(`The numeric string ${invalidNumericString} is not a valid numeric value`);
}