const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  const req = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;

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
