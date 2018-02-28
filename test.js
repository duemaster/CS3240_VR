$('body').keyup((e) => {
    if (e.keyCode == 32) {
        var box = document.getElementById("box");

        console.log(box.getAttribute("position"));

        box.body.applyImpulse(
            /* impulse */
            new CANNON.Vec3(0, 20, 0),
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