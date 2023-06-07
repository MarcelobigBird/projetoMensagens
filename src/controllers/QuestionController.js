const Database = require('../db/config');    

        exports.index = async (req, res)  => {     

        const db = await Database();

        const { roomId, questionId, action } = req.params;       
        const { password } = req.body;
        console.log(roomId, questionId, action, password);
      
       /* Verificar se a senha esta correta */
      let verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${ roomId } `);

      if (verifyRoom.password == password) {

        if(action == 'delete')  await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
        if(action == 'check')   await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

        res.redirect(`/room/${ roomId }`);              

      }  else {
        res.render('passincorrect', { roomId });
      }
 
       
}
 
    exports.create = async (req, res) => {
        const db = await Database();
    
        const { question } = req.body;
        const { roomId } = req.params;
        
    
        await db.run(`INSERT INTO questions(        
            title,
            read,         
            room
        ) VALUES (
            "${ question }",
            0,
            ${ roomId }
        )`)
    
        res.redirect(`/room/${ roomId }`);
    
      }
 
    


    /*   if (action == 'delete') {

        await db.run(`DELETE FROM questions WHERE id = ${ questionId }`);

    } else if (action == 'check') {

        await db.run(`UPDATE questions SET read = 1 WHERE id = ${ questionId }`);

    } */