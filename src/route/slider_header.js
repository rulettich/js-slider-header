// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('slider_header', {
    // вказуємо назву контейнера
    name: 'slider_header',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'slider_header',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

// Експортуємо глобальний роутер
module.exports = router
