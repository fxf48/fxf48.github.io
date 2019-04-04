// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    const keys = [0, 2, 0, 2, 3, 1, 3, 1, 5, 5, 4, 4, 5, 5, 4, 4];
    var index = 0;
    var inputManager = new KeyboardInputManager("join it");
    inputManager.on("move", function (direction) {
        console.log(direction);
        if (index >= keys.length) {
            return
        }
        if (direction === keys[index]) {
            index++;
            if (index === keys.length) {
                var container = document.getElementById("game-container");
                container.setAttribute("class", "game-container");
                container.removeAttribute("style");
                new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
                document.getElementById("notification").setAttribute("style", "display: none");
            }
        } else {
            index = 0;
        }
    });
});
