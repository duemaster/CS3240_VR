AFRAME.registerComponent('camera-follow', {
    schema: {},
    init: function() {
        console.log("Camera Follow Component");
    },
    update: function() {},
    tick: function() {
        let ownRef = this.el;
        let cameraRef = document.getElementById('camera');
        cameraRef.setAttribute("position", ownRef.object3D.getWorldPosition());
    },
    remove: function() {},
    pause: function() {},
    play: function() {}
});