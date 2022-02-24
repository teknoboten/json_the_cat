const request = require('request');

const catName = process.argv[2].toLowerCase();
const req = `https://api.thecatapi.com/v1/breeds/search?name=${catName}`;



request(req, (error, response, body) => {

  if (error) {
    console.log(`sorry, your request failed. 😿\n`);
    console.log(error);
    return;
  }

  if (body === "[]") {
    console.log(`sorry, we couldn't find ${catName}, please try again.`);
    return;
  }

  const data = JSON.parse(body);
  console.log(data[0]['description']);

});