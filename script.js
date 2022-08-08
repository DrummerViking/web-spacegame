/*/set up the class GameObject
class GameObject {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
    constructor(x, y, type) {
        super(x, y, type)
    }

    //this movable object can be moved on the screen
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
    constructor(x, y) {
        super(x, y, 'Hero')
    }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
    constructor(x, y) {
        super(x, y, 'Tree')
    }
}

//but a tree cannot
const tree = new Tree();

//set up an EventEmitter class that contains listeners
class EventEmitter {
    constructor() {
        this.listeners = {};
    }
    //when a message is received, let the listener to handle its payload
    on(message, listener) {
        if (!this.listeners[message]) {
            this.listeners[message] = [];
        }
        this.listeners[message].push(listener);
    }
    //when a message is sent, send it to a listener with some payload
    emit(message, payload = null) {
        if (this.listeners[message]) {
            this.listeners[message].forEach(l => l(message, payload))
        }
    }
}

//set up an EventEmitter class that contains listeners
class EventEmitter {
    constructor() {
        this.listeners = {};
    }
    //when a message is received, let the listener to handle its payload
    on(message, listener) {
        if (!this.listeners[message]) {
            this.listeners[message] = [];
        }
        this.listeners[message].push(listener);
    }
    //when a message is sent, send it to a listener with some payload
    emit(message, payload = null) {
        if (this.listeners[message]) {
            this.listeners[message].forEach(l => l(message, payload))
        }
    }
}

//set up a message structure
const Messages = {
    HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0, 0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.move(5, 0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
    if (evt.key === 'ArrowLeft') {
        eventEmitter.emit(Messages.HERO_MOVE_LEFT)
    }
});

eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.move(5, 0);
});


// draws a red rectangle
//1. get the canvas referenc
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0, 0, 200, 200) // x,y,width, height
*/

function loadAsset(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            // image loaded and ready to be used
            resolve(img);
        }
    })
}

// use like so
async function run() {
    const heroImg = await loadAsset("./assets/player.png");
    const monsterImg = await loadAsset("./assets/enemyShip.png");
    
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
    ctx.drawImage(monsterImg, 0,0);
}