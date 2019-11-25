const Note = require('../models/Notes');
const makeDate = require('../scripts/date');

module.exports = {
  get: function(data, cb) {
    Note.find(
      {
        _headlineId: data._id
      },
      cb
    );
  },
  save: function(data, cb) {
    let newNote = {
      _headlineId: data._id,
      date: makeDate(),
      noteText: data.noteText
    };

    Note.create(newNote, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
        cb(doc);
      }
    });
  },
  delete: function(data, cb) {
    Note.remove(
      {
        _id: data._id
      },
      cb
    );
  }
};
