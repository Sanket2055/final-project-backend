const client = require("../conifgs/db");

exports.addNote = (req, res) => {
    const { heading, content } = req.body;
    client.query(`INSERT INTO notes (email , heading , content  ) VALUES ('${req.email}' , '${heading}' ,'${content}');`).then((data) => {
        res.status(200).json({
            message: "successfully"
        })
    })
        .catch((err) => {
            res.status(500).json({
                mesaage: "error in server"
            })
        });

};
exports.getAllNotes = (req, res) => {
    client.query(`SELECT * FROM notes where email='${req.email}'`)
        .then((data) => {
            const noteData = data.rows;
            noteData.map((note) => {
                return {
                    noteId: note.noteid,
                    heading: note.heading,
                    content: note.content,
                };


            });
            console.log(filteredData);
            res.status(200).json({
                message: "nots recieved successfully",
                data: filteredData,
            })
        })
        .catch((err) => {
            res.status(500).json({
                mesaage: "error in server"
            })
        });



};
exports.updateNote = (req, res) => {
    const noteId = req.params.noteId;
    const { heading, content } = req.body;
    client.query(`UPDATE notes SET heading='${heading}' , content='${content}'  WHERE noteid='${noteId}'`)
        .then((data) => {
            res.status(200).json({
                message: " successfully",

            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                mesaage: "error in server"
            })
        });


};