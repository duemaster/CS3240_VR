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

function processCollision(collidedTarget) {
    switch (collidedTarget) {
        case "wall":
            console.log("Wall Collided");
            $('.wall').attr("material", "opacity: 0.2");
            setTimeout(() => {
                $('.wall').attr("material", "opacity: 0");
            }, 2000)
            break;
        case "nasa":
            break;
        case "home":
            break;
    }
}