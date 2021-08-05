const fetch = require("node-fetch");
const { markAsUntransferable } = require("worker_threads");

const quotes = fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    const random = Math.floor(Math.random() * data.length);
    console.log(`Today's quote is:\n\n${data[random]['text']}\n`);
    
  });

