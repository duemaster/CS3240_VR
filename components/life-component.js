AFRAME.registerComponent('life', {
    schema: {
    },
    init: function () {
        console.log("Life Component");

        this.el.addEventListener('collide', function (e) {
            // console.log(`Player Collided with ${e.detail.body.el.className}`);
            processCollision(e.detail.body.el.className);
        })
    },
    update: function () { },
    tick: function () {
    },
    remove: function () { },
    pause: function () { },
    play: function () { }
});

function processCollision(collidedTarget, ref) {
    console.log(collidedTarget);
    switch (collidedTarget) {
        case "wall":
            console.log("Wall Collided");
            $('.wall').attr("material", "opacity: 0.2");
            setTimeout(() => {
                $('.wall').attr("material", "opacity: 0");
            }, 2000)
            break;
        case "nasa":
            console.log("Collided with NASA");
            console.log("Collided with NASA");
            console.log(window.isGameOver);
            if (!window.isGameOver) {
                $("#camera").append("<a-image src='#lose' position='0 0 -1'></a-image>");
                window.isGameOver = true;
            }
            break;
        case "UFO":
        console.log("Collided with UFO");
        console.log(window.isGameOver);
        if (!window.isGameOver) {
            $("#camera").append("<a-image src='#win' position='0 0 -1'></a-image>");
            window.isGameOver = true;
        }
            break;
    }
}