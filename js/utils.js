Node.prototype.addChild = function (child) {
    this.appendChild(child);
    return this;
}

Node.prototype.addChilds = function (childs) {
    childs.forEach(child => this.appendChild(child));
    return this;
}

Node.prototype.addAttribute = function (att, value){
    this[att] = value;
    return this;
}

const slug = str => str.toLowerCase().replace(" ", "_");

const emptyArray = n => Array(n).fill();

const numDices = () => Number(document.querySelector("#input-dices").value);

const numPlayers = () => Number(document.querySelector("#input-players").value)