 connection = require('/Users/irinaskitina/WebstormProjects/asis/config/config.bd.js');
//const {query} = require("express");
// Функція для створення об'єкту Providers
let Providers = function (providers) {
    this.code_provider = providers.code_provider;
    this.name_provider = providers.name_provider;
    this.owner = providers.owner;
    this.email = providers.email;
}

Providers.create = function (newProv, result) {
    connection.query("INSERT INTO providers set ?", newProv, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Providers.findById = function (id, result) {
    connection.query("Select * from providers where code_provider = ? ", id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
};

Providers.findAll = function (result) {
    connection.query("Select * from providers",
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('Provider : ', res);
                result(null, res);
            }
        });
};

Providers.update = function (id, prov, result) {
    connection.query("UPDATE providers SET name_provider=? WHERE code_provider = ?",
        [prov.name_provider, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Providers.delete = function (id, result) {
    connection.query("DELETE FROM providers WHERE code_provider = ?", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
};

module.exports = Providers;