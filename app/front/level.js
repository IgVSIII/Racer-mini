export var Level = function(levelConf, initConf) {
    this.scale = initConf.scale;
    this.enveroment = levelConf;
    this.currentLevel = 0; 
    this.road = initConf.asphalt;
    this.barrier = initConf.barrier;
    this.maxLevel = levelConf.length;
    this.roadLength = levelConf[0][0].length;
    this.state = 'pause';
    this.absolutePosition = 0;
    this.width = initConf.width;
    this.countCrash = 0;
}

Level.prototype.restrart = function() {
    this.absolutePosition = 0;
}

Level.prototype.movAbsolutePosition = function(plus , player) {
    if (this.roadLength * this.scale - this.absolutePosition + plus > this.width ){
        this.absolutePosition += plus;
    } else {
        player.movPositionX(plus);
    }
}

Level.prototype.getLevel = function() {
    return this.enveroment[this.currentLevel];
}

Level.prototype.fillActors = function(Actors) {    
    var actors = [];
    var currentLevel = this.getLevel();

        for (var strip = 0; strip < currentLevel.length; strip++) {
            for (var chunk = 0; chunk < currentLevel[strip].length; chunk++ ) {
                 if (currentLevel[strip][chunk] === "!") {
                     actors.push(new Actors(chunk * this.scale, strip * this.scale));
                }
            }
        }
    return actors;
}


Level.prototype.CollisionCheck = function(player, actors) {
    var isCollision = false;
    actors.forEach(element => {
        if (element.positionY === player.positionY ) {
            if (this.absolutePosition + player.positionX + this.scale*2 >= element.positionX && this.absolutePosition + player.positionX   < element.positionX + this.scale){
                isCollision = true;
                this.countCrash++;
            }
        }      
    });
    return isCollision;    
}

Level.prototype.WinCheck = function(player) {
    var isWin = false;
    if (this.absolutePosition + player.positionX + this.scale*2 >= this.roadLength * this.scale) {
        isWin = true;
        if (this.currentLevel < this.maxLevel - 1) {
            this.currentLevel++;
            player.chageMaxSpeed();
        } else if (this.currentLevel + 1 === this.maxLevel) {
            this.currentLevel = 0;
        }
    }
    return isWin;
}

