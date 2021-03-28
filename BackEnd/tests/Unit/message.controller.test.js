

const messagecontroller=require('../../controllers/message.controller');

describe("messagecontroller.createnewmessage",()=>{
    it("should have a create new message function",()=>{
        expect(typeof messagecontroller.createNewMessage).toBe("function");
    })
})
