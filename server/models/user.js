class User {
    constructor(firstName, lastName, username, email, password) {
        this.first_name = firstName,
        this.last_name = lastName,
        this.username = username,
        this.email = email,
        this.password = password
    }
    // updateUser (id, user) {
    //     db.connection.query("UPDATE users SET username = ? WHERE id = ?", [user.username, id], function (err) {
    //         if (err) throw err;
    //         else return this.values;
    //     }); 
    // }
    // need to only get specific data from users
    // getAllUsers () {
    //     db.connection.query("Select * from users", function (err) {
    //         if (err) throw err;
    //         else return this.values;
    //     });   
    // }
    // not sure if will work
    // remove (id) {
    //     db.connection.query("DELETE FROM users WHERE id = ?", [id], function (err) {
    //         if (err) throw err;
    //         else return this.values;
    //     }); 
    // }
   
}

module.exports = {User: User};