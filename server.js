//      Node.js HTTP Server
//      Last updated: 2023-09-25
//      Author: Michael Bennett

/*
        This Node.js file creates an HTTP server that serves HTML files based
        on the URL path. The server listens on port 3000, and handles the routes "/" and "/test"
*/

/* ---------------------------------------------------------------------------------------------- */


const http = require('http'); // Import the http module
const fs = require('fs'); // Import the fs module

// Create an HTTP server
const server = http.createServer((request, response) => {

    let filePath = './views/'; // Set the default file path
    const urlPath = request.url; // Determine the URL path

    // Map the routes to the HTML files
    const routeMapping = {
        '/': 'index.html',
        '/test': 'test.html',
      };

      // Check if the requested path has a corresponding HTML file
      if (routeMapping[urlPath]) {

        filePath += routeMapping[urlPath]; // Concatenate the file path with the HTML file name

        // Read the HTML file asynchronously
        fs.readFile(filePath, (err, data) => {

          if (err) {
            console.log(err); // If there is an error, log it to the consoel
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');

          } else {
            console.log(`Serving ${routeMapping[urlPath]}`); // If no error, log the file name to the console
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
          }

        });

      // If no corresponding HTML file is found
      } else {
        console.log(`Route not found for: ${urlPath}`); // Log the error to the console
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
      }
});

// Start the server on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000'); // Log that the server is listening
});
