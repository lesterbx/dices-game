const diceFaces = () => '<div class="face front"></div>' +
                        '<div class="face back"></div>' +
                        '<div class="face left"></div>' +
                        '<div class="face bottom"></div>' +
                        '<div class="face top"></div>' +
                        '<div class="face right"></div>';

const createDice = id =>  document.createElement("div").addAttribute("id", id).addAttribute("className", "dice").addAttribute("innerHTML", diceFaces());

const createDices = (id, num) => emptyArray(num).map((_, i) => createDice(id + i));

const createButton = id => document.createElement("button").addAttribute("id", id).addAttribute("className", "button-roll").addAttribute("innerHTML", "Roll").addAttribute("onclick", roll);

const createPlayer = name => document.createElement("div").addAttribute("id", slug(name)).addAttribute("className", "player").addAttribute("innerHTML",`<h3>${name}</h3>` );

const newPlayer = name => createPlayer(name).addChilds(createDices(slug(name), numDices())).addChild(createButton(slug(name)));

const createPlayers = num => emptyArray(num).map((_, i) => `Player ${i+1}`).forEach((name => document.querySelector("main").addChild(newPlayer(name))));