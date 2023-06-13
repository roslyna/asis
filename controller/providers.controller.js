const express = require('express')
let app = express();
let path = require('path');
app.engine('ejs', require('ejs').__express);
const Providers = require('../model/providers.model');
// Виведення всій інформації з таблиці
exports.findAll = function (req, res) {
    Providers.findAll(function (err, providers) {
        console.log('controller')
        if (err)
            res.send(err);
        // !З'єднуємо з файлом виведення
        res.render('providers.ejs', { Providers: providers });
        // res.send(providers);

    });
};

// Створення нового запису
exports.create = function (req, res) {
    const new_providers = new Providers(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Providers.create(new_providers, function (err, providers) {
            if (err)
                res.send(err);
            // !Переходимо на сторинку з таблицей відділів
            res.redirect('/api/providers')
        });
    }
};
// Пошук за id
exports.findById = function (req, res) {
    Providers.findById(req.params.id, function (err, providers) {
        if (err)
            res.send(err);
        // !Перехід на сторінку редагування
        res.render('providers_edit.ejs', { Providers: providers });
        // res.json(providers);
    });
};
// редагування інформації
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Providers.update(req.params.id, new Providers(req.body), function (err, providers) {
            if (err)
                res.send(err);
            // !Повернення на сторінку з таблицею відділів
            res.redirect('/api/providers')
            // res.json({ error: false, message: 'providers successfully updated' });
        });
    }
};
// видалення інформації
exports.delete = function (req, res) {
    Providers.delete(req.params.id, function (err, providers) {
        console.log("HI" + req.params.id);
        if (err)
            res.send(err);
        res.redirect('/api/providers')
        // res.json({ error: false, message: 'providers successfully deleted' });
    });
};