export var KeyboardController = function(event, player) {

    if (event.code === 'ArrowUp') {
        player.movPositionY(-16);
    } else if (event.code === 'ArrowDown') {
        player.movPositionY(16);
    } else if (event.code === 'Space') {
        player.chageSpeed(player.maxSpeed);
    }
}

export var EnveromentUpdate = function(player, level) {
    player.restrart();
    level.restrart();
}

export var DrawElement = function(player, level, graphicElements, cx, Actor, initConf ) {
          

    var actors = level.fillActors(Actor);

    var currentLevel = level.getLevel();

    if (level.CollisionCheck(player, actors) || level.WinCheck(player)) {
        EnveromentUpdate(player, level);
        updateInfo(level);     
    } else {

        cx.clearRect(0, 0, initConf.width, initConf.height);
        level.movAbsolutePosition(player.speed, player);

        for (var strip = 0; strip < currentLevel.length; strip++) {
            for (var chunk = 0; chunk < currentLevel[strip].length; chunk++ ) {
                if (currentLevel[strip][chunk] === "_") {
                    cx.drawImage(graphicElements.road, chunk * level.scale - level.absolutePosition, strip * level.scale);
                } else if (currentLevel[strip][chunk] === "!") {
                    cx.drawImage(graphicElements.barrier, chunk * level.scale - level.absolutePosition, strip * level.scale);
                }
            }
        }

        cx.drawImage(graphicElements.car, player.positionX, player.positionY);

        if (player.speed === 0) {
            document.getElementById('start').innerText = "PRESS SPACE FOR START";
        } else {
            document.getElementById('start').innerText = Math.round(player.speed * 100) + " km/h";
        }

    }

    level.movAbsolutePosition(player.speed, player);

}


var updateInfo = function(level) {
    const levelInfo = document.getElementById('level');
    const crashInfo = document.getElementById('crash');
    levelInfo.innerText = level.currentLevel;
    crashInfo.innerText = level.countCrash;
}
