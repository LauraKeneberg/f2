var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Бабушка Гамми */
router.get('/babushka', function(req, res, next) {
  res.render('hero', {
    title: "Бабушка Гамми",
    picture: "images/babushka.jpg",
    desc: "Любит готовить и учить детей."
  })
});

/* Страница Густо Гамми */
router.get('/gusto', function(req, res, next) {
  res.render('hero', {
    title: "Густо Гамми",
    picture: "images/gusto.jpg",
    desc: "Любит рисовать и создавать скульптуры."
  })
});

/* Страница Колдун Гамми */
router.get('/koldun', function(req, res, next) {
  res.render('hero', {
    title: "Бабушка Гамми",
    picture: "images/koldun.jpg",
    desc: "Любит изучать книги, механику и магию."
  })
});

/* Страница Малыш Гамми */
router.get('/malish', function(req, res, next) {
  res.render('hero', {
    title: "Бабушка Гамми",
    picture: "images/malish.jpg",
    desc: "Любит сказки о рыцарях и игры, связанные с ними."
  })
});

/* Страница Солнышко Гамми */
router.get('/solnishko', function(req, res, next) {
  res.render('hero', {
    title: "Бабушка Гамми",
    picture: "images/solnishko.jpg",
    desc: "Любит сказки о принцессах и наблюдать за людьми."
  })
});

/* Страница Толстун Гамми */
router.get('/tolstun', function(req, res, next) {
  res.render('hero', {
    title: "Бабушка Гамми",
    picture: "images/tolstun.jpg",
    desc: "Любит помогать всем, спать и кушать."
  })
});

/* Страница Ворчун Гамми */
router.get('/vorchun', function(req, res, next) {
  res.render('hero', {
    title: "Бабушка Гамми",
    picture: "images/vorchun.jpg",
    desc: "Любит ворчать и спорить."
  })
});


module.exports = router;
