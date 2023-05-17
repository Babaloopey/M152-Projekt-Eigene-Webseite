var earth = new Image();
var plane = new Image();
function init() {
    earth.src = "../../images/earth.png";
    plane.src = "../../images/plane.png";
    window.requestAnimationFrame(draw);
}
function draw() {
    var ctx = document.getElementById(
        "canvas").getContext("2d");
    ctx.globalCompositeOperation =
        "destination-over";
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.save();
    ctx.translate(250, 250);
    // plane
    var time = new Date();
    ctx.rotate((((2 * Math.PI) / 60) *
        time.getSeconds() + ((2 * Math.PI) / 60000) *
        time.getMilliseconds()) * 20);
    ctx.translate(200, 0);
    ctx.drawImage(plane, -12, -12, 20, 50);
    ctx.restore();
    // plane orbit
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0,
        Math.PI * 2, false);
    ctx.stroke();
    ctx.drawImage(earth, 50, 55, 400, 400);
    window.requestAnimationFrame(draw);
}
init();