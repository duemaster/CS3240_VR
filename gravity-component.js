AFRAME.registerComponent('gravity', {
    schema: {},
    init: function() {
        console.log("Gravity Component");
    },
    update: function() {},
    tick: function() {
        //get coordinate of asteriod
        let asteriodCoord = this.el.object3D.getWorldPosition();
        //get coordinate of player
        let playerCoord = document.getElementById("box").object3D.getWorldPosition();

        //Get vector from player to asteriod
        let gravVec = new THREE.Vector3();
        gravVec.subVectors(asteriodCoord, gravVec).normalize();

        //calculate distance
        let distance = asteriodCoord.distanceTo(playerCoord);

        //Get apply force on player
        let player = document.getElementById("box");
        let gravForce = 1 / Math.pow(distance, 2);
        try {
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