const express = require('express')
// Створюємо новий маршрутизатор
const router = express.Router()

const providersController = require('../controller/providers.controller');
// Перегляд всіх
router.get('/', providersController.findAll);
// Створення нового
router.post('/', providersController.create);
// Пошук за id
router.get('/:id', providersController.findById);
// Редагування id
// !router.put('/:id', providersController.update);
router.post('/put/:id', providersController.update)
// Видалення за id
// !router.delete('/:id', providersController.delete);
router.get('/delete/:id', providersController.delete);
// Експортуємо за замовченням router
module.exports = router