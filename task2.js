require("colors");

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Please enter your name: ", (name) => {
	console.log(`\nHello ${name}, nice to meet you 👋`.blue);
	readline.close();
});
