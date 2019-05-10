const express = require('express');
var router = express.Router();

var preface = require('./preface');
var standard_color = require('./standard-color');
var standard_word = require('./standard-word');
var icon = require('./icon');
var _module = require('./module');
var button = require('./button');
var public_control = require('./public-control');
var standard_pic = require('./standard-pic');
var layout = require('./layout');
var component_library = require('./component-library');
var version = require('./version');


router.use('/preface',preface);
router.use('/standard-color',standard_color);
router.use('/standard-word',standard_word);
router.use('/icon',icon);
router.use('/button',button);
router.use('/public-control',public_control);
router.use('/module',_module);
router.use('/standard-pic',standard_pic);
router.use('/layout',layout);
router.use('/component-library',component_library);
router.use('/version',version);

module.exports = router;