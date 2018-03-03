AFRAME.registerComponent('life', {
    schema: {
        // objRef: { type: 'string', default: { test: 123 } }
    },
    init: function() {
        console.log("Set up!");
    },
    update: function() {},
    tick: function() {
        var boxRef = this.el;
        if (boxRef.getAttribute("position").y < 0) {
            console.log("Died!");
            // document.querySelector('a-scene').reload();
            location.reload();
        }
    },
    remove: function() {},
    pause: function() {},
    play: function() {}
});