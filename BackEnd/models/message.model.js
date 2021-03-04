const sql = require("../models/db.js")

//constructor
const Message = function (message) {
    this.id_message=message.id_message,
    this.contactname = message.contactname,
    this.email=message.email,
    this.message = message.message
}

Message.createNewMessage=(newMessage,result)=>
{
    console.log(newMessage)
    sql.query("INSERT INTO message SET?",newMessage,(err,res)=>{
        if(err){
            console.log('error: ', err);
            result(err,null);
            return;
        }
        console.log("created message:",{id:res.insertId, ...newMessage});
        result(null,{id:res.insertId, ...newMessage});
    });

};

Message.getAll=result=>{
    console.log("funcion get all message")
    sql.query("SELECT * FROM message",(err,res)=>{
     
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("customers: ", res);
        result(null, res);
       
      
    })
}

module.exports = Message;