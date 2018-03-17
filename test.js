var jumpInDirection = function() {
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
        jumpInDirection();
    }
})

document.getElementById("box")
    .addEventListener("hitend", () => {
        console.log("collide");
        // location.reload();
    });


$('body').keyup((e) => {
    if (e.keyCode == 13) {
        // document.querySelector('a-scene').reload();
        location.reload();
    }
})

    // document.onclick = function(e) {
    //     jumpInDirection();
    // }