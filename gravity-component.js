AFRAME.registerComponent('gravity', {
    schema: {
        mass: { type: 'int', default: 5 },
        gravity_range: { type: 'int', default: 1000 }
    },
    init: function() {
        console.log("Gravity Component");
    },
    update: function() {},
    tick: function() {

        let asteriod = this.el;
        let player = document.getElementById("box");

        //get coordinate of asteriod
        let asteriodCoord = asteriod.object3D.getWorldPosition();
        //get coordinate of player
        let playerCoord = player.object3D.getWorldPosition();

        //Get vector from player to asteriod
        let gravVec = new THREE.Vector3();
        gravVec.subVectors(asteriodCoord, playerCoord);

        //calculate distance
        let distance = asteriodCoord.distanceTo(playerCoord);

        //Get apply force on player
        let gravForce = 5 * asteriod.mass / Math.pow(distance, 2);

        try {
            //Apply no force if outside gravity range
            if (distance > asteriod.gravity_range) {
                return;
            }

            player.body.applyImpulse(
                /* impulse */
                new CANNON.Vec3(gravForce * gravVec.x, gravForce * gravVec.y, gravForce * gravVec.z),
                /* world position */
                new CANNON.Vec3().copy({ x: 0, y: 0, z: 0 })
            );
        } catch (e) {

        }
    },
    remove: function() {},
    pause: function() {},
    play: function() {}
});