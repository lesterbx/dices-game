"use strict";

function addEvents() {
    [{
        selector: "#button-play",
        event: "onclick",
        func: play
    }, {
        selector: "#input-players",
        event: "onkeyup",
        func: function func() {
            return render();
        }
    }, {
        selector: "#input-dices",
        event: "onkeyup",
        func: function func() {
            return render();
        }
    }].forEach(({selector, event, func}) => document.querySelector(selector)[event] = func);
};

function render() {
    var isPlaying = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var inputs = document.querySelectorAll("header input");
    var numDices = document.querySelector("#input-dices");
    var playButton = document.querySelector("#button-play");

    playButton.disabled = Array.from(inputs.values()).some((input) => input.value === "");
    playButton.className = isPlaying ? "button-stop" : "button-play";
    playButton.onclick = isPlaying ? stop : play;

    inputs.forEach(function (input) {
        return input.disabled = isPlaying;
    });
};

function play() {
    createPlayers(numPlayers());
    render(true);
};

function stop() {
    document.querySelector("main").innerHTML = "";
    render();
};

function init() {
    addEvents();
    render();
};

init();