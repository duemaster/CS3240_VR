$('body').keyup((e) => {
    if (e.keyCode == 32) {
        // var box = document.getElementById("box");
        // console.log(box.getAttribute("position"));

        //Get camera facing location
        let camera_direction = document.getElementById("camera").object3D.getWorldDirection();

        let forceAmount = -40;

        box.body.applyImpulse(
            /* impulse */
            new CANNON.Vec3(forceAmount * camera_direction.x, forceAmount * camera_direction.y, forceAmount * camera_direction.z),
            /* world position */
            // new CANNON.Vec3().copy(box.getAttribute("position"))
            new CANNON.Vec3().copy({ x: 0, y: 0, z: 0 })
        );
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