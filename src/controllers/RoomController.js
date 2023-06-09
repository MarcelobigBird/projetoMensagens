
const Database = require("../db/config")


module.exports = {
    async create(req, res) {
        const db = await Database()
        const { password } = req.body;
        let roomId = 0;
        let isRoom = true;

        while (isRoom) {
            // gerar o numero da sala
            for (let i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()
            }

            /* Verificar se esse número já existe */
            let roomsExistIds = await db.all(`SELECT id FROM rooms`);

            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);

            if (!isRoom) {
                /** Inseri a sala no banco */
                await db.run(`INSERT INTO rooms (
             id,
             password
          ) VALUES (
             ${Number(roomId)},
             ${password}
          )`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`);
    },

    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${ roomId } and read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${ roomId } and read = 1`);
        let isNoQuestions;

        // Verficando se tem perguntas na sala
        if(questions.length === 0) {
            if(questionsRead.length === 0) {
                isNoQuestions = true;
            }
        }

        res.render('room', { roomId, questions, questionsRead, isNoQuestions });
    },

    enter(req, res) {
        const roomId = req.body.roomId;
      
       res.redirect(`/room/${roomId}`);
    }

}















