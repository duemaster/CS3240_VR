AFRAME.registerComponent('air-resistance', {
    schema: {
        range: { type: 'int', default: 10 },
        resistance: { type: 'int', default: 5 }
    },
    init: function() {
        console.log("Air Resistance Component");
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

        //If player within asteriod's "air field"
        if (distance <= this.data.range) {
            //Reduce player's velocity
            try {
                let velocity = player.body.velocity;

                //Set speed to 0 if too low
                if (velocity.length() < 0.01) {
                    velocity.setZero();
                } else {
                    let reduceFactor = 1 - (this.data.resistance / 100);
                    velocity = velocity.set(reduceFactor * velocity.x, reduceFactor * velocity.y, reduceFactor * velocity.z);

                }
            } catch (e) {
                console.log(e);
            }
        }
    },
    remove: function() {},
    pause: function() {},
    play: function() {}
});