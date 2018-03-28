isGameOver = false;

// switch to stereoscopic mode directly on page load, this needs to be after the a-scene loads.
var scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
    scene.enterVR();
} else {
    scene.addEventListener('loaded', function () {
        setTimeout(function () {
            scene.enterVR();
        }, 1000);
    });
}

var jumpInDirection = function () {
    let player = document.getElementById("box");

    //Get camera facing location
    let camera_direction = document.getElementById("camera").object3D.getWorldDirection();

    let forceAmount = -20;

    player.body.applyImpulse(
        /* impulse */
        new CANNON.Vec3(forceAmount * camera_direction.x, forceAmount * camera_direction.y, forceAmount * camera_direction.z),
        /* world position */
        new CANNON.Vec3().copy({ x: 0, y: 0, z: 0 })
    );
}

$('body').keyup((e) => {
    if (e.keyCode == 32) {
        if (window.isGameOver) {
            location.reload();
            return;
        }
        new Audio('assets/jet.mp3').play();
        jumpInDirection();
    }
})

// document.getElementById("box")
//     .addEventListener("hitstart", (e) => {
//         console.log(e);
//         location.reload();
//     });

$('body').on("touchstart", (e) => {
    if (window.isGameOver) {
        location.reload();
        return;
    }
    jumpInDirection();
})