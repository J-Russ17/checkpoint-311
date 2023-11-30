let db = require("./db")

let listTeams = function(req, res){
    let sql = "select * from nflTeams"
    
    db.query(sql, function(error, results){
        if(error){
            console.error("Failed to find items", error)
            res.sendStatus(500);
        } else {
            res.json(results)
        }
    })
}

let teamId = function(req, res){

    let id = req.params.id
    
    let sql = "SELECT * FROM nflTeams WHERE id = ?"
    let params = [id]

    db.query(sql, params, function(error, results){
        if(error){
            console.error("Couldn't find items error", error)
            res.sendStatus(500)
        } else {
        res.json(results)
        }
    })
}

let addTeam = function(req, res){
    let { teamName, city } = req.body
    let sql = "INSERT INTO nflTeams (teamName, city) VALUES (?, ?)"
    let params = [teamName, city]

    db.query(sql, params, function(error, results) {
        if (error) {
            console.error('Error adding team:', error);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    });
    
}

let deleteTeam = function(req, res){
    let id = req.params.id
    let sql = "delete from nflTeams where id = ?"
    let params = [id]

    db.query(sql, params, function(error, results){
        if(error){
            console.error("Couldn't delete")
        } else {
            res.sendStatus(202)
        }
    })
}

let updateTeam = function(req, res){
    let id = req.params.id
    let {teamName, city} = req.body
    let sql = "UPDATE nflTeams SET teamName = ?, city = ? WHERE id = ?"
    let params = [teamName, city, id]

    db.query(sql, params, function(error, results){
        if (error) {
            console.error('Error updating team:', error);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    })

}

module.exports = {
    listTeams,
    teamId,
    addTeam,
    deleteTeam,
    updateTeam
}