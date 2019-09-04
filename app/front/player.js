export var Player = function(initConf) {
    this.positionX = initConf.scale;
    this.positionY =  initConf.scale;
    this.scale = initConf.scale;
    this.image = initConf.car;
    this.speed = 0;
    this.maxSpeed = initConf.startSpeed; 
    this.border = initConf.height;    
}

Player.prototype.movPositionX = function(plus) {
    this.positionX += plus;
}


Player.prototype.movPositionY = function(plus) {
    if (this.positionY + plus >=0 && this.positionY + plus < this.border) {
        this.positionY += plus
    }
}


Player.prototype.chageSpeed = function(speed) {
    if ((this.speed + speed) <= this.maxSpeed) {
        this.speed += speed;
    } 
}

Player.prototype.chageMaxSpeed = function() {
    this.maxSpeed += 0.4;
}

Player.prototype.restrart = function() {
    this.positionX = this.scale;
    this.positionY =  this.scale;
    this.speed = 0;
}


