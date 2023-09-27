//   Using Node.js OS Module
//   Last Updated: 2023-09-25
//   Author: Michael Bennett

/* 
    Task 1 Step 2.a - Say how module would be used.
    In this os.js file, we use the Node.js OS module to access information about
    the operating system and display the information to the console
*/

/* ---------------------------------------------------------------------------------------------- */


const os = require('os'); // Import the os module


const hostname = os.hostname(); // Get the operating systems hostname
console.log(`Hostname: ${hostname}`); // Log the hostname to the console

const osType = os.type(); // Get the operating systems type
console.log(`OS Type: ${osType}`); // Log the os type to the consoel

const platform = os.platform(); // Get the operating systems platform
console.log(`Platform: ${platform}`); // Log it to the console

const arch = os.arch(); // Get the operating systems architecture
console.log(`Architecture: ${arch}`); // Log it to the console

const totalMemory = os.totalmem(); // Get the total memory of the system
console.log(`Total memory: ${totalMemory}`); // Log it to the console

const freeMemory = os.freemem(); // Get the free memory of the system
console.log(`Free Memory: ${freeMemory}`); // Log it to the console
