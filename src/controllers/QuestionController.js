module.exports = {
    index(req, res)  {
       const { room, question, action } = req.params;
       const { password } = req.body;

       console.log( room, question, action, password); 
       res.send(`roomId: ${room}, questionId: ${question}, action: ${action}, password: ${password}`);
}

}