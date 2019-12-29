const db = require('../models');
const scrape = require('../scripts/scrape');

moldule.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: 'No new articles today. Check back tomorrow!'
          });
        } else {
          // send back a count of how many articles was found
          res.json({
            message: 'added' + dbHeadline.length + ' new articles!'
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: 'Scrape Complete!'
        });
      });
  }
};
