
const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const { password } = req.body;
        let roomId;   


        // gerar o numero da sala
        for (let i = 0; i < 6; i++) {           
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()
        }

        
        /** Inseri a sala no banco */
        await db.run(`INSERT INTO rooms (
         id,
         password
      ) VALUES (
         ${ Number(roomId) },
         ${ password }
      )`)


        await db.close()


        res.redirect(`/room/${ Number(roomId) }`)
    }



}















