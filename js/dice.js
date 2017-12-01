const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dice$ = (dice) => Rx.Observable.create(function (observer) {
    setTimeout(function () {
        observer.next({diceElement: dice, number: random(1, 6)});
        observer.complete();
    }, random(1000, 3000));
});

const rollDices$ = dices => Rx.Observable.from(dices).mergeMap(dice$);

const roll = (event) => {
    var id = event.target.id;
    var dices = document.querySelectorAll(".dice[id^='" + id + "']");

    document.querySelector(".player#" + id).className = "player";
    document.querySelector("button#" + id).disabled = true;

    dices.forEach(startAnimation);
    var sum = 0;
    rollDices$(dices).subscribe({
        next: function next(dice) {
            stopAnimation(dice.diceElement, dice.number);
            sum += dice.number;
        },
        error: null,
        complete: function complete() {
            document.getElementById(id).classList += sum === 7 ? " player-winner" : " player-loser";
            document.querySelector("button#" + id).disabled = false;
        }
    });
};


startAnimation = (dice) => dice.addAttribute("className", "dice rolling");

stopAnimation = (dice, face) => dice.addAttribute("className", "dice").style.transform = "rotateX(" + positions[face].x + "deg) rotateY(" + positions[face].y + "deg)";
