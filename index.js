const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2].toLowerCase();

fetchBreedDescription(breedName, (error, description) => {

  // console.log(`error: ${error}`);
  // console.log(`description: ${description}`);

  if (error && !description) {  //works for bad url
    console.log(`sorry, your request failed. 😿\n`);
    console.log(error);
  }

  if (!error && !description) {  //works for bad url
    console.log(`sorry, we could not find a match for ${breedName}. 😿\n`);
  }
  
  if (!error && description) {
    console.log(description);
  }

});