// readFile.js
// Author: Mohammad Ahmadi Fard, Gokdeniz Akin Akbuag
// Description: Reads a text file asynchronously using Node.js and prints the content to the terminal

const fs = require('fs');
const path = require('path');

/**
 * Get the absolute path to the text file
 */
const filePath = path.resolve(__dirname, 'paragraph.txt');

/**
 * Reads the content of the file asynchronously and logs it to the terminal
 * Uses UTF-8 encoding and handles errors gracefully
 */
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('❌ Failed to read the file. Details:', error.message);
    return;
  }

  console.log('📄 File Content:\n');
  console.log(data);
});
