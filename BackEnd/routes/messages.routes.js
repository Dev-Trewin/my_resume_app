module.exports = app =>{

const message=require('../controllers/message.controller.js')
//Create a new Message
app.post("/api/message",message.createNewMessage)
//Get all Messages
app.get("/api/messages",message.findAll);
}