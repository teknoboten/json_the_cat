const request = require('request');

// const catName = process.argv[2].toLowerCase();

const fetchBreedDescription = (breedName, callback) => {
  // const req = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  const req = `https://api.thecatapii.com/v1/breeds/search?name=${breedName}`; //badreq

  request(req, (error, response, body) => {

    if (error) {
      callback(error, null);
    }

    if (!error) {
    
      if (body === '[]') {
        callback(null, null);
      } else {
        const result = JSON.parse(body);
        const description = result[0]['description'];
        callback(null, description);
      }
    }
  });
};


module.exports = { fetchBreedDescription };



// request(req, (error, response, body) => {

//   if (error) {
//     console.log(`sorry, your request failed. 😿\n`);
//     console.log(error);
//     return;
//   }

//   if (body === "[]") {
//     console.log(`sorry, we couldn't find ${catName}, please try again.`);
//     return;
//   }

//   const data = JSON.parse(body);
//   console.log(data[0]['description']);

// });

// console.log(data[0]['description']);
