class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
    }
    draw() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(7);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, PointB.y);
        pop();
    }
}

