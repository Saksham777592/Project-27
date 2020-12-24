class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            friction: 0.3,
            restitution: 1,
            density: 0.8
        }
        this.body = Bodies.circle(x, y , r, options);
        this.r = r;

        World.add(world, this.body);
    }
    draw() {
        var pos = this.body.position;
        fill("red");
        ellipse(pos.x, pos.y, this.r);
        ellipseMode(RADIUS);
    }
}