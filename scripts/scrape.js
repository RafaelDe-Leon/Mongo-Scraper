// Require request and cheerio, making our scrapes possible
// const request = require('request');
const cheerio = require('cheerio');

const scrape = function(cb) {
  reqiest('https://www.nytimes.com/', function(err, res, body) {
    const $ = cheerio.load(body);

    let articles = [];

    $('.css-1b72evd e1aa0s8g0').each(function(i, element) {
      let head = $(this)
        .children('.balancedHeadline')
        .text()
        .trim();
      let sum = $(this)
        .children('.css-1pfq5u e1n8kpyg0')
        .text()
        .trim();

      if (head && sum) {
        let headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, ' ').trim();
        let sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, ' ').trim();

        let dataToAdd = {
          headline: headNeat,
          summary: sumNeat
        };

        articles.push(dataToAdd);
        console.log(dataToAdd);
      }
    });
    cb(articles);
  });
};

module.exports = scrape;
