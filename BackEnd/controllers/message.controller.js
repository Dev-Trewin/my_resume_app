const Message = require("../models/message.model.js");

// Create and Save a new Message
exports.createNewMessage = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Message
    const message = new Message({
        contactname: req.body.contactname,
        email: req.body.email,
        message: req.body.message
    });

    // Save message in the database
    Message.createNewMessage(message, (err, data) => {
       
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the message."
            });
        else res.send(data);
    });
};

// Retrieve Messages from the database.
exports.findAll = (req, res) => {
    Message.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages."
        });
      else res.send(data);
    });
  };
