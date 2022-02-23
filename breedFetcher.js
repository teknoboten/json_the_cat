const request = require('request');

const catUrl = process.argv[2];
// const siberian = 'https://api.thecatapi.com/v1/breeds/search?q=sib'

console.log(catUrl);

request(catUrl, (error, response, body) => {
const data = JSON.parse(body);

console.log(data[0]['description']);

});