AFRAME.registerComponent('timer', {
    schema: {
        currentTime: { type: 'number', default: 0 }
    },
    init: function () {
        console.log("Timer Component");
    },
    update: function () { },
    tick: function () {
        if (window.isGameOver)
            return;

        this.data.currentTime += 1;
        let currentSecondElapsed = Math.floor(this.data.currentTime / 60);
        let momentTimer = moment().hour(0).minute(0).second(currentSecondElapsed);
        this.el.setAttribute("value", momentTimer.format("mm:ss"));
    },
    remove: function () { },
    pause: function () {;
    },
    play: function () { }
});