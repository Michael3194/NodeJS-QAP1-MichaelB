//  Using Node.js URL Module
//  Last Updated: 2023-09-25
//  Author: Michael Bennett

/* 
    In this url.js file, we use the Node.js URL module to parse a URL, modify query parameters, and display the updated URL to the console
*/

/* ---------------------------------------------------------------------------------------------- */


const url = require('url'); // Import the URL module

// Create a sample URL
const urlString = 'https://www.website.com:8080/path/index.html?id=100&status=active';

const parsedUrl = url.parse(urlString, true); // Parse the URL
console.log(parsedUrl); // Display the parsed URL to the console

// Display some of the parsed URL properties
console.log('Protocol:', parsedUrl.protocol)
console.log('Host:', parsedUrl.host)
console.log('Pathname:', parsedUrl.pathname)
console.log('Query:', parsedUrl.query)

// Change query parameters
parsedUrl.query.price = '500';

// Remake the search query with new parameters
parsedUrl.search = `?${ new URLSearchParams(parsedUrl.query).toString()}`;

// Display the updated URL
console.log('Updated URL:', url.format(parsedUrl));
