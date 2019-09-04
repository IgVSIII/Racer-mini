import {KeyboardController, EnveromentUpdate, DrawElement} from './functions.js';
import {initConf, levelConf} from './config.js';

import {Level} from './level.js';
import {Player} from './player.js';
import {Actor} from './actor.js';

var myPlayer = new Player(initConf);
var myLevel = new Level(levelConf, initConf);
//var actors = myLevel.fillActors(Actor);


var cx = document.querySelector("canvas").getContext("2d");

var graphicElements = {
    car: document.createElement("img"),
    road: document.createElement("img"),
    barrier: document.createElement("img")
};

graphicElements.road.src = myLevel.road;
graphicElements.barrier.src = myLevel.barrier;
graphicElements.car.src = myPlayer.image;



graphicElements.car.addEventListener("load", function() {
    setInterval(function() {
       DrawElement(myPlayer, myLevel, graphicElements, cx, Actor, initConf)
    }, 10)       
});

window.addEventListener("keydown", function(event) {
    KeyboardController(event, myPlayer, myLevel); 
});

