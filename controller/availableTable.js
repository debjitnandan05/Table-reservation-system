export const availabletable = (req, res, next)=> {
    
    const dateTime = new Date(req.body.date);
  
    Day.find({ date: dateTime }, (err, docs) => {
      if (!err) {
        if (docs.length > 0) {
          // Record already exists
          res.status(200).json({
            message : "Record exists."
          })
        } else {
          // Searched date does not exist and we need to create it
          const allTables = require("../data/allTables.js");
          const day = new Day({
            date: dateTime,
            tables: allTables
          });
          day.save(err => {
            if (err) {
              res.status(400).send("Error saving new date");
            } else {
              // Saved date and need to return all tables (because all are now available)
              console.log("Created new datetime. Here are the default docs");
              Day.find({ date: dateTime }, (err, docs) => {
                err ? res.sendStatus(400) : res.status(200).send(docs[0]);
              });
            }
          });
        }
      } else {
        res.status(400).send("Could not search for date");
      }
    });
  }